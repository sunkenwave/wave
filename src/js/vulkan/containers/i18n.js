import i18next from 'i18next';
import i18nVulkanRu from '../../../../localization/vulkancasino/ru.json';

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
        translation: i18nVulkanRu,
      },
    },
  });

export default i18next;
