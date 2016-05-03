import React from 'react';

const propsInput = {
  ref: 'pass',
  type: 'number',
  className: 'input-text',
  id: 'payment-data-mouth',
  placeholder: __('DD'),
  max: 99,
};

export const PaymentStepSecondWithCard = () => (
  <div className="blue-section cashier-payment">
    <div className="cashier-method--box single">
      <img src={`/static/mobile/images/base/cashier-payment1.png`} />
    </div>
    <a href="#" className="default-container__title cashier-conclusion--url">
      {__('Change payment method')}
    </a>
    <div className="registration--form-box">
      <input {...propsInput} />
    </div>
    <div className="registration--form-box multiply-inputs">
      <span className="multiply-inputs-title">{__('Valid till')}</span>
      <div>
        <input {...propsInput} />
        <div className="gray-msg">/</div>
        <input {...propsInput} />
      </div>
    </div>
    <div className="registration--form-box">
      <input {...propsInput} />
    </div>
    <div className="registration--form-box">
      <input {...propsInput} />
      <label htmlFor="payment-total" className="input-label">{__('rub')}</label>
    </div>
    <div className="btn btn--primary">{__('Withdraw')}</div>
  </div>
);
