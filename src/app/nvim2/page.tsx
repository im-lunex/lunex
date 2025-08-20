import Image from "next/image";

export default function Page() {
  return (
    <>
      <Image
        src={'/nvim2.png'}
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
          I value clarity, speed, and full control over my workflow — which naturally led me to adopt Neovim as my primary code editor.
          <br />
          Built atop the incredibly modular NvChad framework, my configuration reflects my personal philosophy: clean, fast, and purpose-driven. I chose NvChad because it offers a well-structured, Lua-based foundation with sensible defaults, while giving me the flexibility to customize everything to match my exact needs.
          <br /><br />
          From Telescope-powered fuzzy finding, Tree-sitter syntax highlighting, to native LSP support and lazy-loaded plugins — every component is carefully selected to eliminate distractions and boost productivity.
          <br /><br />
          Whether I’m writing TypeScript, building backend APIs, or tweaking dotfiles, I stay entirely in the keyboard zone, never breaking flow.
          <br /><br />
          This setup integrates beautifully with my terminal environment — Fish for its smart defaults and autosuggestions, Kitty for speed and GPU-powered rendering — and sits harmoniously within my Hyprland ecosystem.
          <br /><br />
          Together, they form a cohesive, minimal, and high-performance development space where every keystroke counts and nothing is superfluous.
        </p>
      </div>
    </>
  )
}
