let analyticsLoaded = false;
let scriptElement: HTMLScriptElement | null = null;

export function loadAnalytics(domain: string) {
  if (!domain || analyticsLoaded) {
    return;
  }

  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = domain;
  script.src = "https://plausible.io/js/script.js";
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
