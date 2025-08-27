import { Card, CardTitle, CardContent } from "./card";

import type { CollectionEntry } from "astro:content";
import { Separator } from "./separator";

type BlogEntry = CollectionEntry<"blog">;

export default function PostCard({ post }: { post: BlogEntry }) {
  return (
    <a href={`/blog/${post.slug}`}>
      <Card className="w-full bg-background flex flex-row">
        <CardContent className="flex flex-col justify-center items-center md:flex-row gap-10">
          <img
            src={post.data.image}
            className="w-full md:min-w-80 md:h-40 rounded-md object-cover"
          />
          <div className="hidden md:block h-full">
            <Separator orientation="vertical" />
          </div>

          <div className="flex flex-col gap-5">
            <CardTitle>{post.data.title}</CardTitle>
            <p className="text-sm">{post.data.description}</p>
            <Separator />

            <div className="flex items-center space-x-5 ">
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
              <p>{post.data.pubDate}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
