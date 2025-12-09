// src/components/BridgeSection.jsx

export default function BridgeSection() {
  return (
    <section className="py-28 bg-[#f5f7fa] mt-24 border-t border-[#e5eaf0]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

        {/* 見出し */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0a2a52] mb-6">
          さらにデザイン性の高いサイトをご希望の方へ
        </h2>

        {/* 説明文 */}
        <p className="text-[#4a5768] leading-relaxed text-[15.5px] mb-12">
          本サービスでは、事務所・士業・中小企業向けに
          <strong>「分かりやすさ」を重視したシンプルな制作</strong> を提供しています。
          <br />
          もっと世界観を作り込みたい方、ブランド感のあるデザインを求める方には、  
          <strong>GUSHIKEN DESIGN 本体サイト</strong> にて、幅広い作品を<br></br>ご覧いただけます。
        </p>

        {/* CTA */}
        <a
          href="https://gushikendesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#003b8b] text-white px-12 py-4 rounded-xl 
                     font-semibold shadow-lg hover:bg-[#002f6b] transition 
                     text-lg tracking-wide"
        >
          GUSHIKEN DESIGN の制作実績を見る
        </a>

        {/* 補足テキスト */}
        <p className="text-[#7a8797] text-sm mt-6">
          ※ こちらは当サービスよりデザイン自由度の高い制作が可能です。
        </p>

      </div>
    </section>
  );
}
