import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WaitlistSection } from "@/components/WaitlistSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#161616]">
      <Header />
      <main>
        <Hero />
        <WaitlistSection />
      </main>
    </div>
  );
}
