import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main>
        <div className="w-full flex-col border-b pb-4">
          <p className="text-lg sm:text-xl font-medium">
            Jupyter
          </p>
          <p className="line-clamp-2 text-xs sm:text-sm mt-2">
            Jupyter is a simple API project I created as a hands-on example to learn and explore the Hono web framework. Through building this project, I gained valuable experience in working with RESTful APIs and deepened my understanding of how modern APIs are structured and implemented. This project played a key role in strengthening my backend development skills and solidifying my grasp of Hono’s lightweight and fast routing capabilities.
          </p>
          <div className="flex gap-2 mt-2">
            <Badge>
              Hono
            </Badge>
          </div>
          <div className="w-full flex justify-between items-center text-sm">
            <p className="mt-4">
              Created on May 1, 2025
            </p>
            <Link href={"/jupyter"} className="hover:border-b border-foreground">
              Know More
            </Link>
          </div>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm mx-auto mt-6 sm:mt-8 w-full text-center">
          Crafting Soon
        </p>
      </main>
    </>
  )
}
