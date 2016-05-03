import i18next from 'i18next';
import i18nCrystalRu from '../../../../localization/ru.json';
import i18nCrystalEn from '../../../../localization/en.json';

const lang = window.data.lang;

i18next
  .init({
    load: 'all',
    fallbackLng: lang,
    lng: lang,
    keySeparator: false,
    nsSeparator: false,
    returnEmptyString: false,
    pluralSeparator: false,
    contextSeparator: false,
    resources: {
      ru: {
        translation: i18nCrystalRu,
      },
      en: {
        translation: i18nCrystalEn,
      },
    },
  });

export default i18next;
