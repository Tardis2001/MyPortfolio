import type { TOC } from "@/types";
import { ScrollArea } from "./scroll-area";

interface Props {
  toc: TOC[];
}

export default function ScrollTOCHeader({ toc }: Props) {
  return (
    <ScrollArea className="mx-auto max-w-3xl" data-toc-header-scroll>
      <div className="max-h-[30vh]">
        <ul
          className="flex list-none flex-col gap-y-2 px-4 pb-4"
          id="mobile-table-of-contents"
        >
          {toc.map((item: TOC, index: number) => (
            <li
              key={index}
              style={{ marginLeft: `${(item.depth - 1) * 2}rem` }}
              className="px-4 text-sm text-foreground/60 decoration-dotted"
            >
              <a
                href={`#${item.slug}`}
                className="mobile-toc-item underline decoration-transparent underline-offset-[3px] transition-colors duration-200 hover:decoration-inherit"
                data-heading-id={item.slug}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  );
}
