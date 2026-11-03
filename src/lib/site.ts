/**
 * Single source of truth for brand identity and site-wide metadata.
 * Copy here is supplied by Mota Content Media — do not add statistics,
 * credentials or claims that have not been provided by the client.
 */
export const site = {
  name: "Mota Content Media",
  shortName: "Mota",
  positioning: "Creative Thinking. Intelligent Technology. Measurable Growth.",
  tagline: "Ideas into influence. Content into growth.",
  description:
    "Mota Content Media is a creative technology and digital marketing agency offering bespoke content creation, multimedia production, graphic design, social media management, advertising and digital marketing solutions.",
  /** Set NEXT_PUBLIC_SITE_URL in production for canonical URLs and social previews. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "en",
} as const;
