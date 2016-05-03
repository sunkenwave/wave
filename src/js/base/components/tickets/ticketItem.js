import React from 'react';

const propsTextarea = {
  name: 'send-push-msg',
  id: 'send-push-msg',
  cols: 30,
  rows: 10,
  placeholder: 'Текст сообщения',
};

export const TicketsItem = () => (
  <div className="ticket-section">
    <div className="blue-section--two-blocks">
      <div className="blue-section">
        <span className="gray-msg">Дата</span>
        <span className="small-text">22.10.2015</span>
      </div>
      <div className="blue-section">
        <span className="gray-msg">Статус</span>
        <span className="small-text green">В процессе</span>
      </div>
    </div>
    <div className="blue-section">
      <h3 className="default-container__title">Краткое название заявки или вопрос</h3>
      <p>
        На Вашу электронную почту отправлена ссылка для восстановления пароля.
        Ссылка действительная в течение одного часа.
      </p>
    </div>
    <div className="push-chat">
      <div className="push-chat--watch">
        <div className="push-chat--msg">
          <p className="push-chat--msg--part push-chat--msg-green">
            Какое-нибудь небольшое сообщение от администратора ;)
            <span className="triangle"></span>
          </p>
          <span className="gray-msg">16.10.2015 в 16:45:21</span>
        </div>
      </div>
      <div className="blue-section">
        <textarea {...propsTextarea}></textarea>
        <a className="btn btn--default" href="#">Ответить</a>
      </div>
    </div>
  </div>
);
