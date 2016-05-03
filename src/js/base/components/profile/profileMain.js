import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchCoupon, checkCouponResetError } from '../../actions/coupon';

import StatusContainer from '../templates/statusContainer';

class ProfileMain extends Component {
  constructor(props) {
    super(props);
    this.clearError = this.clearError.bind(this);
    this.send = this.send.bind(this);
    this.state = {
      error: false,
    };
  }

  send(e) {
    e.preventDefault();
    const coupon = this.refs.coupon.value;

    const data = {
      data: {
        attributes: {
          coupon,
        },
        type: 'coupons',
      },
      meta: {
        _xsrf: this.props.xsrf,
      },
    };

    if (this.validation(coupon)) this.props.dispatch(fetchCoupon(data));
  }

  validation(coupon) {
    if (!coupon) {
      this.setState({ error: true });
      return false;
    }
    return true;
  }

  clearError() {
    this.setState({ error: false });
    this.props.dispatch(checkCouponResetError());
  }

  render() {
    const { user, errorServer } = this.props;
    const { error } = this.state;

    const margin = { marginTop: '-5px' };
    const errorMsg = errorServer || __('Enter the correct coupon`s number');
    const label = <span style={margin} className="error-msg">{errorMsg}</span>;
    const errorClass = (error || errorServer) ? 'error' : '';
    const errorLabel = (error || errorServer) ? label : null;


    const propsInput = {
      ref: 'coupon',
      type: 'text',
      maxLength: '10',
      className: `input-text center ${errorClass}`,
      id: 'promo-activate',
      placeholder: __('Enter coupon`s number'),
    };

    return (
      <div className="profile">
        <div className="blue-section">
          <StatusContainer />
        </div>
        <div className="blue-section--two-blocks">
          <div className="blue-section">
            <span className="gray-msg">{__('Cashier')}</span>
            <span className="small-text">
              {user.balance}
              <i className="icon--diagram"></i>
            </span>
          </div>
          <div className="blue-section">
            <span className="gray-msg">{__('Points')}</span>
            <span className="small-text">
              {user.cpoints}
              <i className="icon--circles"></i>
            </span>
          </div>
        </div>
{/* <div className="blue-section">
  <p className="double-text">Обменник<span className="gray-msg">Курс обмена 12:30</span></p>
  <div className="registration--form-box">
    <input type="number" className="input-text center" id="value-exchange" placeholder="1000"/>
  </div>
  <BalanceContainer name="exchange-cp" topTitle=" middleTitle="2500 руб" />
  <a className="btn btn--default" href="#">Обменять</a>
</div> */}
        <div className="blue-section">
          <p>{__('Activate your promo code')}</p>
          <div className="registration--form-box">
            <input {...propsInput} onFocus={this.clearError} />
          </div>
          {errorLabel}
          <a className="btn btn--default btn--align" href="#" onClick={this.send}>
            {__('Activate')}
          </a>
        </div>
      </div>
    );
  }
}

ProfileMain.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object,
  errorServer: PropTypes.string,
  xsrf: PropTypes.string,
};

const select = (state) => ({
  user: state.authorization.user,
  errorServer: state.coupon,
  xsrf: state.xsrf,
});

export default connect(select)(ProfileMain);
