import { wrapFetch } from './helpers';
import i18next from 'i18next';

export const Language = {
  LANGUAGE_SEND: 'LANGUAGE_SEND',
  LANGUAGE_SUCCESS: 'LANGUAGE_SUCCESS',
  LANGUAGE_FAILURE: 'LANGUAGE_FAILURE',
};

export function languageSuccess(lang) {
  return {
    type: Language.LANGUAGE_SUCCESS,
    lang,
  };
}

export const fetchLanguage = (lang) => (dispatch) => {
  const handler = {};
  handler.postData = lang;
  handler.path = 'lang/set';

  handler.success = (data) => {
    i18next.changeLanguage(data.data.attributes.lang);
    dispatch(languageSuccess(data.data.attributes.lang));
    window.data.lang = data.data.attributes.lang;
  };

  handler.failure = () => (
    false
  );

  wrapFetch(dispatch, handler);
};
