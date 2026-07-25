import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../assets/locales/en";
import de from "../assets/locales/de";
import nl from "../assets/locales/nl";
import dk from "../assets/locales/dk";
import sw from "../assets/locales/sw";
import no from "../assets/locales/no";
import fr from "../assets/locales/fr";
import ar from "../assets/locales/ar";

import LanguageDetector from "i18next-browser-languagedetector";
import { appConfig } from "../configs/app.config";

const i18nextInstance = i18next;

i18nextInstance.use(initReactI18next);

i18nextInstance.use(LanguageDetector);

const available_languages = { en, de, ar, sw, nl, dk, no, fr };

const { languages } = appConfig;

const filterdLanguages = Object.keys(available_languages)
  .filter((key) => languages.includes(key))
  .reduce((obj, key) => {
    obj[key] = (available_languages as any)[key];
    return obj;
  }, {} as any);

const applyDocumentLanguage = (language: string) => {
  const normalizedLanguage = language?.replace(/-.*/, "") || "en";
  document.documentElement.lang = normalizedLanguage;
  document.documentElement.dir = normalizedLanguage === "ar" ? "rtl" : "ltr";
};

i18nextInstance.init({
  resources: filterdLanguages,
});

applyDocumentLanguage(i18nextInstance.language);
i18nextInstance.on("languageChanged", applyDocumentLanguage);

export { i18next };
