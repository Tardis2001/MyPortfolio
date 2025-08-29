import type { CollectionEntry } from "astro:content";
import { Card, CardContent, CardDescription, CardTitle } from "./card";
import { Separator } from "./separator";
import { useEffect } from "react";

type ProjectEntry = CollectionEntry<"projects">;
export default function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <a href={project.data.link}>
      <Card className="w-[90%] bg-background flex flex-row mx-auto">
        <CardContent className="flex flex-col justify-center items-center md:items-start md:flex-row gap-10">
          <img
            src={`${project.data.image}`}
            className="w-full md:max-w-80 md:h-40 rounded-md object-cover"
          />
          <div className="hidden md:block h-full">
            <Separator orientation="vertical" />
          </div>

          <div className="flex flex-col justify-center h-full gap-5">
            <CardTitle>{project.data.title}</CardTitle>

            <p className="text-sm">{project.data.description}</p>
            <Separator />

            <div className="flex items-center gap-2">
              {project.data.techs?.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-zinc-200 dark:bg-zinc-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
