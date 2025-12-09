// src/components/FAQ.jsx

export default function FAQ() {
  return (
    <section className="py-28 bg-[#f7f9fc]" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* 見出し */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2a52] text-center mb-16">
          よくあるご質問
          <span className="text-[#003b8b]">（FAQ）</span>
        </h2>

        <div className="space-y-10">

          {/* Q1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eaf0]
                          transition hover:shadow-md hover:-translate-y-0.5 duration-200">
            <h3 className="text-xl font-semibold text-[#0a2a52] mb-3">
              Q. 追加料金が発生することはありますか？
            </h3>
            <p className="text-[#4a5768] leading-relaxed text-[15.5px]">
              基本的には、<strong>プラン内で完結する安心の料金設計</strong>です。  
              大幅なページ追加や特殊システム（予約・決済など）が必要な場合のみ、
              事前にお見積りをご提示します。  
              <strong>無断で料金が増えることは一切ありません。</strong>
            </p>
          </div>

          {/* Q2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eaf0]
                          transition hover:shadow-md hover:-translate-y-0.5 duration-200">
            <h3 className="text-xl font-semibold text-[#0a2a52] mb-3">
              Q. 文章作成はどこまで対応してもらえますか？
            </h3>
            <p className="text-[#4a5768] leading-relaxed text-[15.5px]">
              ヒアリング内容をもとに、  
              <strong>トップページ・サービス内容・会社紹介など主要ページの文章を全て作成</strong>します。  
              士業や中小企業の専門的な内容も、読み手にわかりやすい表現に整えて制作します。
            </p>
          </div>

          {/* Q3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eaf0]
                          transition hover:shadow-md hover:-translate-y-0.5 duration-200">
            <h3 className="text-xl font-semibold text-[#0a2a52] mb-3">
              Q. 写真素材がない場合はどうすればいいですか？
            </h3>
            <p className="text-[#4a5768] leading-relaxed text-[15.5px]">
              写真がなくても問題ありません。  
              こちらで無料・高品質の素材をご提案し、  
              <strong>落ち着き・信頼感のあるイメージ</strong>で構成します。  
              お客様の写真が後から用意できた場合も、差し替えが可能です。
            </p>
          </div>

          {/* Q4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eaf0]
                          transition hover:shadow-md hover:-translate-y-0.5 duration-200">
            <h3 className="text-xl font-semibold text-[#0a2a52] mb-3">
              Q. 公開後のサポートはありますか？
            </h3>
            <p className="text-[#4a5768] leading-relaxed text-[15.5px]">
              はい、公開後も無料で軽微な修正（文言や写真の差し替え）に対応しています。  
              また更新方法のレクチャーも行うため、  
              <strong>初めてホームページを持つ方でも安心して運用</strong>いただけます。
            </p>
          </div>

          {/* Q5 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eaf0]
                          transition hover:shadow-md hover:-translate-y-0.5 duration-200">
            <h3 className="text-xl font-semibold text-[#0a2a52] mb-3">
              Q. 納期はどれくらいかかりますか？
            </h3>
            <p className="text-[#4a5768] leading-relaxed text-[15.5px]">
              ライトプランは、<strong>最短3日で初稿をご提出</strong>できます。  
              3〜5ページの構成でも、通常 1〜2 週間以内で納品可能です。  
              お急ぎの案件にも柔軟に対応いたします。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
