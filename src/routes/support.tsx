import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/support")({
  head: () => ({ meta: [
    { title: "Support — StudyCrunch" },
    { name: "description", content: "StudyCrunch support and contact information" },
    { property: "og:title", content: "Support — StudyCrunch" },
    { property: "og:description", content: "StudyCrunch support and contact information" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ], links: [{ rel: "canonical", href: "/support" }] }),
  component: Support,
});

function Support() {
  return <LegalPage kicker="Help" title="StudyCrunch Support" intro={<p className="text-lg">Need help with your account, Study or Focus sessions, subscriptions, or anything else in StudyCrunch?</p>} sections={[
    { title: "Contact us", content: <><p>Email <a href="mailto:studycrunchapp@outlook.com">studycrunchapp@outlook.com</a>.</p><p className="text-sm text-muted-foreground">Please include a short description of the issue and your app version. Do not send passwords or payment card information.</p></> },
    { title: "Subscriptions", content: <p>StudyCrunch Pro subscriptions are billed through Apple. You can manage or cancel your subscription in your Apple ID subscription settings. Use “Restore purchases” inside StudyCrunch if you already have an active subscription that is not appearing.</p> },
    { title: "Account deletion", content: <p>You can request deletion of your StudyCrunch account from Account Settings inside the app.</p> },
    { title: "Privacy", content: <p>Read our <a href="/privacy">Privacy Policy</a>.</p> },
  ]} />;
}
