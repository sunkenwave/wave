import { Language } from '../../actions/locale';

const initialLang = window.data.lang;

export function locale(state = initialLang, action) {
  switch (action.type) {
    case Language.LANGUAGE_SUCCESS :
      return action.lang;
    default:
      return state;
  }
}
