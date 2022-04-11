// guide for setting up translations https://dev.to/ramonak/react-native-internationalization-with-i18next-568n

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en, fr, es, man } from "./";

const resources = {
	en: {
		translation: en
	},
	fr: {
		translation: fr
	},
	es: {
		translation: es
	},
	man: {
		translation: man
	}
};

i18n.use(initReactI18next).init({
	compatibilityJSON: "v3",
	resources,
	//language to use if translations in user language are not available
	fallbackLng: "en",
	interpolation: {
		escapeValue: false // not needed for react!!
	}
});

export default i18n;
