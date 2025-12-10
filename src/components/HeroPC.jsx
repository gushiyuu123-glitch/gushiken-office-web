import { motion } from "framer-motion";
import heroImg from "../assets/hero-office.png";

export default function HeroPC() {
  return (
  <section className="relative w-full h-screen overflow-hidden z-0 hidden md:block"
      id="hero"
    >

      {/* 背景画像 */}
      <motion.img
        src={heroImg}
        alt="Corporate Office"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 青オーバーレイ（印象を統一） */}
      <div className="absolute inset-0 bg-[#032b61]/55 mix-blend-multiply" />

      {/* 追加のグラデーション（読みやすさUP） */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1c33]/35 to-transparent" />

      {/* テキストボックス */}
      <div className="relative z-10 h-full max-w-7xl mx-auto flex items-center px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl bg-white/95 backdrop-blur-lg
                     p-10 md:p-12 rounded-2xl
                     border border-white/40
                     shadow-[0_20px_50px_rgba(0,0,0,0.28)]
                     relative"
        >

          {/* サービス名 */}
          <p className="text-[#003b8b] font-bold tracking-[0.20em] text-xs md:text-sm mb-3">
            GUSHIKEN OFFICE WEB
          </p>

          {/* キャッチコピー */}
    <h1 className="text-3xl md:text-5xl font-bold text-[#0a2a52] leading-tight mb-6">
  伝えたいことを
  <br />
  <span className="text-[#003b8b]">“正しく届く Web”</span>に。
  <br />
  信頼は、わかりやすさから生まれる。
</h1>


          {/* 説明文 */}
        <p className="text-base md:text-lg text-[#2d3b4f] leading-relaxed mb-10">
  サービス内容を分かりやすく整理し、文章作成からデザインまで一貫対応。
  どんな事業でも、はじめて見る人に“しっかり伝わる Web”を制作します。
</p>


          {/* CTA */}
          <div className="flex flex-wrap gap-4 md:gap-6">

            <a
              href="#plans"
              className="bg-[#003b8b] text-white px-8 py-4 rounded-xl text-lg font-semibold
                         shadow-md hover:bg-[#002e6c] transition min-w-[200px] text-center"
            >
              料金を見る（39,000円〜）
            </a>

            <a
              href="#contact"
              className="bg-white border border-[#003b8b] text-[#003b8b]
                         px-8 py-4 rounded-xl text-lg font-semibold shadow-md
                         hover:bg-[#eaf1ff] transition min-w-[200px] text-center"
            >
              無料相談はこちら
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
