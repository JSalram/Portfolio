import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./assets/translations/es.json";
import en from "./assets/translations/en.json";

const defaultLang = "es";
if (!sessionStorage.getItem("lang")) {
  sessionStorage.setItem("lang", defaultLang);
}

const resources = {
  es: {
    translation: es,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: sessionStorage.getItem('lang'),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
