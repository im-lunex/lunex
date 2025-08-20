import Image from "next/image";

export default function Page() {
  return (
    <>
      <Image
        src={'/base-rice.png'}
        alt={"Base Rice"}
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
          This snapshot captures my full coding environment in action — minimal, focused, and keyboard-driven. I'm using <strong>Neovim</strong> (NvChad-based) as my editor, enhanced with <strong>Telescope</strong>, LSPs, and Tree-sitter for seamless navigation and syntax clarity.
          <br /><br />
          The workspace is managed by <strong>Hyprland</strong>, my dynamic tiling window manager, where every window flows smoothly between workspaces. The terminal running below is <strong>Kitty</strong>, and the shell is <strong>Fish</strong> — tuned for performance and efficiency with autosuggestions and rich prompts.
          <br /><br />
          A <strong>lofi playlist</strong> or a <strong>TED talk</strong> usually plays in the background, keeping the vibes calm and focused. Each detail in this setup — from status bars to plugin load times — reflects my goal of building in an environment that’s both minimal and powerful.
        </p>
      </div>
    </>
  )
}
