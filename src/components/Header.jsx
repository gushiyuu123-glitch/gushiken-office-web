import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);

  // --- スクロールロック（iOS 最適化） ---
  useEffect(() => {
    const body = document.body;

    if (open) {
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.width = "100%";
    } else {
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-[#e5eaf0] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* ロゴ */}
        <a
          href="#hero"
          className="font-bold text-[#003b8b] text-lg select-none"
        >
          Gushiken Office Web
        </a>

        {/* PCナビ */}
        <nav className="hidden md:flex gap-8 text-[#0a2a52] font-medium">
          <a href="#features" className="hover:text-[#003b8b]">強み</a>
          <a href="#plans" className="hover:text-[#003b8b]">料金</a>
          <a href="#flow" className="hover:text-[#003b8b]">流れ</a>
          <a href="#works" className="hover:text-[#003b8b]">実績</a>
          <a href="#faq" className="hover:text-[#003b8b]">FAQ</a>
          <a href="#contact" className="text-[#003b8b] font-semibold">お問い合わせ</a>
        </nav>

        {/* スマホHamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-[#003b8b] text-3xl"
        >
          <HiMenu />
        </button>
      </div>

{/* === モバイルメニュー === */}
<div
  className={`
    fixed inset-0 top-0 left-0 w-screen h-screen
    bg-black/40 backdrop-blur-sm
    z-[999999]   /* ← 強制的に最優先 */
    transition-opacity duration-300
    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
  style={{ position: "fixed" }}  // ← Safariでも絶対固定
  onClick={() => setOpen(false)}
>
  {/* メニュー本体 */}
  <div
    className={`
      absolute right-0 top-0 w-72 h-full bg-white
      shadow-2xl p-6 overflow-y-auto
      transition-transform duration-300
      ${open ? "translate-x-0" : "translate-x-full"}
    `}
    style={{ position: "absolute", zIndex: 1000000 }}  // ← 最前面
    onClick={(e) => e.stopPropagation()}
  >

          {/* 閉じるボタン */}
          <button
            className="text-3xl text-[#003b8b] mb-6"
            onClick={() => setOpen(false)}
          >
            <HiX />
          </button>

          <nav className="flex flex-col gap-6 text-lg text-[#0a2a52]">
            <a href="#features" onClick={() => setOpen(false)}>強み</a>
            <a href="#plans" onClick={() => setOpen(false)}>料金</a>
            <a href="#flow" onClick={() => setOpen(false)}>流れ</a>
            <a href="#works" onClick={() => setOpen(false)}>実績</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>

            <a
              href="#contact"
              className="text-[#003b8b] font-semibold"
              onClick={() => setOpen(false)}
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
