import type React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

type Section = { title: string; content: React.ReactNode };

export function LegalPage({ kicker = "Legal", title, effective, intro, sections }: { kicker?: string; title: string; effective?: string; intro?: React.ReactNode; sections: Section[] }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="size-3.5" /> Home
        </Link>
        <div className="mt-14 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{kicker}</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h1>
        {effective ? <p className="mt-4 text-sm text-muted-foreground">Effective: {effective}</p> : null}
        {intro ? <div className="mt-10 text-base leading-7 text-foreground/85">{intro}</div> : null}
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
              <div className="mt-3 space-y-4 leading-7 text-foreground/85 [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:ml-5 [&_li]:list-disc">
                {section.content}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-16 border-t border-border pt-6 text-xs text-muted-foreground">© 2026 StudyCrunch</div>
      </div>
    </main>
  );
}
