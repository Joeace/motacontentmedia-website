import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType> = {
  as?: T;
  /** "site" is the standard content width; "reading" is for long-form text. */
  width?: "site" | "reading";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/** Centres content at a consistent max width with responsive side gutters. */
export function Container<T extends ElementType = "div">({
  as,
  width = "site",
  className,
  ...props
}: ContainerProps<T>) {
  const Component: ElementType = as ?? "div";
  return (
    <Component
      className={cn(
        "mx-auto w-full px-gutter",
        width === "site" ? "max-w-site" : "max-w-reading",
        className,
      )}
      {...props}
    />
  );
}
