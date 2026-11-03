import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-(--duration-base) ease-(--ease-out-expo) " +
  "disabled:pointer-events-none disabled:opacity-50";

/*
  Primary uses deep blue: white text on electric blue fails WCAG AA
  at button size (3.87:1). Electric is reserved for focus rings and accents.
*/
const variants: Record<Variant, string> = {
  primary: "bg-deep text-white shadow-soft hover:bg-midnight hover:shadow-card active:translate-y-px",
  secondary:
    "border border-silver bg-white text-deep hover:border-deep/30 hover:bg-ice active:translate-y-px",
  ghost: "text-deep underline-offset-4 decoration-electric decoration-2 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

/*
  A Button must do something: it either navigates (href) or is a real
  <button> with an explicit type. There is no inert variant.
*/
type LinkButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps> & { href: string };

type NativeButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: never;
    type: "button" | "submit" | "reset";
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], variant !== "ghost" && sizes[size], className);

  if ("href" in rest && rest.href !== undefined) {
    return (
      <Link className={classes} {...(rest as Omit<LinkButtonProps, keyof CommonProps>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as Omit<NativeButtonProps, keyof CommonProps>)}>
      {children}
    </button>
  );
}
