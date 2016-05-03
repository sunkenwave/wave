import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const CashTD = (props) => {
  const { currency, amount, refillAmount, choose, percents, index } = props;

  const propsInput = {
    id: `cashier-payment-${amount}`,
    name: 'cashier-payment',
    type: 'radio',
    value: index,
    className: 'hidden-radio-input',
  };

  return (
    <div className="cashier-table--row">
      <div className="cashier-table--checker">
        <input {...propsInput} onClick={choose} />
        <div className="radio-checker">
          <span></span>
          <label htmlFor={`cashier-payment-${amount}`}></label>
        </div>
        <span className="cashier-table--sum">{`${amount} ${currency}`}</span>
        <label className="cashier-table--border" htmlFor={`cashier-payment-${amount}`}></label>
        <span className="cashier-table--bonus">{`+ ${percents}%`}</span>
      </div>
      <span className="cashier-table--equality">=</span>
      <span className="cashier-table--output-sum">{`${refillAmount} ${currency}`}</span>
    </div>
  );
};

CashTD.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.number,
  refillAmount: PropTypes.number,
  choose: PropTypes.func,
  percents: PropTypes.number,
  index: PropTypes.number,
};

const select = (state) => ({
  currency: state.authorization.user.currency,
});

export default connect(select)(CashTD);
