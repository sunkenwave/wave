import i18next from 'i18next';
import i18nVulkanRu from '../../../../localization/vulkancasino/ru.json';
import i18nCrystalRu from '../../../../localization/crystalcasino/ru.json';
import i18nCrystalEn from '../../../../localization/crystalcasino/en.json';

const project = window.data.project;
const lang = window.data.lang;

if (project === 'crystalcasino') {
  i18next
    .init({
      load: 'all',
      lng: lang,
      fallbackLng: lang,
      keySeparator: '',
      nsSeparator: ': "',
      returnEmptyString: false,
      pluralSeparator: '...,.,.,',
      contextSeparator: '...,.,.,',
      resources: {
        ru: {
          translation: i18nCrystalRu,
        },
        en: {
          translation: i18nCrystalEn,
        },
      },
    });
} else {
  i18next
    .init({
      load: 'all',
      lng: lang,
      fallbackLng: lang,
      keySeparator: '',
      nsSeparator: ': "',
      returnEmptyString: false,
      pluralSeparator: '...,.,.,',
      contextSeparator: '...,.,.,',
      resources: {
        ru: {
          translation: i18nVulkanRu,
        },
      },
    });
}

export default i18next;
