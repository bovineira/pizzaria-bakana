"use client";

import { useCallback, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const WHATSAPP_PHONE = "5571996102008";
const WHATSAPP_MESSAGE = "Quero fazer um pedido";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
  );
}

function trackSubscribe() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Subscribe");
  }
}

export function WhatsAppLanding() {
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openWhatsApp = useCallback(() => {
    trackSubscribe();

    const text = encodeURIComponent(WHATSAPP_MESSAGE);
    const httpsUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
    const appUrl = `whatsapp://send?phone=${WHATSAPP_PHONE}&text=${text}`;

    let appLikelyOpened = false;
    const markLikelyOpened = () => {
      appLikelyOpened = true;
    };

    window.addEventListener("blur", markLikelyOpened, { passive: true });

    window.location.href = appUrl;

    if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
    fallbackTimer.current = setTimeout(() => {
      window.removeEventListener("blur", markLikelyOpened);
      if (!appLikelyOpened) {
        window.location.href = httpsUrl;
      }
    }, 1000);
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black">
      <header
        className="shrink-0 border-b border-emerald-950/50 bg-emerald-900 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
        role="banner"
      >
        <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-orange-500 sm:text-sm">
          A PARTIR DAS 18:00
        </p>
      </header>

      <main
        className="relative flex min-h-[100dvh] flex-col items-center justify-start bg-black bg-[url('/bg-pizzabakana.webp')] bg-cover bg-[50%_42%] bg-no-repeat px-6 pb-16 pt-4 text-center sm:pt-5 sm:pb-20 md:justify-center md:bg-bottom md:py-16 md:pb-20"
        aria-label="Pedir pelo WhatsApp"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/55 to-transparent to-[55%]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/90 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 flex max-w-lg flex-col items-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500/90">
            Pizza Bakana
          </p>
          <h1 className="mt-4 max-w-md text-balance text-3xl font-semibold text-white sm:text-4xl">
            Pedir pelo WhatsApp
          </h1>
          <p className="mt-4 max-w-sm text-pretty text-gray-200">
            Toque no botão para abrir o WhatsApp com sua mensagem pronta. Se o
            app não abrir, usamos o link oficial{" "}
            <span className="text-white underline decoration-white/30">
              wa.me
            </span>{" "}
            automaticamente.
          </p>

          <button
            type="button"
            onClick={openWhatsApp}
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-10 py-5 text-base font-bold tracking-wide text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] transition hover:bg-[#20BD5A] hover:shadow-[0_6px_32px_rgba(37,211,102,0.55)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
          >
            <WhatsAppGlyph className="size-8 shrink-0" />
            Conversar no WhatsApp
          </button>

          <p className="mt-8 max-w-xs text-xs leading-relaxed text-gray-400">
            Em alguns apps (como o Instagram), o sistema pode pedir para abrir
            no navegador ou no WhatsApp — escolha o WhatsApp para ir direto ao
            número.
          </p>
        </div>
      </main>
    </div>
  );
}
