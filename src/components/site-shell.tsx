import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  ["Features", "/#features"],
  ["How It Works", "/#how-it-works"],
  ["Pricing", "/#pricing"],
  ["FAQ", "/#faq"],
] as const;

export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 font-display text-lg font-extrabold ${inverted ? "text-primary-foreground" : "text-foreground"}`}>
      <img src="/assets/studycrunch-app-icon.png" alt="" className="size-8 rounded-lg" />
      StudyCrunch
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Brand />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, href]) => <a key={label} href={href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
        </nav>
        <div className="hidden md:block"><Button asChild size="lg"><a href="#download">Download</a></Button></div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}><Menu /></Button>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-foreground hover:bg-muted">{label}</a>)}
            <Button asChild className="mt-2"><a href="#download" onClick={() => setOpen(false)}>Download</a></Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Brand inverted />
          <p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/65">Personalized study sessions and focused time, in one iPhone app.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/75">
          <Link to="/privacy" className="hover:text-primary-foreground">Privacy</Link>
          <Link to="/terms" className="hover:text-primary-foreground">Terms</Link>
          <Link to="/support" className="hover:text-primary-foreground">Support</Link>
          <a href="mailto:studycrunchapp@outlook.com" className="hover:text-primary-foreground">studycrunchapp@outlook.com</a>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}