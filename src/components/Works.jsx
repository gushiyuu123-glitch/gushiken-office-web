// src/components/Works.jsx

export default function Works() {
  return (
    <section className="py-28 bg-white" id="works">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* 見出し */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2a52] text-center mb-10">
          制作実績
          <span className="text-[#003b8b]">（事務所・中小企業向け）</span>
        </h2>

        {/* 説明文 */}
        <p className="text-center text-[#4a5768] max-w-2xl mx-auto mb-16 leading-relaxed text-[15.5px]">
          現在、士業・教室・小規模事業者向けの架空サイトを制作しています。
          <br />
          完成した順に、こちらへ掲載していきます。
        </p>

        {/* 実績カード枠 */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* === Work 1（教室・スクール） === */}
          <a
            href="https://haru-learning.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl overflow-hidden border border-[#e5eaf0] shadow-sm 
                       transition hover:shadow-md hover:-translate-y-1 duration-200 block"
          >
            {/* サムネイル画像 */}
            <img
              src="/haru.webp"
              alt="haru-learning 教室サイト"
              className="w-full h-52 object-cover bg-[#f3f5f8]"
            />
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#0a2a52] mb-2">
                教室・スクール（架空サイト）
              </h3>
              <p className="text-[#4a5768] text-sm leading-relaxed">
                初心者でも安心して通いたくなる、やさしい雰囲気のパソコン教室サイト。
                使いやすさと信頼感を重視した構成で制作しました。
              </p>
            </div>
          </a>

          {/* === Work 2 === */}
          <div className="group rounded-2xl overflow-hidden border border-[#e5eaf0] shadow-sm 
                          transition hover:shadow-md hover:-translate-y-1 duration-200">
            <div className="bg-[#f3f5f8] h-52 flex items-center justify-center text-[#9caaba] text-sm">
              （整骨院サイト・準備中）
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#0a2a52] mb-2">
                整骨院・治療院（架空サイト）
              </h3>
              <p className="text-[#4a5768] text-sm leading-relaxed">
                清潔感・信頼感を最重視した、医療系に適した構成で制作予定です。
              </p>
            </div>
          </div>

          {/* === Work 3 === */}
          <div className="group rounded-2xl overflow-hidden border border-[#e5eaf0] shadow-sm 
                          transition hover:shadow-md hover:-translate-y-1 duration-200">
            <div className="bg-[#f3f5f8] h-52 flex items-center justify-center text-[#9caaba] text-sm">
              （小規模会社サイト・準備中）
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#0a2a52] mb-2">
                小規模企業・事務所（架空サイト）
              </h3>
              <p className="text-[#4a5768] text-sm leading-relaxed">
                会社概要やサービス内容を整理し、分かりやすく伝わる構成で制作予定です。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
