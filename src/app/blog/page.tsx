import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-10">
      <div className="w-full flex-col max-h-64 border-b-1 pb-4">
        <p className="text-lg sm:text-xl font-medium">
          Why I Chose Hono Over Express for My API
        </p>
        <div className="text-foreground/85">
          <p className="line-clamp-2 text-xs sm:text-sm mt-2">
            I switched from Express to Hono for building APIs—and it changed everything. In this post, I break down why Hono’s speed, simplicity, and TypeScript-first design made it the better choice for my projects.
          </p>
          <div className="flex justify-between w-full items-center mt-3">
            <p className="mt-1 text-xs sm:text-sm text-foreground">
              May 10, 2025 | Hono
            </p>
            <Link href={"/hono"} className="hover:underline text-xs sm:text-sm">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex-col max-h-64 border-b-1 pb-4">
        <p className="text-lg sm:text-xl font-medium">
          Swapped VSCode for Neovim — Powered by NvChad
        </p>
        <div className="text-foreground/85">
          <p className="line-clamp-2 text-xs sm:text-sm mt-2">
            I ditched VSCode and entered the world of Neovim with NvChad. Here's how this fast, keyboard-first setup supercharged my workflow—and why I think every dev should give it a try.
          </p>
          <div className="flex justify-between w-full items-center mt-3">
            <p className="mt-1 text-xs sm:text-sm text-foreground">
              May 10, 2025 | Neovim
            </p>
            <Link href={"/neovim"} className="hover:underline text-xs sm:text-sm">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
