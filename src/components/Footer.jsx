// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-[#0a2a52] text-white pt-20 pb-12 mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* 上段：ロゴ & 説明 + ナビ */}
        <div className="md:flex items-start justify-between mb-16 gap-10">

          {/* ロゴと説明 */}
          <div className="mb-12 md:mb-0 max-w-sm">
            <h2 className="text-2xl font-bold tracking-wide mb-3">
              Gushiken Office Web
            </h2>

            <p className="text-sm text-[#dbe2ea] leading-relaxed">
              事務所・士業・中小企業のための  
              <span className="font-medium">“誠実で読みやすいWeb制作”</span> を提供しています。
              情報整理・文章作成・構成設計まで一貫してサポートいたします。
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="grid grid-cols-2 gap-12 text-sm">

            <div>
              <h3 className="font-semibold mb-3 text-white tracking-wide">
                サイト内リンク
              </h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-[#b5c7e0] transition">3つの強み</a></li>
                <li><a href="#plans" className="hover:text-[#b5c7e0] transition">料金プラン</a></li>
                <li><a href="#works" className="hover:text-[#b5c7e0] transition">制作実績</a></li>
                <li><a href="#flow" className="hover:text-[#b5c7e0] transition">制作の流れ</a></li>
                <li><a href="#faq" className="hover:text-[#b5c7e0] transition">FAQ</a></li>
                <li><a href="#contact" className="hover:text-[#b5c7e0] transition">お問い合わせ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-white tracking-wide">
                運営情報
              </h3>
              <ul className="space-y-2 text-[#dbe2ea]">
                <li>GUSHIKEN DESIGN</li>
                <li>沖縄県｜Webデザイン</li>
                <li>代表：具志堅 裕人</li>
              </ul>
            </div>

          </div>
        </div>

        {/* 下段：コピーライト */}
        <div className="border-t border-[#1d3456] pt-6 text-center text-sm text-[#c9d5e3]">
          © {new Date().getFullYear()} Gushiken Office Web — GUSHIKEN DESIGN
        </div>

      </div>
    </footer>
  );
}
