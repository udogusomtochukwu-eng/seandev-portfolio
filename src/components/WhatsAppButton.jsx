import { FaWhatsapp } from "react-icons/fa6";
import { WHATSAPP_URL } from "../data/site.js";

/**
 * WhatsAppButton — floating chat shortcut, fixed bottom-right.
 *
 * The number lives in src/data/site.js as WHATSAPP_NUMBER (placeholder)
 * in international format, digits only — replace it there and this link
 * updates automatically.
 *
 * Deliberately quiet: one soft entrance, a gentle hover scale, and a
 * hover/focus tooltip — no continuous pulsing.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      style={{ "--rise-delay": "900ms" }}
      className="group bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 fixed right-[max(1.25rem,env(safe-area-inset-right))] flex justify-center items-center bg-[#25D366] hover:bg-[#1fc05c] shadow-black/40 shadow-lg rounded-full outline-none focus-visible:ring-[#25D366] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink size-12 sm:size-[52px] text-white hover:scale-105 transition-all animate-rise duration-300"
    >
      <FaWhatsapp className="size-6" aria-hidden="true" />

      {/* Subtle tooltip — hover and keyboard focus */}
      <span
        aria-hidden="true"
        className="hidden sm:block right-full absolute bg-ink-soft opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 mr-3 px-2.5 py-1.5 border border-white/10 rounded-lg font-mono text-[11px] text-slate-200 whitespace-nowrap transition-opacity duration-300 pointer-events-none"
      >
        Chat with me
      </span>
    </a>
  );
}
