import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ShiftCta from "@/components/sections/ShiftCta";
import Process from "@/components/sections/Process";
import Integrations from "@/components/sections/Integrations";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ShiftCta />
        <Process />
        <Integrations />
        <Testimonials />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
