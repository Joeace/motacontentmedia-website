import type { NextConfig } from "next";

/*
  The site is hosted on Cloudflare Pages as static files.
  - output: "export" builds the whole site into ./out as plain HTML/CSS/JS
    (Cloudflare Pages: build command `npm run build`, output directory `out`).
  - images.unoptimized: static hosting has no image-optimisation server,
    so images must be optimised before they are added to /public.
  - trailingSlash: emits /about/index.html so every route is a real file.
*/
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
