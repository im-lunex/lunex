import { FaDev, FaGithub, FaInstagram } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <main className="w-full flex-col justify-center items-center">
        <div className="w-full justify-between flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-end border-b pb-6">
          <div className="flex items-end gap-3">
            <div className="flex-col -space-y-1 pb-1">
              <p className="text-xl font-medium">Lunex</p>
              <p className="text-base sm:text-lg font-light text-foreground/85">Junior Full-Stack Engineer</p>
            </div>
          </div>
          <div className="flex sm:flex-col gap-4 sm:gap-0 sm:space-y-2 pb-1">
            <FaGithub className="size-5 hover:cursor-pointer" />
            <FaInstagram className="size-5 hover:cursor-pointer" />
            <FaDev className="size-5 hover:cursor-pointer" />
          </div>
        </div>
        <div className="flex-col mt-5 text-foreground">
          <p className="border-b text-base sm:text-lg w-fit border-foreground leading-tight text-foreground font-medium">
            About :-
          </p>
          <p className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85">
            I’m <strong>Lunex</strong>, a web developer who builds fast, responsive experiences with clean code and sharp design. I lean toward <strong>backend systems</strong> and <strong>performance-focused workflows</strong>, powered by <strong>Arch</strong>, <strong>Neovim</strong>, and a <strong>minimal setup</strong>.
            <br /><br />
            I use tools like <strong>React</strong>, <strong>Next.js</strong>, <strong>Hono</strong>, and <strong>TypeScript</strong> to ship efficiently—favoring <strong>simplicity</strong>, <strong>clarity</strong>, and <strong>function</strong> over noise and bloat.
          </p>
        </div>

        <div className="flex-col mt-10 text-foreground">
          <p className="border-b text-base sm:text-lg w-fit border-foreground leading-tight text-foreground font-medium">
            Workflow :-
          </p>
          <p className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85">
            I use <strong>Arch</strong> for full control—lean, fast, and free of bloat. My workflow is built for <strong>speed</strong> and <strong>clarity</strong>:
            <strong> Neovim</strong> for precision, <strong>tmux</strong> for flow, <strong>Git</strong> for discipline.
            <br /><br />
            I automate the repetitive, map tools to muscle memory, and keep my stack minimal so I can focus purely on <strong>solving problems</strong>—whether it's building <strong>APIs with Hono</strong>, wiring <strong>UI in React</strong>, or optimizing servers.
          </p>
        </div>

        <div className="flex-col mt-10 text-foreground">
          <p className="border-b text-base sm:text-lg w-fit border-foreground leading-tight text-foreground font-medium">
            Tech Stack:
          </p>
          <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
            <Badge><strong>Next.js</strong></Badge>
            <Badge><strong>React</strong></Badge>
            <Badge><strong>Hono.js</strong></Badge>
            <Badge><strong>TypeScript</strong></Badge>
            <Badge><strong>Node.js</strong></Badge>
            <Badge><strong>Express</strong></Badge>
            <Badge><strong>Astro</strong></Badge>
            <Badge><strong>Tailwind CSS</strong></Badge>
            <Badge><strong>Shadcn UI</strong></Badge>
            <Badge><strong>Chakra UI</strong></Badge>
            <Badge><strong>MongoDB</strong></Badge>
            <Badge><strong>Git</strong></Badge>
            <Badge><strong>Neovim</strong></Badge>
            <Badge><strong>tmux</strong></Badge>
            <Badge><strong>Arch Linux</strong></Badge>
          </div>
        </div>

        <div className="flex-col mt-10 text-foreground">
          <p className="border-b text-base sm:text-lg w-fit border-foreground leading-tight text-foreground font-medium">
            Currently Exploring :-
          </p>
          <p className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85">
            I'm currently deepening my <strong>production-level</strong> skills in <strong>full-stack development</strong>—practicing final projects to refine my understanding of <strong>system design</strong>, <strong>performance optimization</strong>, and <strong>deployment</strong>.
            <br /><br />
            Exploring advanced patterns in <strong>Hono</strong>, <strong>Next.js</strong>, and <strong>Node.js</strong> while experimenting with <strong>minimal DevOps setups</strong> to build, test, and ship cleaner and faster.
          </p>
        </div>
        <footer className="text-muted-foreground bottom-0 text-center text-xs sm:text-sm mb-10 mx-auto mt-20 sm:mt-28 border-b w-fit border-muted-foreground">
          Built on Arch, typed in Neovim
        </footer>
      </main>
    </>
  );
}
