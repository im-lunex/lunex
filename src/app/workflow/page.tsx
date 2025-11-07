import Image from "next/image";
import Link from "next/link";
import siteData from "@/lib/siteData.json";
import React from "react";
import { SiteData } from "@/lib/types";

const SafeHtml = ({ html }: { html: string }) => {
  const parts = html.split(/(<strong>.*?<\/strong>|<br \/>)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("<strong>")) {
          return (
            <strong key={index}>{part.replace(/<\/?strong>/g, "")}</strong>
          );
        }
        if (part === "<br />") {
          return <br key={index} />;
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};

export default function Page() {
  const { images, sections } = (siteData as SiteData).workflow;

  return (
    <>
      <main className="w-full flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
          {images.map((image, index) => (
            <Link key={index} href={image.link}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={100}
                className="object-cover"
                priority={index === 0}
              />
            </Link>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-16 text-foreground">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col text-foreground mb-8">
              <p className="border-b text-base sm:text-lg w-fit border-foreground font-medium">
                {section.title}
              </p>
              {section.content && (
                <p className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85">
                  <SafeHtml html={section.content} />
                </p>
              )}
              {section.list && (
                <ul className="mt-2 space-y-1 text-sm sm:text-md text-foreground/85 list-disc list-inside">
                  {section.list.map((item, i) => (
                    <li key={i}>
                      <SafeHtml html={item} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
