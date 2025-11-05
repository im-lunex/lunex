import Link from "next/link";
import siteData from "@/lib/siteData.json";

export default function Page() {
  const { projects, footer } = siteData.project;

  return (
    <>
      <main>
        {projects.map((project, index) => (
          <div key={index} className="w-full flex flex-col border-b pb-4 pt-3">
            <p className="text-lg sm:text-xl font-medium">{project.title}</p>
            <p className="line-clamp-2 text-xs sm:text-sm mt-2">
              {project.description}
            </p>
            <div className="w-full flex justify-between items-center text-sm">
              <p className="mt-4">{project.date}</p>
              <Link
                href={project.link}
                className="hover:border-b border-foreground"
              >
                Know More
              </Link>
            </div>
          </div>
        ))}
        <p className="text-muted-foreground text-xs sm:text-sm mx-auto mt-6 sm:mt-8 w-full text-center">
          {footer}
        </p>
      </main>
    </>
  );
}
