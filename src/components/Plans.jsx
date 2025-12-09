// src/components/Plans.jsx

export default function Plans() {
  return (
    <section className="py-28 bg-white" id="plans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* 見出し */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2a52] text-center mb-16">
          シンプルで分かりやすい
          <span className="text-[#003b8b]"> 料金プラン</span>
        </h2>

        {/* グリッド */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* === Light Plan === */}
          <div className="border border-[#e5eaf0] bg-[#f9fbff] p-10 rounded-2xl shadow-sm 
                          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            
            <h3 className="text-xl font-bold text-[#003b8b] mb-2">ライトプラン</h3>
            <p className="text-4xl font-bold text-[#0a2a52] mb-6">¥39,000</p>

            <ul className="text-[#2d3b4f] space-y-3 mb-8 leading-relaxed">
              <li>• 1ページ構成（紹介ページ）</li>
              <li>• テンプレートデザイン</li>
              <li>• 修正 1 回</li>
              <li>• スマホ対応</li>
              <li>• お問い合わせフォーム設置</li>
            </ul>

            <a
              href="#contact"
              className="block text-center bg-[#003b8b] text-white py-3 rounded-xl font-semibold 
                         hover:bg-[#002f6b] transition"
            >
              このプランで相談する
            </a>
          </div>

          {/* === Standard Plan（おすすめ） === */}
          <div className="border-2 border-[#003b8b] bg-white p-10 rounded-2xl shadow-xl relative
                          transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            
            {/* おすすめリボン */}
            <div className="absolute top-0 right-0 bg-[#003b8b] text-white text-xs font-bold 
                            px-4 py-1 rounded-bl-lg tracking-wider">
              おすすめ
            </div>

            <h3 className="text-xl font-bold text-[#003b8b] mb-2">スタンダード</h3>
            <p className="text-4xl font-bold text-[#0a2a52] mb-6">¥59,000</p>

            <ul className="text-[#2d3b4f] space-y-3 mb-8 leading-relaxed">
              <li>• 3ページ構成（事務所紹介・サービス内容など）</li>
              <li>• 軽いオリジナルデザイン対応</li>
              <li>• 修正 2 回</li>
              <li>• スマホ最適化</li>
              <li>• お問い合わせフォーム設置</li>
            </ul>

            <a
              href="#contact"
              className="block text-center bg-[#003b8b] text-white py-3 rounded-xl font-semibold 
                         hover:bg-[#002f6b] transition"
            >
              このプランで相談する
            </a>
          </div>

          {/* === Business Plan === */}
          <div className="border border-[#e5eaf0] bg-[#f9fbff] p-10 rounded-2xl shadow-sm
                          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            
            <h3 className="text-xl font-bold text-[#003b8b] mb-2">ビジネスプラン</h3>
            <p className="text-4xl font-bold text-[#0a2a52] mb-6">¥79,000</p>

            <ul className="text-[#2d3b4f] space-y-3 mb-8 leading-relaxed">
              <li>• 5ページ構成（法人サイト向け）</li>
              <li>• しっかりしたオリジナルデザイン</li>
              <li>• 修正 3 回</li>
              <li>• スマホ最適化</li>
              <li>• フォーム + 簡易ブログ / お知らせ設置</li>
            </ul>

            <a
              href="#contact"
              className="block text-center bg-[#003b8b] text-white py-3 rounded-xl font-semibold 
                         hover:bg-[#002f6b] transition"
            >
              このプランで相談する
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
