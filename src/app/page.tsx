import { AnimatedBackground } from "@/components/effects/AnimatedBackground";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <NoiseOverlay />
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
