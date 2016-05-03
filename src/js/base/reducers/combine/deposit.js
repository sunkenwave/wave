import { Deposit } from '../../actions/deposit';

export function deposit(state = {
  list: null,
  error: null,
}, action) {
  switch (action.type) {
    case Deposit.DEPOSIT_SEND:
      return state;
    case Deposit.DEPOSIT_SUCCESS:
      return Object.assign({}, state, {
        list: action.deposit,
      });
    case Deposit.DEPOSIT_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });
    default:
      return state;
  }
}
