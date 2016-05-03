import { mergeData } from '../helpers';

import { Authorization } from '../../actions/authorization';
import { Logout } from '../../actions/logout';
import { Registration } from '../../actions/registration';
import { WebSocketMessages } from '../../actions/webSocket';
import { ChangeForgottenPass } from '../../actions/password';

const initialUser = window.data ? window.data.user : null;

export function authorization(state = {
  user: initialUser,
  error: null,
}, action) {
  switch (action.type) {
    case Authorization.AUTHORIZATION_SEND:
      return state;
    case Authorization.AUTHORIZATION_SUCCESS:
      return Object.assign({}, state, {
        user: action.user,
      });
    case Authorization.AUTHORIZATION_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });
    case Authorization.AUTHORIZATION_RESET:
      return Object.assign({}, state, {
        error: null,
      });
    case Logout.LOGOUT_SEND:
      return state;
    case Logout.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        user: null,
      });
    case Logout.LOGOUT_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });
    case Registration.REGISTRATION_SEND:
      return state;
    case Registration.REGISTRATION_SUCCESS:
      return Object.assign({}, state, {
        user: action.user,
      });
    case Registration.REGISTRATION_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });
    case Registration.REGISTRATION_RESET:
      return Object.assign({}, state, {
        error: null,
      });
    case WebSocketMessages.WS_MESSAGE_BALANCE:
      return mergeData(state, action.msg);
    case ChangeForgottenPass.CHANGE_FORGOTTEN_PASS_SUCCESS:
      return Object.assign({}, state, {
        user: action.user,
      });
    default:
      return state;
  }
}
