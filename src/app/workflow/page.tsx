import Image from "next/image";
import Link from "next/link";
import siteData from "@/lib/siteData.json";

export default function Page() {
  const { images, sections } = siteData.workflow;

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
                <p
                  className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              )}
              {section.list && (
                <ul className="mt-2 space-y-1 text-sm sm:text-md text-foreground/85 list-disc list-inside">
                  {section.list.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
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
