import { wrapFetch } from './helpers';

export const LoadResponsibleRules = {
  LOAD_RESPONSIBLE_RULES_SUCCESS: 'LOAD_RESPONSIBLE_RULES_SUCCESS',
  LOAD_RESPONSIBLE_RULES_FAILURE: 'LOAD_RESPONSIBLE_RULES_FAILURE',
};

export function loadResponsibleRulesSuccess(textPage, path, lang) {
  return {
    type: LoadResponsibleRules.LOAD_RESPONSIBLE_RULES_SUCCESS,
    path,
    textPage,
    lang,
  };
}

export function loadResponsibleRulesFailure(error, path, lang) {
  return {
    type: LoadResponsibleRules.LOAD_RESPONSIBLE_RULES_FAILURE,
    path,
    error,
    lang,
  };
}

export function loadResponsibleRules(path, lang) {
  return function funcLoadResponsibleRules(dispatch) {
    const handler = {};

    handler.path = `page/${path}`;

    handler.success = function funcSuccess(data) {
      dispatch(loadResponsibleRulesSuccess(data.data.attributes, path, lang));
    };
    handler.failure = function funcFailure(error) {
      dispatch(loadResponsibleRulesFailure(error, path, lang));
    };

    wrapFetch(dispatch, handler);
  };
}
