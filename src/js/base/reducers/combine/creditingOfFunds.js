import { CreditingOfFunds } from '../../actions/cash';

export function creditingOfFunds(state = {
  deposit: null,
  payment: null,
}, action) {
  switch (action.type) {
    case CreditingOfFunds.CHOOSE_DEPOSIT:
      return Object.assign({}, state, {
        deposit: action.deposit,
      });
    case CreditingOfFunds.CHOOSE_PAYMENT_SYSTEM:
      return Object.assign({}, state, {
        payment: action.payment,
      });
    case CreditingOfFunds.CLEAR_CREDITING_OF_FUNDS:
      return {
        deposit: null,
        payment: null,
      };
    default:
      return state;
  }
}
