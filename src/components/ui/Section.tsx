import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  /** Background tone. White is the default and should dominate the site. */
  tone?: "white" | "ice" | "midnight";
  /** Remove the standard vertical padding (e.g. for full-bleed media). */
  flush?: boolean;
};

const tones = {
  white: "bg-white text-midnight",
  ice: "bg-ice text-midnight",
  midnight: "bg-midnight text-white",
} as const;

/** A page section with the site's vertical rhythm and a background tone. */
export function Section({ tone = "white", flush = false, className, ...props }: SectionProps) {
  return <section className={cn(tones[tone], !flush && "section-y", className)} {...props} />;
}
