/** UUID do restaurante na URL do iFood (último segmento do path). */
export const IFOOD_RESTAURANT_ID = "fc4b2284-68d5-4830-be0a-63c661d9c47d";

export const COMBO_DISH_ID = "2dd9d90b-acc9-4bb8-91cd-8a50284b5e0b";

export const COMBO_IFOOD_WEB_URL =
  "https://www.ifood.com.br/delivery/lauro-de-freitas-ba/pizzaria-bakana-vilas-do-atlantico/fc4b2284-68d5-4830-be0a-63c661d9c47d?prato=2dd9d90b-acc9-4bb8-91cd-8a50284b5e0b";

export function isMobileUserAgent(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

/** Deep link para abrir o app no restaurante; inclui prato quando informado. */
export function getIfoodAppUrl(restaurantId: string, dishId?: string): string {
  if (dishId) {
    return `ifood://restaurant/${restaurantId}?prato=${dishId}`;
  }
  return `ifood://restaurant/${restaurantId}`;
}

/** Tenta abrir o app iFood no mobile; fallback para a URL web (com prato, se houver). */
export function openIfoodLink(webUrl: string, appUrl: string): void {
  if (isMobileUserAgent()) {
    let appLikelyOpened = false;
    const markLikelyOpened = () => {
      appLikelyOpened = true;
    };

    window.addEventListener("blur", markLikelyOpened, { passive: true });
    window.location.href = appUrl;

    window.setTimeout(() => {
      window.removeEventListener("blur", markLikelyOpened);
      if (!appLikelyOpened) {
        window.location.href = webUrl;
      }
    }, 1000);
    return;
  }

  window.open(webUrl, "_blank", "noopener,noreferrer");
}
