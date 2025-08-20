import Image from "next/image";

export default function Page() {
  return (
    <>
      <Image
        src={'/nvim1.png'}
        alt={"Neovim Screenshot"}
        width={1600}
        height={100}
        className="w-full h-auto object-cover"
        priority
      />
      <div className="flex-col text-foreground mb-8 mt-10">
        <p className="border-b text-base sm:text-lg w-fit border-foreground font-medium">
          Details :-
        </p>
        <p className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85">
          I value clarity, speed, and full control over my workflow — which naturally led me to adopt <strong>Neovim</strong> as my primary code editor.
          <br />
          Built atop the incredibly modular <strong>NvChad</strong> framework, my configuration reflects my personal philosophy: <em>clean</em>, <em>fast</em>, and <em>purpose-driven</em>. I chose NvChad because it offers a well-structured, Lua-based foundation with sensible defaults, while giving me the flexibility to customize everything to match my exact needs.
          <br /><br />
          The screenshot above captures a real moment from my workflow. I’m inside a TypeScript project powered by <strong>Hono.js</strong> and <strong>Drizzle ORM</strong>, editing backend routes and experimenting with APIs in full keyboard mode. The terminal is running within <strong>Kitty</strong>, and everything sits cleanly atop my <strong>Hyprland</strong> tiling window manager. On the bottom bar, system metrics, audio levels, and workspace indicators are always just a glance away.
          <br /><br />
          While coding, I often play a <strong>TED Talk</strong> in the background — something thought-provoking that expands my mindset. Other times, it’s calm playlists from <strong>Spotify</strong>—soft instrumentals, chillhop, or lofi beats to keep the energy flowing without pulling focus.
          <br /><br />
          From <strong>Telescope-powered fuzzy finding</strong>, <strong>Tree-sitter syntax highlighting</strong>, to native <strong>LSP support</strong> and <strong>lazy-loaded plugins</strong> — every component of this environment is curated to eliminate distractions and boost productivity.
          <br /><br />
          Whether I’m building backend logic, writing config files, or just tuning up my workflow, I stay in the keyboard zone — immersed in a minimal, cohesive setup where every keystroke matters and nothing is superfluous.
        </p>
      </div>
    </>
  )
}
