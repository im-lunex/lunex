'use client'
import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

export default function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const viewLabelRef = useRef<HTMLSpanElement | null>(null)
  const pos = useRef({ mx: 0, my: 0, ox: 0, oy: 0 })
  const cursorType = useRef('default')

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const p = pos.current
    const outer = outerRef.current!
    const inner = innerRef.current!

    const css = (v: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(v).trim()

    const onMove = (e: MouseEvent) => {
      p.mx = e.clientX
      p.my = e.clientY
    }
    document.addEventListener('mousemove', onMove)

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    let raf: number
    const tick = () => {
      inner.style.transform = `translate(${p.mx}px, ${p.my}px) translate(-50%, -50%)`
      p.ox = lerp(p.ox, p.mx, 0.14)
      p.oy = lerp(p.oy, p.my, 0.14)
      outer.style.transform = `translate(${p.ox}px, ${p.oy}px) translate(-50%, -50%)`
      if (viewLabelRef.current) {
        viewLabelRef.current.style.transform = `translate(${p.ox}px, ${p.oy}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    const animateOuter = (scale: number, opts?: { duration?: number; easing?: string }) =>
      animate(outer, {
        scale,
        duration: opts?.duration ?? 320,
        easing: opts?.easing ?? 'easeOutElastic(1, .7)',
      })

    const animateInner = (scale: number, opacity: number) =>
      animate(inner, { scale, opacity, duration: 200, easing: 'easeOutQuart' })

    const reset = () => {
      cursorType.current = 'default'
      outer.style.mixBlendMode = 'normal'
      outer.style.background = 'transparent'
      outer.style.borderColor = `oklch(from var(--foreground) l c h / 0.5)`
      animateOuter(1, { duration: 280, easing: 'easeOutElastic(1, .7)' })
      animateInner(1, 1)
      viewLabelRef.current?.remove()
      viewLabelRef.current = null
    }

    const setCursor = (type: string) => {
      if (cursorType.current === type) return
      cursorType.current = type
      viewLabelRef.current?.remove()
      viewLabelRef.current = null
      outer.style.mixBlendMode = 'normal'

      if (type === 'invert') {
        outer.style.background = css('--foreground')
        outer.style.borderColor = 'transparent'
        outer.style.mixBlendMode = 'difference'
        animateOuter(1.15, { duration: 260, easing: 'easeOutQuart' })
        animateInner(0, 0)
      }

      if (type === 'link') {
        outer.style.background = css('--foreground')
        outer.style.borderColor = 'transparent'
        outer.style.mixBlendMode = 'difference'
        animateOuter(0.55, { duration: 240, easing: 'easeOutElastic(1, .9)' })
        animateInner(0, 0)
      }

      if (type === 'btn') {
        outer.style.background = `oklch(from var(--primary) l c h / 0.12)`
        outer.style.borderColor = css('--primary')
        outer.style.mixBlendMode = 'normal'
        animateOuter(1.6, { duration: 360, easing: 'easeOutElastic(1, .6)' })
        animateInner(0, 0)
      }

      if (type === 'view') {
        outer.style.background = `oklch(from var(--primary) l c h / 0.1)`
        outer.style.borderColor = 'transparent'
        outer.style.mixBlendMode = 'normal'
        animateOuter(2.2, { duration: 380, easing: 'easeOutElastic(1, .5)' })
        animateInner(0, 0)

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
        animate(label, { opacity: 1, duration: 150, delay: 60, easing: 'easeOutQuart' })
      }

      if (type === 'card') {
        outer.style.background = `oklch(from var(--foreground) l c h / 0.04)`
        outer.style.borderColor = css('--border')
        outer.style.mixBlendMode = 'normal'
        animateOuter(1.35, { duration: 300, easing: 'easeOutElastic(1, .7)' })
        animateInner(0.5, 0.3)
      }
    }

    const magneticEls = document.querySelectorAll<HTMLElement>('[data-cursor]')
    const cleanups: (() => void)[] = []

    magneticEls.forEach(el => {
      const type = el.dataset.cursor!

      const onEnter = () => setCursor(type)
      const onLeave = () => reset()

      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      cleanups.forEach(fn => fn())
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
          transition: 'background 0.18s ease, border-color 0.18s ease',
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
