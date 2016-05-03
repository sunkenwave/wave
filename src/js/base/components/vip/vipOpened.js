import React from 'react';

export const VipOpened = () => (
  <div className="vip">
    <div className="blue-section">
      <h2 className="title-vip">Вы успешно подали заявку на вступление в</h2>
      <div className="vip-logo pos-top">
        <img src={`/static/mobile/images/base/vip-logo.png`} alt="vip" />
      </div>
      <h2 className="title-vip">
        Совсем скоро с Вами свяжуться наши операторы и обсудят все условия
      </h2>
      <a className="btn btn--primary mar-top" href="#">Спасибо</a>
    </div>
  </div>
);
