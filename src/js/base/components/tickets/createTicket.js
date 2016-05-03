import React from 'react';

const propsInput = {
  ref: 'ticket-theme',
  type: 'text',
  className: 'input-text',
  id: 'ticket-theme',
  placeholder: 'Тема',
};

const propsTextarea = {
  name: 'ticket-text',
  id: 'ticket-text',
  cols: '30',
  rows: '10',
  placeholder: 'Текст',
};

export const CreateTicket = () => (
  <div className="blue-section registration">
    <form className="registration--form">
      <div className="registration--form-box">
        <input {...propsInput} />
      </div>
      <div className="registration--form-box">
        <select className="mail-category">
          <option value="deposits">Ввод и вывод средств</option>
          <option value="technical">Технические проблемы</option>
          <option value="bonuses">Бонусы и акции</option>
          <option value="password">Восстановление пароля</option>
          <option value="security">Безопасность</option>
          <option value="other">Другие</option>
        </select>
      </div>
      <div className="registration--form-box">
        <select className="mail-imoprtance">
          <option value="3">Низкий</option>
          <option value="2">Нормальный</option>
          <option value="1">Высокий</option>
        </select>
      </div>
      <div className="registration--form-box">
        <textarea {...propsTextarea}></textarea>
      </div>
      <a className="btn btn--primary" href="#">Отправить</a>
    </form>
  </div>
);
