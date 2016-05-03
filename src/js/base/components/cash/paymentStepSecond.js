import React from 'react';

const propsPhone = {
  ref: 'pass',
  type: 'number',
  className: 'input-text',
  id: 'payment-phone',
  placeholder: __('Phone number'),
};

const propsSum = {
  ref: 'pass',
  type: 'number',
  className: 'input-text',
  id: 'payment-phone',
  placeholder: __('Phone number'),
};

export const PaymentStepSecond = () => (
  <div className="blue-section cashier-payment">
    <div className="cashier-method--box single">
      <img src={`/static/mobile/images/base/cashier-payment1.png`} />
    </div>
    <a href="#" className="default-container__title cashier-conclusion--url">
      {__('Change payment method')}
    </a>
    <div className="registration--form-box">
      <input {...propsPhone} />
    </div>
    <div className="registration--form-box">
      <input {...propsSum} />
      <label htmlFor="payment-total" className="input-label">руб</label>
    </div>
    <div className="checkbox">
      <input type="checkbox" ref="checkbox" className="hidden-checkbox" id="payment-save-data" />
      <label htmlFor="payment-save-data" className="gray-msg checkbox--main-label">
        <i className="icon--checkbox"></i>
        <span>{__('Save data')}</span>
      </label>
    </div>
    <div className="btn btn--primary">{__('Withdraw')}</div>
  </div>
);
