"use client";

import { LandingHero } from "@/components/LandingHero";
import {
  COMBO_DISH_ID,
  COMBO_IFOOD_WEB_URL,
  IFOOD_RESTAURANT_ID,
  getIfoodAppUrl,
  openIfoodLink,
} from "@/lib/ifood";
import { trackIfoodSubscribe } from "@/lib/metaPixel";
import { ShoppingBag } from "lucide-react";
import { useCallback } from "react";

const IFOOD_APP_URL = getIfoodAppUrl(IFOOD_RESTAURANT_ID, COMBO_DISH_ID);

export default function ComboIfoodPage() {
  const handleCtaClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      trackIfoodSubscribe({
        contentName: "Combo Exclusivo iFood",
        contentCategory: "combo-ifood",
      });

      openIfoodLink(COMBO_IFOOD_WEB_URL, IFOOD_APP_URL);
    },
    [],
  );

  return (
    <LandingHero
      headline={
        <>
          GARANTA O{" "}
          <span className="text-orange-500">COMBO EXCLUSIVO</span>
        </>
      }
      subheadline="Clique no botão abaixo e peça no iFood"
      ctaLabel="PEDIR COMBO NO IFOOD"
      ctaHref={COMBO_IFOOD_WEB_URL}
      ctaIcon={ShoppingBag}
      onCtaClick={handleCtaClick}
    />
  );
}
