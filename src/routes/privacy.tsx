import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — StudyCrunch" },
    { name: "description", content: "StudyCrunch Privacy Policy" },
    { property: "og:title", content: "Privacy Policy — StudyCrunch" },
    { property: "og:description", content: "StudyCrunch Privacy Policy" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ], links: [{ rel: "canonical", href: "/privacy" }] }),
  component: Privacy,
});

function Privacy() {
  return <LegalPage title="Privacy Policy" effective="September 11, 2026" intro={<p>StudyCrunch (“StudyCrunch,” “we,” “us,” or “our”) is a learning and focus application. This Privacy Policy explains what information we collect, how we use it, and the choices available to you.</p>} sections={[
    { title: "Information we collect", content: <><h3>Account information</h3><p>When you create an account, we collect information such as your email address and authentication information needed to provide and secure your account.</p><h3>Learning content and app activity</h3><p>We process the learning material you choose to provide, such as pasted text, uploaded files, learning goals, topics, answers, study-session activity, mastery progress, and related app data. This information is used to provide the learning features you request.</p><h3>Purchase information</h3><p>If you purchase StudyCrunch Pro, purchases are processed by Apple. We may receive subscription status and related transaction information needed to unlock and manage paid features. We do not receive your full payment card details.</p><h3>Diagnostics and technical information</h3><p>We may collect limited technical and diagnostic information, such as app errors, crash information, device or app version information, and service logs, to operate, secure, and improve StudyCrunch.</p></> },
    { title: "How we use information", content: <ul><li>Provide and personalize StudyCrunch features.</li><li>Generate study content and feedback based on material you provide.</li><li>Save your learning goals, progress, and session history.</li><li>Manage subscriptions and access to Pro features.</li><li>Maintain security, prevent abuse, troubleshoot issues, and improve reliability.</li><li>Respond to support requests.</li></ul> },
    { title: "AI processing", content: <p>StudyCrunch uses AI services to analyze learning material and generate study-related outputs such as topics, questions, feedback, and explanations. Content you submit may be sent to service providers acting on our behalf so they can process your request.</p> },
    { title: "Service providers", content: <p>We use service providers to operate StudyCrunch, including infrastructure, authentication and database services, AI processing, subscription management, and error monitoring. These providers process information as needed to provide their services to us.</p> },
    { title: "Focus and Screen Time features", content: <p>StudyCrunch uses Apple-provided Screen Time and Family Controls technologies to support Focus sessions and app restrictions. These features are used to provide the Focus functionality you request and are not used by StudyCrunch for advertising.</p> },
    { title: "Data retention", content: <p>We retain information for as long as reasonably necessary to provide StudyCrunch, comply with legal obligations, resolve disputes, enforce agreements, and maintain security. You can request deletion of your account from within the app.</p> },
    { title: "Data sharing", content: <p>We do not sell your personal information. We may share information with service providers that help us operate StudyCrunch, when required by law, or when necessary to protect users, StudyCrunch, or others.</p> },
    { title: "Your choices", content: <p>You may update certain account information, manage or cancel Apple subscriptions through your Apple ID settings, and request account deletion from within StudyCrunch. You may also contact us with privacy questions.</p> },
    { title: "Children", content: <p>StudyCrunch is not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p> },
    { title: "Changes to this policy", content: <p>We may update this Privacy Policy from time to time. We will post the updated policy on this page and update the effective date when appropriate.</p> },
    { title: "Contact", content: <p>For privacy questions, contact us at <a href="mailto:studycrunchapp@outlook.com">studycrunchapp@outlook.com</a>.</p> },
  ]} />;
}
