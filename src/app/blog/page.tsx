import Link from "next/link";
import siteData from "@/lib/siteData.json";

export default function Page() {
  const posts = siteData.blog;

  return (
    <main className="space-y-10">
      {posts.map((post, index) => (
        <div key={index} className="w-full flex-col max-h-64 border-b pb-4">
          <p className="text-lg sm:text-xl font-medium">{post.title}</p>
          <div className="text-foreground/85">
            <p className="line-clamp-2 text-xs sm:text-sm mt-2">
              {post.description}
            </p>
            <div className="flex justify-between w-full items-center mt-3">
              <p className="mt-1 text-xs sm:text-sm text-foreground">
                {post.date} | {post.category}
              </p>
              <Link
                href={post.link}
                className="hover:underline text-xs sm:text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
