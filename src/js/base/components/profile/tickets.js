import React from 'react';

export const Tickets = () => (
  <div className="profile">
    <div className="blue-section">
      <a className="btn btn--default" href="#">Создать заявку</a>
    </div>
    <div className="blue-section">
      <p className="double-text double-text--custom">
        <span className="small-title">Краткое название заявки или вопрос</span>
        <span className="gray-msg">ID: 23213</span>
      </p>
      <p className="double-text double-text--custom">
        <span className="gray-msg">22.10.2015</span>
        <span className="green-status status"><i></i>В процессе</span>
      </p>
      <div className="tickets-swipe">
        <a href="#" className="tickets-swipe--accept"><i className="icon--accept"></i></a>
        <a href="#" className="tickets-swipe--delete"><i className="icon--delete"></i></a>
      </div>
    </div>
    <div className="blue-section left">
      <p className="double-text double-text--custom">
        <span className="small-title">Краткое название заявки или вопрос</span>
        <span className="gray-msg">ID: 23213</span>
      </p>
      <p className="double-text double-text--custom">
        <span className="gray-msg">22.10.2015</span>
        <span className="green-status status"><i></i>В процессе</span>
      </p>
      <div className="tickets-swipe">
        <a href="#" className="tickets-swipe--accept"><i className="icon--accept"></i></a>
        <a href="#" className="tickets-swipe--delete"><i className="icon--delete"></i></a>
      </div>
    </div>
    <div className="blue-section">
      <p className="double-text double-text--custom">
        <span className="small-title">Краткое название заявки или вопрос</span>
        <span className="gray-msg">ID: 23213</span>
      </p>
      <p className="double-text double-text--custom">
        <span className="gray-msg">22.10.2015</span>
        <span className="gray-status status"><i></i>Архив</span>
      </p>
    </div>
    <div className="blue-section">
      <p className="double-text double-text--custom">
        <span className="small-title">Краткое название заявки или вопрос</span>
        <span className="gray-msg">ID: 23213</span>
      </p>
      <p className="double-text double-text--custom">
        <span className="gray-msg">22.10.2015</span>
        <span className="red-status status"><i></i>Отклонена</span>
      </p>
    </div>
    <a className="blue-section center gray-msg load-more" href="#">Показать еще</a>
  </div>
);
