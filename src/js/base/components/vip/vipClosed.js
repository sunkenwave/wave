import React from 'react';

export const VipClosed = () => (
  <div className="vip">
    <div className="blue-section">
      <div className="vip-logo">
        <img src={`/static/mobile/images/base/vip-logo.png`} alt="vip" />
      </div>
      <h2 className="title-vip pos-top red">пока для вас<br />недоступен!</h2>
      <p className="txt-top center">
        Как только сумма Ваших депозитов составит
        <span className="yellow">100 000 руб.</span>
        &mdash; VIP Клуб откроет свои двери
      </p>
      <div className="deposit-container__border">
        <span className="deposit-container__name">Сумма Ваших депозитов</span>
        <h4 className="deposit-container__title">5000 руб.</h4>
      </div>
      <div className="deposit-container__border">
        <span className="deposit-container__name">Необходимо внести еще</span>
        <h4 className="deposit-container__title yellow">100 000 руб.</h4>
      </div>
      <a className="btn btn--default mar-top" href="#">Касса</a>
    </div>
  </div>
);
