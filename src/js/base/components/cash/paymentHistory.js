import React from 'react';

export const PaymentHistory = () => (
  <div className="profile payment-history">
    <div className="blue-section">
      <p className="double-text double-text--custom">
        <span className="small-title">
          <mark className="red-status">- 250 руб.</mark>
          Qiwi
        </span>
        <span className="gray-msg">Вывод</span>
      </p>
      <p className="double-text double-text--custom">
        <span className="gray-msg">22.10.2015</span>
        <span className="yellow-status status">
          <i></i>
          Проведена
        </span>
      </p>
    </div>
    <a className="blue-section center gray-msg load-more" href="#">Показать еще</a>
  </div>
);
