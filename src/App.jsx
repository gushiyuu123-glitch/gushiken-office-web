import Header from "./components/Header";
import HeroPC from "./components/HeroPC";
import HeroSP from "./components/HeroSP";
import Features from "./components/Features";
import Plans from "./components/Plans";
import Flow from "./components/Flow";
import Works from "./components/Works";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import BridgeSection from "./components/BridgeSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">

      <Header />

      {/* PC版 */}
      <div className="hidden md:block">
        <HeroPC />
      </div>

      {/* SP版 */}
      <div className="block md:hidden">
        <HeroSP />
      </div>

      <Features />
      <Plans />
      <Flow />
      <Works />
      <FAQ />
      <Contact />
      <BridgeSection />
      <Footer />

    </div>
  );
}
