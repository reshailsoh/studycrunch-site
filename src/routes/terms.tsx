import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms of Use — StudyCrunch" },
    { name: "description", content: "StudyCrunch Terms of Use" },
    { property: "og:title", content: "Terms of Use — StudyCrunch" },
    { property: "og:description", content: "StudyCrunch Terms of Use" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ], links: [{ rel: "canonical", href: "/terms" }] }),
  component: Terms,
});

function Terms() {
  return <LegalPage title="Terms of Use" effective="September 11, 2026" intro={<p>These Terms of Use govern your use of StudyCrunch. By using StudyCrunch, you agree to these Terms.</p>} sections={[
    { title: "StudyCrunch service", content: <p>StudyCrunch provides learning, AI-assisted study, progress tracking, and focus features. AI-generated content may be incomplete or inaccurate and should be reviewed before relying on it for important decisions.</p> },
    { title: "Your content", content: <p>You are responsible for the material you upload, paste, or otherwise submit to StudyCrunch. You must have the rights or permission necessary to use that material and to allow StudyCrunch and its service providers to process it to provide the requested features.</p> },
    { title: "Acceptable use", content: <p>You may not misuse StudyCrunch, interfere with the service, attempt unauthorized access, use the service unlawfully, or submit content that you do not have the right to use.</p> },
    { title: "Subscriptions", content: <p>StudyCrunch may offer auto-renewable subscriptions through Apple. Prices and billing periods are shown before purchase. Payment is charged to your Apple ID at confirmation. Subscriptions renew automatically unless cancelled in accordance with Apple’s subscription terms. You can manage or cancel subscriptions through your Apple ID settings.</p> },
    { title: "Changes and availability", content: <p>We may modify, suspend, or discontinue features when reasonably necessary. We may also update these Terms from time to time.</p> },
    { title: "Disclaimer", content: <p>StudyCrunch is provided on an “as is” and “as available” basis to the extent permitted by law. We do not guarantee that AI-generated content will always be accurate, complete, or suitable for a particular purpose.</p> },
    { title: "Contact", content: <p>Questions about these Terms can be sent to <a href="mailto:studycrunchapp@outlook.com">studycrunchapp@outlook.com</a>.</p> },
  ]} />;
}
