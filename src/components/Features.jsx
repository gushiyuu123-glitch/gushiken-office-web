// src/components/Features.jsx

import valueGraph from "../assets/value-graph2.png"; // Napkin画像

export default function Features() {
  return (
    <section className="pt-24 pb-32 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">

        {/* 見出し */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2a52] mb-14">
           Gushiken Office Web の
          <span className="text-[#003b8b]"> 3つの強み</span>
        </h2>

        {/* --- Napkin 図 --- */}
        <div className="flex justify-center mb-20">
          <img
            src={valueGraph}
            alt="3つの強み 図"
            className="max-w-2xl w-full drop-shadow-xl select-none pointer-events-none"
          />
        </div>

        {/* --- 3つの詳細カード --- */}
        <div className="grid md:grid-cols-3 gap-10 text-left">

          {/* === 1 === */}
          <div className="bg-white p-8 rounded-2xl border border-[#e2e8f2]
                          shadow-[0_4px_18px_rgba(0,0,0,0.06)]
                          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <h3 className="text-xl font-semibold text-[#0a2a52] mb-4 leading-snug">
              ① 専門知識ゼロでも伝わる<br />“わかりやすい構成”
            </h3>

      <p className="text-[#2d3b4f] leading-relaxed">
  お店や事業内容を分かりやすく届けるために、
  情報をていねいに整理し、
  <strong>見る人に伝わるWeb構成</strong>へと整えます。
  Webが初めての方にも安心のサポートです。
</p>

          </div>

          {/* === 2 === */}
          <div className="bg-white p-8 rounded-2xl border border-[#e2e8f2]
                          shadow-[0_4px_18px_rgba(0,0,0,0.06)]
                          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <h3 className="text-xl font-semibold text-[#0a2a52] mb-4 leading-snug">
              ② 最短3日の<br />“スピード納品”
            </h3>

            <p className="text-[#2d3b4f] leading-relaxed">
              お急ぎの案件にもすぐ対応。
              <strong>最短3日で初稿をご提出</strong>し、
              機会損失を防ぎながらスムーズに公開まで進められます。
            </p>
          </div>

          {/* === 3 === */}
          <div className="bg-white p-8 rounded-2xl border border-[#e2e8f2]
                          shadow-[0_4px_18px_rgba(0,0,0,0.06)]
                          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <h3 className="text-xl font-semibold text-[#0a2a52] mb-4 leading-snug">
              ③ 39,000円〜の<br />“明瞭な料金体系”
            </h3>

            <p className="text-[#2d3b4f] leading-relaxed">
              小規模事業者でも利用しやすい
              <strong>39,000円の定額プラン</strong>をご用意。
              追加料金の心配がなく、必要な範囲だけに絞った
              シンプルで無駄のない制作を行っています。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
