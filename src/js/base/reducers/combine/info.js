import { LoadResponsibleRules } from '../../actions/info';

export function loadResponsibleRules(state = {}, action) {
  switch (action.type) {
    case LoadResponsibleRules.LOAD_RESPONSIBLE_RULES_SUCCESS:
      return { [action.path]: Object.assign({}, state[action.path], {
        [action.lang]: {
          textPage: action.textPage,
          error: false,
        },
      }),
      };
    case LoadResponsibleRules.LOAD_RESPONSIBLE_RULES_FAILURE:
      return { [action.path]: Object.assign({}, state[action.path], {
        [action.lang]: {
          textPage: false,
          error: true,
        },
      }),
      };
    default:
      return state;
  }
}
