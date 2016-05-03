export const CreditingOfFunds = {
  CHOOSE_DEPOSIT: 'CHOOSE_DEPOSIT',
  CHOOSE_PAYMENT_SYSTEM: 'CHOOSE_PAYMENT_SYSTEM',
  CLEAR_CREDITING_OF_FUNDS: 'CLEAR_CREDITING_OF_FUNDS',
};

export function chooseDeposit(deposit) {
  return {
    type: CreditingOfFunds.CHOOSE_DEPOSIT,
    deposit,
  };
}

export function choosePaymentSystem(payment) {
  return {
    type: CreditingOfFunds.CHOOSE_PAYMENT_SYSTEM,
    payment,
  };
}

export function clearCreditingOfFunds() {
  return { type: CreditingOfFunds.CLEAR_CREDITING_OF_FUNDS };
}
