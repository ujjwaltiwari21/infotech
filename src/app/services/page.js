import ServicesPage from "@/components/ServicesPage";
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";

export const metadata = {
  title: "Our Services | InfoTech Security Solutions",
  description: "Explore our premium AI-Surveillance, Networking, and IT Infrastructure services.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <ServicesPage />
      </div>

      <Footer />
    </main>
  );
}