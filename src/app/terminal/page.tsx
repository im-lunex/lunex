import Image from "next/image";
import siteData from "@/lib/siteData.json";

export default function Page() {
  const { image, details } = siteData.terminal;

  return (
    <>
      <Image
        src={image.src}
        alt={image.alt}
        width={1600}
        height={100}
        className="w-full h-auto object-cover"
        priority
      />
      <div className="flex flex-col text-foreground mb-8 mt-10">
        <p className="border-b text-base sm:text-lg w-fit border-foreground font-medium">
          {details.title}
        </p>
        <p
          className="mt-2 text-sm sm:text-md tracking-wide text-foreground/85"
          dangerouslySetInnerHTML={{ __html: details.description }}
        />
      </div>
    </>
  );
}
