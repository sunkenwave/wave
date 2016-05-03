import React, { PropTypes } from 'react';

export const Pay = (props) => {
  const { code, name, currency, cb } = props;
  const src = `/static/mobile/images/base/payments/${currency}/${code}.png`;

  return (
    <div className="cashier-method--box" onClick={cb}>
      <img src={src} alt={name} />
    </div>
  );
};

Pay.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  cb: PropTypes.func,
  currency: PropTypes.string,
};
