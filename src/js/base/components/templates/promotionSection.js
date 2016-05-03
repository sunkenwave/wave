import React from 'react';
import { Link } from 'react-router';

export const PromotionSection = () => (
  <div className="promotion-section">
    <div className="promotion-section__inner">
      <h3 className="promotion-section__bonus">150%</h3>
      <h4 className="promotion-section__title">{__('for the first deposit')}</h4>
      <p className="promotion-section__text">
        {__('register and get a bonus right now!')}
      </p>
      <Link className="btn btn--primary btn--align" to="/registration">
        {__('Registration')}
      </Link>
    </div>
  </div>
);
