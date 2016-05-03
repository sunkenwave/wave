import { wrapFetch } from './helpers';

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
    dispatch(languageSuccess(data.data.attributes.lang));
    location.replace(data.data.attributes['redirect-url']);
  };

  wrapFetch(dispatch, handler);
};
