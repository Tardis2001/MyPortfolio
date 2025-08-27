import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationLink,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { CollectionEntry } from "astro:content";
import { Button } from "./button";
import { ArrowLeft, ArrowRight } from "lucide-react";
type BlogEntry = CollectionEntry<"blog">;
export default function PostPagination({
  prevPost,
  nextPost,
}: {
  prevPost: BlogEntry;
  nextPost: BlogEntry;
}) {
  return (
    <div className="flex justify-center items-center gap-5 max-sm:flex-col max-w-full text-black dark:text-white">
      {prevPost ? (
        <a href={`/blog/${prevPost.slug}`} className="w-full">
          <Button
            variant={"outline"}
            className="h-14 w-full dark:bg-background mx-auto hover:cursor-pointer flex justify-start"
          >
            <div className="flex flex-row items-center justify-start gap-5">
              <ArrowLeft />

              <div className="flex flex-col justify-start items-start">
                <span>Post Anterior</span>
                <span className="underline">{prevPost.data.title}</span>
              </div>
            </div>
          </Button>
        </a>
      ) : (
        <div className="w-full">
          <Button
            variant={"outline"}
            className="h-14 dark:bg-background w-full flex justify-start m"
          >
            <div className="flex flex-row items-center justify-start gap-5">
              <ArrowLeft />

              <div className="flex flex-col text-muted justify-start items-start">
                <span>Nao exitem mais posts</span>
              </div>
            </div>
          </Button>
        </div>
      )}

      {nextPost ? (
        <a href={`/blog/${nextPost.slug}`} className="w-full">
          <Button
            variant={"outline"}
            className="h-14 dark:bg-background w-full flex hover:cursor-pointer justify-end"
          >
            <div className="flex flex-row items-center justify-end gap-5">
              <div className="flex flex-col justify-end items-end">
                <span>Proximo Post</span>
                <span className="underline">{nextPost.data.title}</span>
              </div>

              <ArrowRight />
            </div>
          </Button>
        </a>
      ) : (
        <div className="w-full">
          <Button
            variant={"outline"}
            className="h-14 w-full dark:bg-background flex justify-end"
          >
            <div className="flex flex-row items-center justify-end gap-5">
              <div className="flex flex-col text-muted justify-end items-end">
                <span>Nao exitem mais posts</span>
              </div>

              <ArrowRight />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
