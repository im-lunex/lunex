'use client'

import { useEffect, useRef } from 'react'
import { animate, type Animation } from 'animejs'

export default function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const viewLabelRef = useRef<HTMLSpanElement | null>(null)

  const pos = useRef({ mx: 0, my: 0, ox: 0, oy: 0 })
  const cursorType = useRef('default')
  const outerAnim = useRef<Animation | null>(null)
  const innerAnim = useRef<Animation | null>(null)
  const labelAnim = useRef<Animation | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const p = pos.current
    const outer = outerRef.current!
    const inner = innerRef.current!

    const css = (v: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(v).trim()

    // ── rAF position loop — never stops, survives page changes ──────
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      inner.style.transform = `translate(${p.mx}px, ${p.my}px) translate(-50%,-50%)`
      p.ox = lerp(p.ox, p.mx, 0.14)
      p.oy = lerp(p.oy, p.my, 0.14)
      outer.style.transform = `translate(${p.ox}px, ${p.oy}px) translate(-50%,-50%)`
      if (viewLabelRef.current) {
        viewLabelRef.current.style.transform = `translate(${p.ox}px, ${p.oy}px) translate(-50%,-50%)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    // ── Helpers ─────────────────────────────────────────────────────
    const animOuter = (props: Record<string, unknown>, duration: number, easing: string) => {
      outerAnim.current?.pause()
      outerAnim.current = animate(outer, { ...props, duration, easing })
    }

    const animInner = (props: Record<string, unknown>, duration: number, easing: string) => {
      innerAnim.current?.pause()
      innerAnim.current = animate(inner, { ...props, duration, easing })
    }

    const removeLabel = () => {
      labelAnim.current?.pause()
      labelAnim.current = null
      viewLabelRef.current?.remove()
      viewLabelRef.current = null
    }

    const applyDefault = () => {
      outer.style.mixBlendMode = 'normal'
      outer.style.background = 'transparent'
      outer.style.borderColor = `oklch(from var(--foreground) l c h / 0.5)`
      animOuter({ scale: 1 }, 260, 'easeOutElastic(1, .7)')
      animInner({ scale: 1, opacity: 1 }, 180, 'easeOutQuart')
    }

    const reset = () => {
      if (cursorType.current === 'default') return
      cursorType.current = 'default'
      removeLabel()
      applyDefault()
    }

    const setCursor = (type: string) => {
      if (cursorType.current === type) return
      cursorType.current = type
      removeLabel()
      outer.style.mixBlendMode = 'normal'

      switch (type) {
        case 'invert':
          outer.style.background = css('--foreground')
          outer.style.borderColor = 'transparent'
          outer.style.mixBlendMode = 'difference'
          animOuter({ scale: 1.15 }, 220, 'easeOutQuart')
          animInner({ scale: 0, opacity: 0 }, 140, 'easeOutQuart')
          break

        case 'link':
          outer.style.background = css('--foreground')
          outer.style.borderColor = 'transparent'
          outer.style.mixBlendMode = 'difference'
          animOuter({ scale: 0.55 }, 200, 'easeOutElastic(1, .9)')
          animInner({ scale: 0, opacity: 0 }, 140, 'easeOutQuart')
          break

        case 'btn':
          outer.style.background = `oklch(from var(--primary) l c h / 0.12)`
          outer.style.borderColor = css('--primary')
          animOuter({ scale: 1.6 }, 320, 'easeOutElastic(1, .6)')
          animInner({ scale: 0, opacity: 0 }, 140, 'easeOutQuart')
          break

        case 'view':
          outer.style.background = `oklch(from var(--primary) l c h / 0.1)`
          outer.style.borderColor = 'transparent'
          animOuter({ scale: 2.2 }, 340, 'easeOutElastic(1, .5)')
          animInner({ scale: 0, opacity: 0 }, 140, 'easeOutQuart')
          {
            const label = document.createElement('span')
            label.textContent = 'view'
            Object.assign(label.style, {
              position: 'fixed',
              top: '0',
              left: '0',
              pointerEvents: 'none',
              zIndex: '9999',
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: css('--foreground'),
              opacity: '0',
              willChange: 'transform',
              fontFamily: css('--font-sans'),
            })
            document.body.appendChild(label)
            viewLabelRef.current = label
            labelAnim.current = animate(label, { opacity: 1, duration: 140, delay: 50, easing: 'easeOutQuart' })
          }
          break

        case 'card':
          outer.style.background = `oklch(from var(--foreground) l c h / 0.04)`
          outer.style.borderColor = css('--border')
          animOuter({ scale: 1.35 }, 260, 'easeOutElastic(1, .7)')
          animInner({ scale: 0.5, opacity: 0.3 }, 180, 'easeOutQuart')
          break

        default:
          reset()
      }
    }

    // ── Event delegation on document — survives ANY page navigation ─
    // Instead of querying elements once, we check the hovered target live.
    // This means zero re-setup needed after route changes.
    const getDataCursor = (e: MouseEvent): string | null => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor]')
      return el?.dataset.cursor ?? null
    }

    const onMouseOver = (e: MouseEvent) => {
      const type = getDataCursor(e)
      if (type) {
        setCursor(type)
      } else {
        reset()
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      // Only reset if we're leaving into something with no data-cursor
      const to = e.relatedTarget as HTMLElement | null
      if (!to?.closest('[data-cursor]')) {
        reset()
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      p.mx = e.clientX
      p.my = e.clientY
    }

    // Reset when mouse leaves viewport (alt-tab, switching windows)
    const onDocLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) reset()
    }

    // Reset on tab switch
    const onVisChange = () => {
      if (document.hidden) reset()
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseover', onMouseOver, { passive: true })
    document.addEventListener('mouseout', onMouseOut, { passive: true })
    document.addEventListener('mouseleave', onDocLeave)
    document.addEventListener('visibilitychange', onVisChange)

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      document.removeEventListener('mouseleave', onDocLeave)
      document.removeEventListener('visibilitychange', onVisChange)
      outerAnim.current?.pause()
      innerAnim.current?.pause()
      labelAnim.current?.pause()
      removeLabel()
    }
  }, [])

  return (
    <>
      <div
        ref={outerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid oklch(from var(--foreground) l c h / 0.5)',
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          transition: 'background 0.15s ease, border-color 0.15s ease',
        }}
      />
      <div
        ref={innerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: 'var(--primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />
    </>
  )
}
