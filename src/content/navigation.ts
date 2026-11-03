export type NavItem = {
  label: string;
  href: string;
  /** Rendered as the highlighted call to action in the header. */
  emphasis?: boolean;
};

/**
 * Primary navigation, in the order agreed with the client.
 * Routes are created page by page in later phases; the header
 * that renders this list is built in the next phase.
 */
export const primaryNav: readonly NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Media Services", href: "/services" },
  { label: "Contact an Agent", href: "/contact-agent", emphasis: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
];
