"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const pulseTransition = {
  duration: 2.2,
  repeat: Infinity,
  ease: [0.45, 0, 0.55, 1] as const,
};

const shimmerTransition = {
  duration: 2.8,
  repeat: Infinity,
  ease: "linear" as const,
};

export default function Home() {
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

      <section
        className="relative flex min-h-[100dvh] flex-col items-center justify-start bg-black bg-[url('/bg-pizzabakana.webp')] bg-cover bg-[50%_42%] bg-no-repeat px-6 pb-16 pt-16 text-center sm:bg-[50%_48%] sm:pt-20 md:bg-bottom md:justify-center md:py-12 md:pb-20"
        aria-label="Apresentação"
      >
        {/* Leitura no topo: gradiente forte no alto, suave no meio, transparente embaixo para as pizzas */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/55 to-transparent to-[55%]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/90 to-transparent" aria-hidden />

        <div className="relative z-10 flex max-w-3xl flex-col items-center md:mt-[8vh] lg:mt-[10vh]">
          <motion.h1
            className="font-[family-name:var(--font-playfair)] text-4xl font-extrabold leading-[1.06] text-white uppercase tracking-[0.06em] sm:text-5xl sm:tracking-[0.08em] md:text-6xl md:tracking-[0.06em] lg:text-7xl lg:tracking-[0.05em]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            A <span className="text-orange-500">MELHOR</span> DA CIDADE
          </motion.h1>

          <motion.h2
            className="mt-6 max-w-md text-pretty font-sans text-base font-light leading-relaxed text-gray-200 sm:text-lg md:mt-8 md:text-xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Clique abaixo agora para acessar o nosso cardápio
          </motion.h2>

          <motion.div
            className="mb-8 mt-10 md:mb-12 md:mt-12"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="https://app.cardapioweb.com/pizza_bakana"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex min-h-[3.5rem] items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-b from-orange-500 to-orange-600 px-10 py-5 text-base font-bold uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset] sm:min-h-[4rem] sm:gap-3.5 sm:px-14 sm:py-6 sm:text-lg md:px-16 md:py-6 md:text-xl"
              style={{
                boxShadow:
                  "0 0 32px rgba(249, 115, 22, 0.58), 0 0 64px rgba(234, 88, 12, 0.32), 0 10px 28px rgba(0, 0, 0, 0.45)",
              }}
              animate={{ scale: [1, 1.035, 1] }}
              transition={pulseTransition}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shimmer / laminado */}
              <span
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
                aria-hidden
              >
                <motion.span
                  className="absolute inset-y-0 block w-[42%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: "-60%" }}
                  animate={{ x: ["-60%", "220%"] }}
                  transition={shimmerTransition}
                />
              </span>
              <span className="relative z-10">ACESSAR O CARDÁPIO</span>
              <Menu
                className="relative z-10 size-6 shrink-0 sm:size-7 md:size-8"
                strokeWidth={2.5}
                aria-hidden
              />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
