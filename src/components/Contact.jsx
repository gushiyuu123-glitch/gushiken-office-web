// src/components/Contact.jsx

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkjyvly";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    setStatus(res.ok ? "success" : "error");
  };

  return (
    <section className="py-32 bg-white" id="contact">
      <div className="max-w-3xl mx-auto px-6 md:px-12">

        {/* 見出し */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2a52] text-center mb-10">
          お問い合わせ
          <span className="text-[#003b8b]">（無料相談）</span>
        </h2>

        <p className="text-center text-[#4a5768] mb-14 leading-relaxed text-[15.5px]">
          まだ依頼が確定していない段階でも問題ありません。
          <br />
          「まずは相談だけしたい」という方も、お気軽にご連絡ください。  
          通常は<strong>24時間以内に返信</strong>いたします。
        </p>

        {/* フォーム */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#f7f9fc] border border-[#e5eaf0] rounded-2xl p-10 shadow-sm space-y-8"
        >

          {/* お名前 */}
          <div>
            <label className="block text-sm font-semibold text-[#0a2a52] mb-1.5">
              お名前（必須）
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl border border-[#d5dce6] bg-white
                         focus:border-[#003b8b] focus:ring-2 focus:ring-[#003b8b]/20 outline-none transition"
            />
          </div>

          {/* メール */}
          <div>
            <label className="block text-sm font-semibold text-[#0a2a52] mb-1.5">
              メールアドレス（必須）
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-[#d5dce6] bg-white
                         focus:border-[#003b8b] focus:ring-2 focus:ring-[#003b8b]/20 outline-none transition"
            />
          </div>

          {/* 電話番号 */}
          <div>
            <label className="block text-sm font-semibold text-[#0a2a52] mb-1.5">
              電話番号（任意）
            </label>
            <input
              type="tel"
              name="tel"
              placeholder="ハイフンなしで入力"
              className="w-full px-4 py-3 rounded-xl border border-[#d5dce6] bg-white
                         focus:border-[#003b8b] focus:ring-2 focus:ring-[#003b8b]/20 outline-none transition"
            />
          </div>

          {/* ご相談内容 */}
          <div>
            <label className="block text-sm font-semibold text-[#0a2a52] mb-1.5">
              ご相談内容（必須）
            </label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full px-4 py-3 rounded-xl border border-[#d5dce6] bg-white
                         focus:border-[#003b8b] focus:ring-2 focus:ring-[#003b8b]/20 outline-none transition"
              placeholder={`例：事務所サイトの制作相談 / 料金プランの確認 / 納期の目安 など`}
            ></textarea>
          </div>

          {/* ボタン */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#003b8b] text-white py-4 rounded-xl text-lg font-semibold
                       hover:bg-[#002f6b] transition shadow-md disabled:opacity-60"
          >
            {status === "loading" ? "送信中…" : "送信する"}
          </button>

          {/* 完了メッセージ */}
          {status === "success" && (
            <p className="text-center text-green-600 font-semibold mt-4 animate-fadeIn">
              送信が完了しました。確認後、折り返しご連絡いたします。
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-600 font-semibold mt-4">
              エラーが発生しました。お手数ですが再度お試しください。
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
