import { I18nManager } from "react-native";
import { findBestAvailableLanguage } from "react-native-localize";
import i18n from "i18n-js";

import en from "./locales/en";

i18n.translations = { en };
i18n.fallbacks = true;

const fallback = { languageTag: "en", isRTL: false };
const { languageTag, isRTL } =
  findBestAvailableLanguage(Object.keys(i18n.translations)) || fallback;

I18nManager.forceRTL(isRTL); // optional, you might not want to handle RTL
i18n.locale = languageTag;

export default i18n;

export const t = i18n.t.bind(i18n);
