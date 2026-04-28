import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { AboutDSG } from "@/components/sections/AboutDSG";
import { Products } from "@/components/sections/Products";
import { DBOT } from "@/components/sections/DBOT";
import { Acceptance } from "@/components/sections/Acceptance";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Overview />
        <AboutDSG />
        <Products />
        <DBOT />
        <Acceptance />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
