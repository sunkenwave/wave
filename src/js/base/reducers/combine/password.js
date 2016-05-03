import { RecoverPass, ChangeForgottenPass } from '../../actions/password';

export function recoverPass(state = {
  changePass: null,
  error: null,
}, action) {
  switch (action.type) {
    case RecoverPass.RECOVER_PASS_SUCCESS:
      return Object.assign({}, state, {
        changePass: true,
        error: null,
      });
    case RecoverPass.RECOVER_PASS_FAILURE:
      return Object.assign({}, state, {
        changePass: null,
        error: action.error,
      });
    case RecoverPass.RECOVER_PASS_RESET:
      return Object.assign({}, state, {
        changePass: null,
        error: null,
      });
    default:
      return state;
  }
}

export function changeForgottenPass(state = {
  save: false,
  error: false,
}, action) {
  switch (action.type) {
    case ChangeForgottenPass.CHANGE_FORGOTTEN_PASS_SEND:
      return Object.assign({}, state, {
        save: false,
        error: false,
      });
    case ChangeForgottenPass.CHANGE_FORGOTTEN_PASS_SUCCESS:
      return Object.assign({}, state, {
        save: action.save,
        error: false,
      });
    case ChangeForgottenPass.CHANGE_FORGOTTEN_PASS_FAILURE:
      return Object.assign({}, state, {
        save: false,
        error: true,
      });
    default:
      return state;
  }
}
