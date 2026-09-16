import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Brain, Check, FileUp, Focus, Layers3, LockKeyhole, MessageSquareText, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-shell";
const appIconUrl = "/assets/studycrunch-app-icon.png";
const homeScreenshotUrl = "/assets/studycrunch-home.png";
const mascotUrl = "/assets/studycrunch-mascot.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StudyCrunch — Study Smarter. Lock In." },
      { name: "description", content: "Turn learning material into personalized study sessions, track mastery, and restrict distracting apps during Focus sessions." },
      { property: "og:title", content: "StudyCrunch — Study Smarter. Lock In." },
      { property: "og:description", content: "Personalized studying and distraction-free focus for iPhone." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const pillars = [
  { number: "01", label: "STUDY", icon: BookOpen, title: "From material to momentum.", text: "Paste, upload, or photograph your learning material. StudyCrunch organizes it into topics and concepts, then builds personalized questions around what you’re learning.", detail: "Quick 6 · Full 12 · Custom", tone: "bg-brand-soft text-brand-deep" },
  { number: "02", label: "MASTER", icon: Brain, title: "Know what needs attention.", text: "Answer questions and get AI-powered feedback. Your mastery view tracks progress across topics and concepts, making the next thing to study clear.", detail: "Feedback · Progress · Mastery", tone: "bg-focus-lime/25 text-foreground" },
  { number: "03", label: "FOCUS", icon: Focus, title: "Make room to lock in.", text: "Choose what you’ll study and for how long, then select the distracting apps you want restricted during your Focus session using iOS Screen Time functionality.", detail: "15 · 30 · 45 · 60 minutes", tone: "bg-ink text-primary-foreground" },
];

const steps = [
  [FileUp, "Add your material"], [Layers3, "Organize topics"], [Sparkles, "Start a session"],
  [MessageSquareText, "Answer + feedback"], [Target, "Track mastery"], [LockKeyhole, "Lock in with Focus"],
] as const;

const faqs = [
  ["What can I upload?", "You can add learning material by pasting text, uploading a file, or taking a photo."],
  ["How does StudyCrunch create study sessions?", "StudyCrunch organizes your material into topics and concepts, then creates personalized questions. Choose a Quick session with 6 questions, a Full session with 12, or build a Custom session with selected topics."],
  ["How does Focus work?", "Choose what you want to study, select a 15, 30, 45, or 60-minute duration, and pick distracting apps. StudyCrunch uses iOS Screen Time functionality to restrict those selected apps during the session."],
  ["Is StudyCrunch free?", "Yes. Free includes 1 learning goal, up to 3 materials, 3 Study sessions per day, 3 Focus sessions per day, and 2 successful AI Add Topic actions per day."],
  ["What does StudyCrunch Pro include?", "Pro includes unlimited learning goals, materials, Study sessions, Focus sessions, and AI topic additions. It is available for $4.99 monthly or $39.99 annually."],
];

function AppStoreBadge() {
  return (
    <a
      href="https://apps.apple.com/us/app/studycrunch/id6808068669"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download StudyCrunch on the App Store"
    >
      <img
        src="/assets/app-store-badge.svg"
        alt="Download on the App Store"
        className="h-14 w-auto"
      />
    </a>
  );
}

function ProductPlaceholder() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-gentle-float">
      <div className="absolute -left-4 top-24 hidden rounded-lg border border-border bg-card p-4 shadow-xl sm:block"><p className="text-xs font-bold text-primary">CHOOSE YOUR STUDY SESSION</p><p className="mt-1 text-base font-extrabold">Quick · Full · Custom</p></div>
      <div className="mx-auto w-full max-w-[20rem] overflow-hidden rounded-[2rem] border-4 border-ink bg-card shadow-2xl shadow-primary/10">
        <img src={homeScreenshotUrl} alt="StudyCrunch Home screen showing a Python learning goal, mastery progress, and study and focus session actions" className="h-auto w-full" />
      </div>
      <div className="absolute -right-2 bottom-20 hidden rounded-lg bg-ink p-4 text-primary-foreground shadow-xl sm:block"><p className="text-xs font-bold text-focus-lime">FOCUS MODE</p><p className="mt-1 text-base font-extrabold">Block distractions</p></div>
    </div>
  );
}

function Index() {
  return (
    <SiteLayout>
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary" />
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
            <div className="relative z-10">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary"><span className="size-2 rounded-full bg-primary" /> AI Learning + Focus</p>
              <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[1.03] text-foreground sm:text-7xl lg:text-8xl">Study smarter.<br /><span className="text-primary">Lock in.</span></h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">Turn your learning material into personalized study sessions, master what matters, and block distractions when it’s time to focus.</p>
               <div className="mt-9 flex flex-wrap items-center gap-4"><AppStoreBadge /><a href="#features" className="inline-flex h-14 items-center gap-2 px-2 text-sm font-bold text-foreground hover:text-primary">See how it works <ArrowRight className="size-4" /></a></div>
              <p className="mt-4 text-xs text-muted-foreground">For iPhone · Available now on the App Store</p>
            </div>
            <ProductPlaceholder />
          </div>
        </section>

        <section id="features" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">One connected loop</p><h2 className="mt-4 text-4xl font-extrabold text-foreground sm:text-6xl">Learn it. Own it.<br />Protect the time.</h2></div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {pillars.map(({ number, label, icon: Icon, title, text, detail, tone }) => (
                <article key={label} className="group flex min-h-[31rem] flex-col rounded-lg border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                  <div className="flex items-center justify-between"><span className="font-display text-sm font-bold text-muted-foreground">{number}</span><span className={`grid size-11 place-items-center rounded-lg ${tone}`}><Icon className="size-5" /></span></div>
                  <p className="mt-16 text-xs font-bold tracking-[0.18em] text-primary">{label}</p><h3 className="mt-3 text-3xl font-extrabold text-foreground">{title}</h3><p className="mt-5 leading-7 text-muted-foreground">{text}</p>
                  <div className="mt-auto border-t border-border pt-5 text-sm font-bold text-foreground">{detail}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-16 bg-surface px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">How it works</p><h2 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">Material in. Momentum out.</h2></div><p className="max-w-md leading-7 text-muted-foreground">A clear path from the notes in front of you to the progress you can see.</p></div>
            <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {steps.map(([Icon, label], index) => <li key={label} className="relative bg-background p-7"><span className="text-xs font-bold text-muted-foreground">0{index + 1}</span><Icon className="mt-10 size-7 text-primary" /><p className="mt-4 font-display text-lg font-extrabold text-foreground">{label}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="overflow-hidden bg-ink px-5 py-24 text-primary-foreground sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-focus-lime">Focus mode</p><h2 className="mt-5 text-5xl font-extrabold sm:text-7xl">Give your attention somewhere to stay.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-primary-foreground/70">Pick what you’re studying, set a duration, and select the distracting apps you want restricted. StudyCrunch uses iOS Screen Time functionality during your Focus session.</p><div className="mt-8 flex flex-wrap gap-3">{[15,30,45,60].map((minute) => <span key={minute} className={`grid size-14 place-items-center rounded-lg border text-sm font-bold ${minute === 30 ? "border-focus-lime bg-focus-lime text-ink" : "border-primary-foreground/20"}`}>{minute}</span>)}</div></div>
            <div className="relative min-h-[30rem] rounded-lg bg-primary p-7 sm:p-10"><div className="flex items-center justify-between text-primary-foreground"><p className="text-sm font-bold">Focus session</p><ShieldCheck /></div><div className="mt-20 text-center"><p className="text-7xl font-extrabold sm:text-8xl">30:00</p><p className="mt-3 text-primary-foreground/70">Biology · Cell structure</p></div><div className="mt-16 grid grid-cols-3 gap-3">{["Social", "Video", "Games"].map((app) => <div key={app} className="rounded-lg bg-ink/20 p-4 text-center text-xs font-bold"><LockKeyhole className="mx-auto mb-2 size-5" />{app}</div>)}</div><p className="mt-6 text-center text-xs text-primary-foreground/60">Illustrative marketing layout — not an app screenshot</p></div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-16 px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto max-w-5xl"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Pricing</p><h2 className="mt-4 text-4xl font-extrabold text-foreground sm:text-6xl">Start free. Go unlimited.</h2></div><div className="mt-14 grid gap-5 lg:grid-cols-2">
          <PricingCard title="Free" price="$0" description="A focused way to get started." features={["1 learning goal", "Up to 3 materials per goal", "3 Study sessions per day", "3 Focus sessions per day", "2 successful AI Add Topic actions per day"]} />
          <PricingCard title="StudyCrunch Pro" price="$4.99" suffix="/ month" description="Or $39.99 annually" featured features={["Unlimited learning goals", "Unlimited materials", "Unlimited Study sessions", "Unlimited Focus sessions", "Unlimited AI topic additions"]} />
        </div><p className="mt-5 text-center text-xs text-muted-foreground">Pricing shown may vary by App Store storefront. Subscriptions are purchased through the App Store.</p></div></section>

        <section id="faq" className="scroll-mt-16 bg-surface px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">FAQ</p><h2 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">Good questions.<br />Clear answers.</h2></div><Accordion type="single" collapsible className="border-t border-border">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`}><AccordionTrigger className="py-6 text-base sm:text-lg">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 text-base leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

        <section id="download" className="scroll-mt-16 px-5 py-16 sm:px-8"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-24"><img src={mascotUrl} alt="" className="absolute -bottom-8 -right-10 hidden w-64 rotate-3 opacity-90 lg:block" /><div className="relative z-10"><img src={appIconUrl} alt="StudyCrunch app icon" className="mx-auto size-14 rounded-2xl" /><h2 className="mt-7 text-4xl font-extrabold sm:text-6xl">Ready to lock in?</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-primary-foreground/75">Turn your material into a plan, see what you’ve mastered, and protect time to focus.</p><div className="mt-8 flex justify-center"><AppStoreBadge /></div></div></div></section>
      </main>
    </SiteLayout>
  );
}

function PricingCard({ title, price, suffix, description, features, featured = false }: { title: string; price: string; suffix?: string; description: string; features: string[]; featured?: boolean }) {
  return <article className={`rounded-lg border p-7 sm:p-9 ${featured ? "border-primary bg-ink text-primary-foreground" : "border-border bg-card text-foreground"}`}><div className="flex items-start justify-between gap-4"><div><h3 className="text-2xl font-extrabold">{title}</h3><p className={`mt-2 text-sm ${featured ? "text-primary-foreground/65" : "text-muted-foreground"}`}>{description}</p></div>{featured && <span className="rounded-full bg-focus-lime px-3 py-1 text-xs font-bold text-ink">UNLIMITED</span>}</div><p className="mt-10 font-display text-5xl font-extrabold">{price}<span className={`text-sm font-medium ${featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{suffix}</span></p><ul className={`mt-9 space-y-4 border-t pt-7 ${featured ? "border-primary-foreground/15" : "border-border"}`}>{features.map((feature) => <li key={feature} className="flex gap-3 text-sm"><Check className={`mt-0.5 size-4 shrink-0 ${featured ? "text-focus-lime" : "text-primary"}`} />{feature}</li>)}</ul></article>;
}
