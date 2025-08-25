import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

const Timeline = ({ timelineData }: { timelineData: TimelineEntry[] }) => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <h1 className="text-foreground mb-10 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
          Educação & Experiências
        </h1>
        <div className="relative mx-auto max-w-4xl">
          <Separator
            orientation="vertical"
            className="bg-muted absolute left-2 top-4"
          />
          {timelineData.map((entry, index) => (
            <div key={index} className="relative mb-10 pl-8">
              <div className="bg-foreground absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full" />
              <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
                {entry.title}
              </h4>

              <h5 className="text-md -left-38 text-muted-foreground top-3 rounded-xl tracking-tight xl:absolute">
                {entry.date}
              </h5>

              <Card className="my-5 px-4 border-none shadow-none">
                <CardContent className="px-0 xl:px-2">
                  <div
                    className="prose dark:prose-invert text-foreground"
                    dangerouslySetInnerHTML={{ __html: entry.content }}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
