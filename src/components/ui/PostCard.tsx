import { Card, CardTitle, CardContent } from "./card";

import type { CollectionEntry } from "astro:content";
import { Separator } from "./separator";

type BlogEntry = CollectionEntry<"blog">;

export default function PostCard({ post }: { post: BlogEntry }) {
  const formattedDate = new Date(post.data.pubDate).toLocaleDateString(
    "pt-BR",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <a href={`/blog/${post.slug}`}>
      <Card className="w-[60vw] bg-background flex flex-row">
        <CardContent className="flex flex-col justify-center items-center md:flex-row w-full gap-10">
          <img
            src={post.data.image}
            className="w-full md:min-w-50 md:h-40 rounded-md object-cover"
          />
          <div className="hidden md:block h-full">
            <Separator orientation="vertical" />
          </div>

          <div className="flex flex-col w-full gap-5">
            <CardTitle>{post.data.title}</CardTitle>
            <p className="text-sm">{post.data.description}</p>
            <Separator />

            <div className="flex items-center space-x-5 w-full">
              <div className="flex items-center gap-2">
                {post.data.categories?.map((category) => (
                  <span
                    key={category}
                    className="px-2 py-1 text-xs bg-zinc-200 dark:bg-zinc-700 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <Separator orientation="vertical" />
              <p className="w-full text-sm">{formattedDate}</p>{" "}
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
