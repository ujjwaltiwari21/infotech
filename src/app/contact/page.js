import Contact from "@/components/Contact";
import Navbar from "@/shared/Navbar";

export const metadata = {
  title: "Contact Us - Security System",
  description: "Get in touch with our security experts for your surveillance needs",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
    </>
  );
}