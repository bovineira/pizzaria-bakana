"use client";

import { LandingHero } from "@/components/LandingHero";
import { ShoppingBag } from "lucide-react";
import { useCallback } from "react";

/** UUID do restaurante na URL do iFood (último segmento do path). */
const IFOOD_RESTAURANT_ID = "fc4b2284-68d5-4830-be0a-63c661d9c47d";

const IFOOD_WEB_URL =
  "https://www.ifood.com.br/delivery/lauro-de-freitas-ba/pizzaria-bakana-vilas-do-atlantico/fc4b2284-68d5-4830-be0a-63c661d9c47d?utm_medium=share";

/** Deep link documentado para abrir o app direto no restaurante (ver gist iFood / docs de tráfego). */
const IFOOD_APP_URL = `ifood://restaurant/${IFOOD_RESTAURANT_ID}`;

function isMobileUserAgent(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

export default function IfoodPage() {
  const handleCtaClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (isMobileUserAgent()) {
        let appLikelyOpened = false;
        const markLikelyOpened = () => {
          appLikelyOpened = true;
        };

        window.addEventListener("blur", markLikelyOpened, { passive: true });
        window.location.href = IFOOD_APP_URL;

        window.setTimeout(() => {
          window.removeEventListener("blur", markLikelyOpened);
          if (!appLikelyOpened) {
            window.location.href = IFOOD_WEB_URL;
          }
        }, 1000);
        return;
      }

      window.open(IFOOD_WEB_URL, "_blank", "noopener,noreferrer");
    },
    [],
  );

  return (
    <LandingHero
      ctaLabel="PEDIR NO IFOOD"
      ctaHref={IFOOD_WEB_URL}
      ctaIcon={ShoppingBag}
      onCtaClick={handleCtaClick}
    />
  );
}
