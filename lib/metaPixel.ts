declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type SubscribeTrackingParams = {
  contentName: string;
  contentCategory?: string;
};

/** Dispara Subscribe + Lead para otimização de conversão no Meta Ads. */
export function trackIfoodSubscribe({
  contentName,
  contentCategory = "ifood",
}: SubscribeTrackingParams): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  const eventParams = {
    content_name: contentName,
    content_category: contentCategory,
    currency: "BRL",
  };

  window.fbq("track", "Subscribe", eventParams);
  window.fbq("track", "Lead", eventParams);
}
