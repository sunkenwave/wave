import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const DefaultHeader = () => {
  const src = `/static/mobile/images/${window.data.project}/logo.png`;

  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img className="header__logo-img" src={src} />
      </Link>
      <div className="header__btn-group-enter">
        <Link to="/registration" className="btn btn--primary">
          {__('registration')}
        </Link>
        <Link to="/login" className="btn btn--default">
          {__('sign in')}
        </Link>
      </div>
    </header>
  );
};

export const HeaderNested = (props) => {
  const { title, cb } = props;
  return (
    <header className="header">
      <a className="header__arrow-back" href="#" onClick={cb}></a>
      <h3 className="event-container__title event-container__header-title">{title}</h3>
    </header>
  );
};

HeaderNested.propTypes = {
  title: PropTypes.string,
  cb: PropTypes.func,
};

export const HeaderLogin = (props) => {
  const { balance, currency, cb } = props;
  return (
    <header className="header">
      <a className="header__arrow-back header__menu-button" href="#" onClick={cb}>
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </a>
      <div className="header__pay-container">
        <span className="header__user-balance">{`${balance} ${currency}`}</span>
        <Link to="/cash" className="btn btn--danger header__buy-button">{ __('Refill') }</Link>
      </div>
    </header>
  );
};

HeaderLogin.propTypes = {
  balance: PropTypes.number,
  currency: PropTypes.string,
  cb: PropTypes.func,
};
