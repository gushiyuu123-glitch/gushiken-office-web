// src/components/Flow.jsx

export default function Flow() {
  return (
    <section className="py-28 bg-[#f7f9fc]" id="flow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* 見出し */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2a52] text-center mb-16">
          制作の流れ
          <span className="text-[#003b8b]">（5ステップ）</span>
        </h2>

    <div className="relative border-l-4 border-[#003b8b] ml-0 md:ml-16 pl-8 md:pl-12 space-y-16 md:space-y-20">



          {[
            ["無料相談", "まずはメールまたはフォームからご相談ください。現状のお悩み・やりたいこと・目的を簡単に共有いただくだけで構いません。"],
            ["ヒアリング", "業務内容・強み・サービスの流れなどを丁寧に伺い、専門知識がなくても理解しやすいサイト構成へと整理します。オンライン・チャットにも対応。"],
            ["ラフ制作（構成案）", "ヒアリング内容をもとにトップページ構成（ワイヤーフレーム）を作成。この段階で方向性と情報整理を確認します。"],
            ["デザイン・制作", "構成案をもとに実際のデザイン・実装を進めます。士業・中小企業向けの落ち着いた読みやすいデザインを採用。最短3日で初稿提出も可能。"],
            ["納品・公開", "最終確認後にサイト公開。納品後も軽微な修正や更新など継続サポートします。初めてでも安心して運用できます。"],
          ].map((step, index) => (
            <div key={index} className="relative flex items-start">

              {/* --- 番号（少し上に移動） --- */}
              <div className="absolute -left-[34px] top-1/2 -translate-y-[60%]">
                <div className="w-10 h-10 rounded-full bg-[#003b8b] text-white font-bold flex items-center justify-center shadow-md">
                  {index + 1}
                </div>
              </div>

              {/* --- テキストブロック --- */}
              <div className="pl-6">
                <h3 className="text-2xl font-bold text-[#0a2a52] mb-2">
                  {step[0]}
                </h3>
                <p className="text-[#2d3b4f] leading-relaxed">
                  {step[1]}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
