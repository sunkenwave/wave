import { wrapFetch } from './helpers';

export const LoadResponsibleRules = {
  LOAD_RESPONSIBLE_RULES_SUCCESS: 'LOAD_RESPONSIBLE_RULES_SUCCESS',
  LOAD_RESPONSIBLE_RULES_FAILURE: 'LOAD_RESPONSIBLE_RULES_FAILURE',
};

export function loadResponsibleRulesSuccess(textPage, path) {
  return {
    type: LoadResponsibleRules.LOAD_RESPONSIBLE_RULES_SUCCESS,
    path,
    textPage,
  };
}

export function loadResponsibleRulesFailure(error, path) {
  return {
    type: LoadResponsibleRules.LOAD_RESPONSIBLE_RULES_FAILURE,
    path,
    error,
  };
}

export function loadResponsibleRules(path) {
  return function funcLoadResponsibleRules(dispatch) {
    const handler = {};

    handler.path = `page/${path}`;

    handler.success = function funcSuccess(data) {
      dispatch(loadResponsibleRulesSuccess(data.data.attributes, path));
    };
    handler.failure = function funcFailure(error) {
      dispatch(loadResponsibleRulesFailure(error));
    };

    wrapFetch(dispatch, handler);
  };
}
