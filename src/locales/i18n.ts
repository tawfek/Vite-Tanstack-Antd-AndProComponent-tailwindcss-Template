import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";

// Load translations from local JSON files
const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

// Detect saved language or device language
const storedLang = localStorage.getItem("app_lang");
const defaultLang =
  storedLang || (navigator.language.startsWith("ar") ? "ar" : "en");

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLang,
  cleanCode: true,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  react: { useSuspense: true }, // enable Suspense fallback in React
});

export default i18n;
