import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Plans from "./components/Plans";
import Flow from "./components/Flow";
import Works from "./components/Works";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import BridgeSection from "./components/BridgeSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* 固定ヘッダー */}
      <Header />

      {/* サイト本体 */}
      <main className="min-h-screen bg-white">

        {/* Hero：ページの印象を決定するパート */}
        <Hero />

        {/* 3つの強み */}
        <Features />

        {/* 料金プラン */}
        <Plans />

        {/* 制作の流れ */}
        <Flow />

        {/* 実績 */}
        <Works />

        {/* FAQ */}
        <FAQ />

        {/* お問い合わせ */}
        <Contact />

        {/* GUSHIKEN DESIGN への橋渡し */}
        <BridgeSection />
      </main>

      {/* フッター：企業サイトらしい締め */}
      <Footer />
    </>
  );
}

export default App;
