import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="w-full flex-col justify-center items-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
          <Link href={'/arch-rice'}>
            <Image
              src={"/base-rice.png"}
              alt="Neovim Screenshot"
              width={1000}
              height={100}
              className="object-cover"
              priority
            />
          </Link>
          <Link href={'/terminal'}>
            <Image
              src={"/terminal.png"}
              alt="Neovim Screenshot"
              width={1000}
              height={100}
              className="object-cover"
              priority
            />
          </Link>
          <Link href={'/nvim1'}>
            <Image
              src={"/nvim1.png"}
              alt="Neovim Screenshot"
              width={1000}
              height={100}
              className="object-cover"
              priority
            />
          </Link>
          <Link href={'/nvim1'}>
            <Image
              src={"/nvim2.png"}
              alt="Neovim Screenshot"
              width={1000}
              height={100}
              className="object-cover"
              priority
            />
          </Link>
        </div>
        <div className="max-w-3xl mx-auto mt-16 text-foreground">
          <div className="flex-col text-foreground mb-8">
            <p className="border-b text-base sm:text-lg w-fit border-foreground font-medium">
              Crafting Flow :-
            </p>
            <p className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85">
              I’m — a developer who enjoys crafting smooth, fast, and elegant experiences. I care deeply about what I build and how I build it. My workflow is designed to reduce noise and increase focus so I can spend more time creating and less time configuring.
            </p>
          </div>

          <div className="flex-col text-foreground mb-8">
            <p className="border-b text-base sm:text-lg w-fit border-foreground font-medium">
              Design Taste :-
            </p>
            <p className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85">
              I’m obsessed with modern, clean, <strong>black-and-white</strong> interfaces — the kind that feel effortless yet refined. I love minimal animations, subtle transitions, and whitespace that breathes. My design taste is heavily influenced by clarity, contrast, and the beauty of function-first UI.
            </p>
          </div>

          <div className="flex-col text-foreground mb-8">
            <p className="border-b text-base sm:text-lg w-fit border-foreground font-medium">
              Why Arch Linux :-
            </p>
            <p className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85">
              Arch gives me full control. It’s lean, fast, and minimal — just like my approach to development. I don’t need bloated systems; I need something I understand and shape as I want. Every part of my setup is intentional, from the shell to the smallest package.
            </p>
          </div>

          <div className="flex-col text-foreground mb-8">
            <p className="border-b text-base sm:text-lg w-fit border-foreground font-medium">
              Neovim & NvChad :-
            </p>
            <p className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85">
              I chose Neovim for its precision and speed. It's fast, hackable, and completely keyboard-driven. I use <strong>NvChad</strong> as my base config — it’s minimal yet powerful, giving me a clean aesthetic with enough flexibility to tweak it as I grow. I don’t waste time tweaking endlessly — I start building right away.
            </p>
          </div>

          <div className="flex-col text-foreground mb-8">
            <p className="border-b text-base sm:text-lg w-fit border-foreground font-medium">
              Daily Stack & Tools :-
            </p>
            <ul className="mt-2 space-y-1 text-sm sm:text-md text-foreground/85 list-disc list-inside">
              <li><strong>OS:</strong> Arch Linux (btw)</li>
              <li><strong>Rice:</strong> Hyprland with Hyde</li>
              <li><strong>Editor:</strong> Neovim + NvChad (Lua-based)</li>
              <li><strong>Terminal:</strong> Kitty + tmux</li>
              <li><strong>Version Control:</strong> Git + lazygit</li>
              <li><strong>Languages:</strong> TypeScript, JavaScript</li>
              <li><strong>Frameworks:</strong> React, Next.js, Hono, Express</li>
              <li><strong>Styling:</strong> Tailwind CSS, Shadcn UI, Chakra UI</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
