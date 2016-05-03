import { LoadResponsibleRules } from '../../actions/info';

export function loadResponsibleRules(state = {}, action) {
  switch (action.type) {
    case LoadResponsibleRules.LOAD_RESPONSIBLE_RULES_SUCCESS:
      return Object.assign({}, state, {
        [action.path]: {
          textPage: action.textPage,
          error: false,
        },
      });
    case LoadResponsibleRules.LOAD_RESPONSIBLE_RULES_FAILURE:
      return Object.assign({}, state, {
        [action.path]: {
          textPage: false,
          error: true,
        },
      });
    default:
      return state;
  }
}
