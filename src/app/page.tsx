import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { WhatsIncluded } from "@/components/WhatsIncluded";
import { WhyDifferent } from "@/components/WhyDifferent";
import { Demos } from "@/components/Demos";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { GuaranteeFaq } from "@/components/GuaranteeFaq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatsIncluded />
        <Demos />
        <WhyDifferent />
        <Features />
        <Pricing />
        <Testimonials />
        <GuaranteeFaq />
      </main>
      <Footer />
    </div>
  );
}
