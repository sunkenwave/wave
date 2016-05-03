import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routeActions } from 'redux-simple-router';

import BalanceContainer from '../templates/balanceContainer';

import { clearCreditingOfFunds } from '../../actions/cash';

class CashStepThird extends Component {
  constructor(props) {
    super(props);

    this.validatePhone = this.validatePhone.bind(this);
    this.removeError = this.removeError.bind(this);
    this.typePhone = this.typePhone.bind(this);

    this.state = {
      phone: null,
      error: false,
    };
  }

  componentWillMount() {
    const { deposit, payment } = this.props.creditingOfFunds;
    if (!deposit || !payment) {
      this.props.dispatch(routeActions.push('/cash'));
      this.render = () => false;
    }
  }

  removeError() {
    this.setState({ error: false });
    this.refs.phone.value = null;
  }

  typePhone() {
    let phone = this.refs.phone.value;
    if (phone[0] !== '+') {
      phone = `+${phone}`;
    }
    this.setState({ phone });
  }

  validatePhone(e) {
    const { payment } = this.props.creditingOfFunds;
    const regex = /^\+[0-9]{11,13}$/;
    const phone = this.state.phone;
    const test = regex.test(phone);

    if (payment === 'qiwi') {
      if (phone && test) {
        this.submit();
      } else {
        e.preventDefault();
        this.setState({ error: true });
      }
    } else {
      this.submit();
    }
  }

  submit() {
    this.props.dispatch(clearCreditingOfFunds());
    this.props.dispatch(routeActions.push('/'));
  }

  render() {
    const { currency } = this.props;
    const { deposit, payment } = this.props.creditingOfFunds;

    const refillAmount = deposit.refillAmount || deposit.amount;
    const amount = deposit.amount;
    const rejection = deposit.refillAmount ? null : 'special_offers';

    const errorMsg = <span className="error-msg">{__('Put the correct number')}</span>;
    const errorBorder = this.state.error ? 'error' : '';

    const propsInput = {
      ref: 'phone',
      type: 'text',
      className: `input-text center ${errorBorder}`,
      id: 'login--form-input--pass',
      placeholder: __('PHONE'),
    };
    const input = <input {...propsInput} onFocus={this.removeError} onChange={this.typePhone} />;

    const error = this.state.error ? errorMsg : null;
    const inputPhone = (payment === 'qiwi') ? input : null;
    const sumName = __('Refill amount');
    const sum = `${sumName} ${refillAmount} ${currency.toUpperCase()}`;
    const bottomText = deposit.refillAmount ? sum : null;

    const propsBalanceContainer = {
      bottomText,
      name: 'cashier-balance',
      topTitle: __('Refill amount'),
      middleTitle: `${amount} ${currency.toUpperCase()}`,
      btnText: __('Change amount'),
      bottomTextColor: 'dark-green',
      url: 'true',
    };

    const src = `/static/mobile/images/base/payments/${currency}/${payment}.png`;
    const classBtn = 'btn btn--primary btn--align';

    return (
      <div className="blue-section cashier-conclusion">
        <div className="cashier-method--box single">
          <img src={src} />
        </div>
        <Link to="/cash_choose" className="default-container__title cashier-conclusion--url">
          {__('Change payment method')}
        </Link>
        {inputPhone}
        {error}
        <BalanceContainer {...propsBalanceContainer} />
        <form action="/cash/s2p/deposit/commit/" method="POST" target="_blank">
          <div style={{ display: 'none' }}>
            <input type="text" name="amount" defaultValue="custom" />
            <input type="text" name="custom_amount" defaultValue={amount} />
            <input type="text" name="customer_purse" defaultValue={this.state.phone} />
            <input type="text" name="customer_purse_save" defaultValue="on" />
            <input type="text" name="code" defaultValue={payment} />
            <input type="text" name="rejection" defaultValue={rejection} />
            <input type="text" name="coupon" defaultValue={null} />
          </div>
          <button type="submit" className={classBtn} onClick={this.validatePhone}>
            {__('pay')}
          </button>
        </form>
      </div>
    );
  }
}

CashStepThird.propTypes = {
  dispatch: PropTypes.func,
  creditingOfFunds: PropTypes.object,
  currency: PropTypes.string,
};

const select = (state) => ({
  currency: state.authorization.user.currency.toLowerCase(),
  creditingOfFunds: state.creditingOfFunds,
});

export default connect(select)(CashStepThird);
