// Long-form writeup pages for writeup-only projects (see CLAUDE.md "Content
// model"). One Markdown file per writeup under src/content/writeups/, its file
// name is the slug and its `project` field points back to a slug in
// src/data/projects.ts for the shared title/status/tags/links.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writeups = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writeups" }),
  schema: () =>
    z.object({
      // Slug in src/data/projects.ts this writeup belongs to.
      project: z.string(),
      // Optional demo clip served same-origin from /public (no external host).
      video: z.string().optional(),
      // Optional poster frame for the video (a /public path).
      videoPoster: z.string().optional(),
    }),
});

export const collections = { writeups };
