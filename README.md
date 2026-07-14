# My portfolio & Blog

### Techs:
- Astro
- Shadcn
- Tailwind
- Pages CMS

## Project Strucure

```text
├── public/
│   └── uploads/
├── src/
│   ├── components/
│   │   └── ui/
│   ├── content/
│   │   ├── posts/
│   │   └── projetos/
│   ├── layouts/
│   └── pages/
├── astro.config.mts
├── .pages.yml
├── components.json
├── README.md
├── package.json
└── tsconfig.json
```

Static assets (such as global images or fonts) are stored in the `public/` directory, while all Markdown/MDX content—including blog posts and project showcases—is organized inside `src/content/` 

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
