import type { NextConfig } from "next";

/*
  The site is hosted on GitHub Pages, which serves static files only.
  - output: "export" builds the whole site into ./out as plain HTML/CSS/JS.
  - basePath: a GitHub project site lives under /<repo-name>/. The deploy
    workflow sets PAGES_BASE_PATH; locally it is empty, so dev runs at "/".
    With a custom domain, the workflow's base path becomes "" automatically.
  - images.unoptimized: static hosting has no image-optimisation server,
    so images must be optimised before they are added to /public.
  - trailingSlash: emits /about/index.html so Pages serves /about/ cleanly.
*/
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
