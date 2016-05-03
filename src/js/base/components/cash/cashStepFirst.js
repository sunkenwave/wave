import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';

import BalanceContainer from '../templates/balanceContainer';
import CashTD from './cashTD';

import { chooseDeposit } from '../../actions/cash';
import { fetchDeposit } from '../../actions/deposit';

class CashStepFirst extends Component {
  constructor(props) {
    super(props);

    this.change = this.change.bind(this);
    this.choose = this.choose.bind(this);
    this.focus = this.focus.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

    this.state = {
      amount: 0,
      customAmount: '',
      percents: 0,
      refillAmount: 0,
      manualDeposit: false,
      error: 0,
      limit: this.props.currency.toLowerCase() === 'rub' ? 100 : 5,
    };
  }

  componentWillMount() {
    const { deposit } = this.props;

    if (!deposit) {
      this.props.dispatch(fetchDeposit());
    }
  }

  choose(e) {
    e.stopPropagation();
    const deposit = this.props.deposit[e.target.value];
    const refillAmount = deposit.amount + (deposit.amount * deposit.percents / 100);

    this.refs.manualDeposit.value = null;
    this.setState({
      refillAmount,
      percents: deposit.percents,
      amount: deposit.amount,
      manualDeposit: false,
      error: 0,
    });
  }

  focus(e) {
    e.stopPropagation();
    const val = e.target.value || 0;
    const regex = /^[0-9]+$/;
    const test = regex.test(val);

    this.setState({
      amount: (test ? val : 0),
      percents: 0,
      refillAmount: 0,
      manualDeposit: true,
      error: 0,
    });
  }

  handleFocus() {
    this.refs.manualDeposit.focus();
  }

  nextStep(e) {
    e.preventDefault();
    const amount = this.state.amount;
    const refillAmount = this.state.refillAmount;
    const manualDeposit = this.state.manualDeposit;

    const regex = /^[0-9]+$/;
    const test = regex.test(amount) && amount !== 0;

    if (test) {
      if (amount < this.state.limit) {
        this.setState({ error: 2 });
        return null;
      }
      this.props.dispatch(chooseDeposit({ amount, refillAmount, manualDeposit }));
      this.props.dispatch(routeActions.push('/cash_choose'));
    } else {
      this.setState({ error: 1 });
      return null;
    }

    return null;
  }

  change(e) {
    let val = e.target.value || '';

    if (e.target.value.length > e.target.maxLength) {
      val = e.target.value.slice(0, e.target.maxLength);
    }

    const regex = /^\d+$/;
    const test = regex.test(val);

    if (test) {
      this.setState({ amount: val, customAmount: val });
    } else {
      this.setState({ amount: 0, customAmount: '' });
    }
  }

  render() {
    const { deposit, currency } = this.props;
    let cashTDs;
    let errMsg;
    const errMsgStart = __('Not less than');
    const depositName = __('deposit');
    const bonusName = __('% bonus');

    if (deposit) {
      cashTDs = deposit.map((td, index) => {
        const refillAmount = td.amount + (td.amount * td.percents / 100);
        const props = {
          ...td,
          index,
          refillAmount,
        };

        return <CashTD {...props} key={index} choose={this.choose} />;
      });
    }

    switch (this.state.error) {
      case 1: errMsg = __('Put the number');
        break;
      case 2: errMsg = `${errMsgStart} ${this.state.limit} ${currency}`;
        break;
      default: errMsg = '';
        break;
    }

    const error = <span style={{ marginLeft: '10px' }} className="error-msg">{errMsg}</span>;
    const errorBorder = this.state.error ? 'error' : '';

    const middleTitleAmount = `${this.state.amount} ${currency}`;
    const middleTitleRefill = `${this.state.refillAmount} ${currency}`;
    const bottomText = `${this.state.amount} ${currency}. ${depositName} ` +
      `${this.state.percents} ${bonusName}`;

    const propsBalanceContainer = {
      name: 'cashier-balance',
      topTitle: __('Refill amount'),
      bottomTextColor: 'dark-green',
      middleTitle: this.state.manualDeposit ? middleTitleAmount : middleTitleRefill,
      bottomText: this.state.manualDeposit ? null : bottomText,
    };

    const propsInput = {
      type: 'number',
      maxLength: 8,
      max: 99999999,
      ref: 'manualDeposit',
      className: `input-text ${errorBorder}`,
      id: 'login--form-input--numbers',
      placeholder: __('Put the amount'),
    };

    const propsLabel = {
      className: 'cashier-table--border',
      htmlFor: 'cashier-payment-new',
    };

    const propsRadio = {
      type: 'radio',
      className: 'hidden-radio-input',
      checked: this.state.manualDeposit,
      id: 'cashier-payment-new',
      name: 'cashier-payment',
    };
    return (
      <div className="blue-section">
        <div className="cashier-table">
          <div className="cashier-table--head">
            <div className="group">
              <div>{__('Amount')}</div>
              <div>{__('Bonus')}</div>
            </div>
            <div>{__('To your account')}</div>
          </div>
          <div className="cashier-table--body">
            {cashTDs}
            <div className="cashier-table--row big">
              <div className="cashier-table--checker">
                <input {...propsRadio} />
                <div className="radio-checker">
                  <span></span>
                </div>
                <label {...propsLabel} onClick={this.handleFocus}>
                </label>
                <span className="cashier-table--sum">{__('Put another amount:')}</span>
              </div>
            </div>
            <input {...propsInput} onChange={this.change} onFocus={this.focus}
              value={this.state.customAmount}
            />
            {error}
          </div>
        </div>
        <a className="btn btn--primary btn--align" href="#" onClick={this.nextStep}>
          {__('Continue')}
        </a>
        <BalanceContainer {...propsBalanceContainer} />
      </div>
    );
  }
}

CashStepFirst.propTypes = {
  dispatch: PropTypes.func,
  deposit: PropTypes.array,
  currency: PropTypes.string,
};

const select = (state) => ({
  deposit: state.deposit.list,
  currency: state.authorization.user.currency,
});

export default connect(select)(CashStepFirst);
