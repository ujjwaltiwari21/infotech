import { ShieldCheck, HardDrive, Bell, Zap } from "lucide-react";

const SolutionCard = ({ title, description, icon: Icon }) => (
  <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-blue-500" size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

export default function Solutions() {
  const data = [
    {
      title: "Night Vision Pro",
      description: "Advanced infrared technology that captures high-quality full-color video even in pitch black environments.",
      icon: ShieldCheck
    },
    {
      title: "Cloud Storage",
      description: "Securely backup your footage to the cloud so you never lose a moment, accessible from anywhere.",
      icon: HardDrive
    },
    {
      title: "Instant Alerts",
      description: "Receive real-time push notifications on your phone the moment unusual activity is detected.",
      icon: Bell
    },
    {
      title: "Zero Lag Feed",
      description: "Experience ultra-low latency streaming with our high-speed IP camera integration systems.",
      icon: Zap
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-left">
        <h2 className="text-4xl font-bold mb-4">Advanced Security <span className="text-blue-500">Features</span></h2>
        <p className="text-gray-400 max-w-xl">
          We use cutting-edge technology to ensure your premises are guarded with the smartest surveillance systems available.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <SolutionCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}