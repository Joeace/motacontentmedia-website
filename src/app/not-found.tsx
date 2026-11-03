import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Section className="flex min-h-dvh items-center">
      <Container width="reading" className="text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-deep uppercase">Error 404</p>
        <h1 className="mt-4 text-display-lg font-bold text-midnight">This page doesn’t exist.</h1>
        <p className="mt-6 text-lead text-slate">
          The page may have moved, or the address may be mistyped.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/" size="lg">
            Back to home
          </Button>
        </div>
      </Container>
    </Section>
  );
}
