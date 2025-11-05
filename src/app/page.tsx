import { FaDev, FaGithub, FaInstagram } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import siteData from "@/lib/siteData.json";
import { SiteData } from "@/lib/types";

const typedSiteData = siteData as unknown as SiteData;

export default function Home() {
  const {
    name,
    title,
    socials,
    about,
    workflow,
    techStack,
    currentlyExploring,
  } = typedSiteData.home;

  return (
    <>
      <main className="w-full">
        <div className="w-full justify-between flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-end border-b pb-6">
          <div className="flex items-end gap-3">
            <div className="flex-col -space-y-1 pb-1">
              <p className="text-xl font-medium">{name}</p>
              <p className="text-base sm:text-lg font-light text-foreground/85">
                {title}
              </p>
            </div>
          </div>
          <div className="flex sm:flex-col gap-4 sm:gap-0 sm:space-y-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name === "github" && (
                  <FaGithub className="size-5 hover:cursor-pointer" />
                )}
                {social.name === "instagram" && (
                  <FaInstagram className="size-5 hover:cursor-pointer" />
                )}
                {social.name === "dev.to" && (
                  <FaDev className="size-5 hover:cursor-pointer" />
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="flex-col mt-5 text-foreground">
          <p className="border-b text-base sm:text-lg w-fit border-foreground leading-tight text-foreground font-medium">
            {about.title}
          </p>
          <p
            className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85"
            dangerouslySetInnerHTML={{ __html: about.description }}
          />
        </div>

        <div className="flex-col mt-10 text-foreground">
          <p className="border-b text-base sm:text-lg w-fit border-foreground leading-tight text-foreground font-medium">
            {workflow.title}
          </p>
          <p
            className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85"
            dangerouslySetInnerHTML={{ __html: workflow.description }}
          />
        </div>

        <div className="flex-col mt-10 text-foreground">
          <p className="border-b text-base sm:text-lg w-fit border-foreground leading-tight text-foreground font-medium">
            {techStack.title}
          </p>
          <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
            {techStack.badges.map((badge) => (
              <Badge key={badge}>
                <strong>{badge}</strong>
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex-col mt-10 text-foreground">
          <p className="border-b text-base sm:text-lg w-fit border-foreground leading-tight text-foreground font-medium">
            {currentlyExploring.title}
          </p>
          <p
            className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85"
            dangerouslySetInnerHTML={{
              __html: currentlyExploring.description,
            }}
          />
        </div>
      </main>
    </>
  );
}
