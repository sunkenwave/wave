import React from 'react';

export const ProfileSettings = () => (
  <div className="profile">
    <div className="blue-section--two-blocks">
      <div className="blue-section">
        <span className="gray-msg">Регистрация</span>
        <span className="small-text">22.10.2015</span>
      </div>
      <div className="blue-section">
        <span className="gray-msg">Ваш e-mail</span>
        <span className="small-text green">Подтвержден</span>
      </div>
    </div>
    <div className="blue-section">
      <p className="double-text">
        Обменник
        <span className="gray-msg">Курс обмена 12:30</span>
      </p>
      <div className="registration--form-box">
        <input type="text" className="input-text" id="user-name" placeholder="Имя" />
      </div>
      <div className="registration--form-box">
        <input type="tel" className="input-text" id="user-phone" placeholder="Телефон" />
      </div>
      <div className="registration--form-box">
        <input type="text" className="input-text" id="user-skype" placeholder="Skype" />
      </div>
      <div className="registration--form-box">
        <input type="email" className="input-text" id="user-email" placeholder="E-mail" />
      </div>
      <div className="registration--form-box">
        <input type="date" className="input-text" id="user-old" />
      </div>
      <a className="btn btn--default" href="#">Изменить пароль</a>
    </div>
  </div>
);
