import { ArrowLeft, FileText, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-shell";

export function ContentPlaceholder({ title, description, support = false }: { title: string; description: string; support?: boolean }) {
  return (
    <SiteLayout>
      <main className="mx-auto min-h-[70vh] max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-deep"><ArrowLeft className="size-4" /> Back to StudyCrunch</Link>
        <div className="mt-10 border-t-4 border-primary pt-10">
          <div className="mb-6 grid size-12 place-items-center rounded-lg bg-brand-soft text-primary">{support ? <Mail /> : <FileText />}</div>
          <h1 className="text-4xl font-extrabold text-foreground sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
          <div className="mt-10 rounded-lg border border-dashed border-border bg-surface p-8 sm:p-12">
            <p className="font-semibold text-foreground">{support ? "Need help now?" : "Approved content reserved"}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{support ? "Contact the StudyCrunch support team directly and we’ll get back to you." : "This page intentionally preserves a clean space for the existing approved copy to be inserted verbatim."}</p>
            {support && <Button asChild className="mt-6"><a href="mailto:studycrunchapp@outlook.com">Email support</a></Button>}
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}