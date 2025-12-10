import { motion } from "framer-motion";
import heroImg from "../assets/hero-office.png";

export default function HeroSP() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden z-0 block md:hidden">
      
      {/* 背景画像 */}
      <motion.img
        src={heroImg}
        alt="Corporate Office"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ transform: "translateZ(0)" }} // iOS対策
      />

      {/* 青オーバーレイ（背景の情報量を抑える） */}
      <div className="absolute inset-0 bg-[#032b61]/55 mix-blend-multiply" />

      {/* 下グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1c33]/35 to-transparent" />

      {/* ====== 中央カード ====== */}
      <div className="relative z-10 px-5 pt-24">
        <div
          className="
            relative
            bg-white/55 backdrop-blur-xl
            border border-white/40
            rounded-xl
            shadow-[0_10px_30px_rgba(0,0,0,0.22)]
            p-6 max-w-[90%] mx-auto
          "
        >

          {/* 内側透明ホワイトレイヤー（視認性アップ） */}
          <div className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none" />

          {/* ===== 内容 ===== */}
          <div className="relative z-10">

            <p className="text-[#003b8b] font-bold tracking-[0.18em] text-[10px] mb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              GUSHIKEN OFFICE WEB
            </p>

            <h1 className="text-2xl font-bold text-[#0a2a52] leading-snug mb-5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              専門性を
              <span className="text-[#003b8b]"> “正しく伝える Web” </span>
              が信頼をつくる。
            </h1>

            <p className="text-sm text-[#2d3b4f] leading-relaxed mb-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              業務内容の整理から文章作成・デザインまで一貫対応。
              はじめての方にも伝わる Web を構築します。
            </p>

            <div className="flex flex-col gap-3">

              <a
                href="#plans"
                className="bg-[#003b8b] text-white py-3 rounded-lg text-base font-semibold text-center shadow-[0_3px_6px_rgba(0,0,0,0.15)]"
              >
                料金を見る（39,000円〜）
              </a>

              <a
                href="#contact"
                className="
                  border border-[#003b8b] text-[#003b8b]
                  py-3 rounded-lg text-base font-semibold text-center
                  bg-white/20 backdrop-blur-sm
                "
              >
                無料相談はこちら
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
