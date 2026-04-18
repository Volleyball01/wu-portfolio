function setLanguage(lang) {
  const dict = i18n[lang] || i18n.en;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  localStorage.setItem("site-lang", lang);
}

function detectInitialLanguage() {
  const saved = localStorage.getItem("site-lang");
  if (saved && i18n[saved]) return saved;

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith("zh")) return "zh";
  if (browserLang.startsWith("ja")) return "ja";
  return "en";
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(detectInitialLanguage());
});