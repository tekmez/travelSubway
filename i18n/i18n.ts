import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateTr from "@/locales/tr.json";
import translateEn from "@/locales/en.json";
import translateDe from "@/locales/de.json";
import translateRu from "@/locales/ru.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
const resources = {
  en: { translation: translateEn },
  tr: { translation: translateTr },
  de: { translation: translateDe },
  ru: { translation: translateRu },
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem("language");

  if (!savedLanguage) {
    savedLanguage = Localization.locale;
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
