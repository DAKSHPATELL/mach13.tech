const DEFAULT_SCRIPT_SRC = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT ?? "https://plausible.io/js/script.js";
const DEFAULT_API_HOST = process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST;

let analyticsLoaded = false;
let scriptElement: HTMLScriptElement | null = null;

type AnalyticsConfig = {
  domain: string;
  scriptSrc?: string;
  apiHost?: string;
};

export function loadAnalytics({ domain, scriptSrc, apiHost }: AnalyticsConfig) {
  if (!domain || analyticsLoaded) {
    return;
  }

  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = domain;

  const resolvedScriptSrc = scriptSrc ?? DEFAULT_SCRIPT_SRC;
  const resolvedApiHost = apiHost ?? DEFAULT_API_HOST;

  if (resolvedApiHost) {
    script.dataset.api = resolvedApiHost;
  }

  script.src = resolvedScriptSrc;
  script.id = "plausible-script";
  document.head.appendChild(script);
  analyticsLoaded = true;
  scriptElement = script;
}

export function unloadAnalytics() {
  if (scriptElement) {
    scriptElement.remove();
    scriptElement = null;
  }
  analyticsLoaded = false;
}
