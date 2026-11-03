import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

/*
  TEMPORARY: design-foundation preview for review.
  Replaced by the real homepage in a later phase.
*/

const palette = [
  { name: "White", token: "white", hex: "#FFFFFF", swatch: "bg-white", usage: "Dominant background" },
  { name: "Ice white", token: "ice", hex: "#F4F7FB", swatch: "bg-ice", usage: "Alternate sections, surfaces" },
  { name: "Silver", token: "silver", hex: "#DCE2EA", swatch: "bg-silver", usage: "Borders, dividers, depth" },
  {
    name: "Electric blue",
    token: "electric",
    hex: "#2F80ED",
    swatch: "bg-electric",
    usage: "Accents, icons, large type, focus — not body text",
  },
  { name: "Deep blue", token: "deep", hex: "#123B70", swatch: "bg-deep", usage: "Buttons, links, highlighted text" },
  { name: "Midnight", token: "midnight", hex: "#17243A", swatch: "bg-midnight", usage: "Headings, body, dark sections" },
  { name: "Slate (derived)", token: "slate", hex: "#515B6B", swatch: "bg-slate", usage: "Muted body text" },
] as const;

const typeScale = [
  { token: "text-display-xl", className: "text-display-xl font-bold" },
  { token: "text-display-lg", className: "text-display-lg font-bold" },
  { token: "text-display-md", className: "text-display-md font-semibold" },
] as const;

const elevations = ["shadow-soft", "shadow-card", "shadow-lift"] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold tracking-[0.2em] text-deep uppercase">{children}</p>;
}

export default function FoundationPreview() {
  return (
    <>
      <Section className="border-b border-silver">
        <Container>
          <Eyebrow>Design foundation · Site in development</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-display-xl font-bold text-midnight">
            Ideas into influence. <span className="text-electric">Content into growth.</span>
          </h1>
          <p className="mt-8 max-w-reading text-lead text-slate">{site.positioning}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#colour" size="lg">
              View colour tokens
            </Button>
            <Button href="#components" variant="secondary" size="lg">
              View components
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="colour" tone="ice">
        <Container>
          <Eyebrow>Colour</Eyebrow>
          <h2 className="mt-4 text-display-md font-semibold">Brand palette</h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {palette.map((c) => (
              <li key={c.token} className="overflow-hidden rounded-card bg-white shadow-card">
                <div className={`h-28 border-b border-silver ${c.swatch}`} />
                <div className="p-5">
                  <p className="font-semibold">{c.name}</p>
                  <p className="mt-1 font-mono text-sm text-slate">
                    {c.hex} · {c.token}
                  </p>
                  <p className="mt-3 text-sm text-slate">{c.usage}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="type">
        <Container>
          <Eyebrow>Typography</Eyebrow>
          <div className="mt-10 space-y-10">
            {typeScale.map((t) => (
              <div key={t.token} className="border-b border-silver pb-10">
                <p className="mb-4 font-mono text-sm text-slate">{t.token}</p>
                <p className={`font-display ${t.className}`}>Creative thinking.</p>
              </div>
            ))}
            <div>
              <p className="mb-4 font-mono text-sm text-slate">text-lead · text-slate</p>
              <p className="max-w-reading text-lead text-slate">{site.description}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="components" tone="ice">
        <Container>
          <Eyebrow>Components</Eyebrow>
          <h2 className="mt-4 text-display-md font-semibold">Buttons &amp; elevation</h2>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button href="#colour">Primary</Button>
            <Button href="#type" variant="secondary">
              Secondary
            </Button>
            <Button href="#colour" variant="ghost">
              Ghost link
            </Button>
          </div>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {elevations.map((s) => (
              <li key={s} className={`rounded-card bg-white p-8 ${s}`}>
                <p className="font-mono text-sm text-slate">{s}</p>
                <p className="mt-2 font-semibold">rounded-card</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="midnight">
        <Container>
          <Eyebrow>
            <span className="text-silver">Dark section tone</span>
          </Eyebrow>
          <p className="mt-6 max-w-3xl text-display-md font-semibold">{site.positioning}</p>
        </Container>
      </Section>
    </>
  );
}
