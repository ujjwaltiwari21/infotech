import Navbar from "@/shared/Navbar";
import HeroPage from "./Hero";
import Stats from "./Stats";
import Partners from "@/shared/Partners";
import WhatsAppButton from "@/shared/Whatsapp";
// import ScrollCamera from "./Camera";

export default function Main() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Navbar />
      <HeroPage/>
      <Stats/>
      {/* <ScrollCamera/> */}
      <Partners/>
      <WhatsAppButton/>
    </main>
  );
}