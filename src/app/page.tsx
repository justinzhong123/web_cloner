import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PromiseSection } from "@/components/PromiseSection";
import { ServiceSection } from "@/components/ServiceSection";
import { CasestudySection } from "@/components/CasestudySection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { VoiceSection } from "@/components/VoiceSection";
import { MediaSection } from "@/components/MediaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <PromiseSection />
        <ServiceSection />
        <CasestudySection />
        <PartnershipSection />
        <VoiceSection />
        <MediaSection />
      </main>
      <Footer />
    </>
  );
}
