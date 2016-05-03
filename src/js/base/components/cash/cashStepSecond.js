import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { Pay } from './pay';

import { choosePaymentSystem } from '../../actions/cash';
import { fetchPaymentSystem } from '../../actions/payments';

class CashStepSecond extends Component {
  componentWillMount() {
    if (!this.props.deposit) {
      this.props.dispatch(routeActions.push('/cash'));
      this.render = () => false;
    } else {
      this.props.dispatch(fetchPaymentSystem());
    }
  }

  nextStep(code) {
    this.props.dispatch(choosePaymentSystem(code));
    this.props.dispatch(routeActions.push('/cash_pay'));
  }

  render() {
    const { currency, paymentSystem } = this.props;
    let payments;

    if (paymentSystem) {
      payments = paymentSystem.map((pay, i) => {
        const payment = pay.attributes;
        const cb = () => this.nextStep(payment.code);
        const propsPayment = {
          currency,
          code: payment.code,
          name: payment.name,
        };
        return <Pay {...propsPayment} key={i} cb={cb} />;
      });
    }

    return (
      <div className="blue-section">
        <div className="cashier-method">
          {payments}
        </div>
      </div>
    );
  }
}

CashStepSecond.propTypes = {
  dispatch: PropTypes.func,
  deposit: PropTypes.object,
  currency: PropTypes.string,
  paymentSystem: PropTypes.array,
};

const select = (state) => ({
  currency: state.authorization.user.currency.toLowerCase(),
  paymentSystem: state.paymentSystem.list,
  deposit: state.creditingOfFunds.deposit,
});

export default connect(select)(CashStepSecond);
