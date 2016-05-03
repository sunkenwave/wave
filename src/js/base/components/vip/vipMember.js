import React from 'react';
import { DefaultContainer } from '../templates/defaultContainer';

const propsContainer = {
  container: 'vip',
  img: `/static/mobile/images/base/vip-1.png`,
  title: 'VIP турниры',
  name: 'Вы получите персонального ассистента',
};

export const VipMember = () => (
  <div className="vip-member">
    <div className="blue-section">
      <h2 className="title-vip">Привилегии</h2>
      <DefaultContainer {...propsContainer} />
    </div>
    <div className="games-section__body">
      <DefaultContainer {...propsContainer} />
    </div>
    <div className="blue-section">
      <DefaultContainer {...propsContainer} />
      <DefaultContainer {...propsContainer} >
        <p>Скоро будет доступно</p>
      </DefaultContainer>
      <DefaultContainer {...propsContainer} >
        <h4>Доступно через</h4>
        <ul>
          <li className="position pos-0"></li>
          <li className="position pos-1"></li>
          <li className="position pos-2"></li>
          <li className="position">:</li>
          <li className="position pos-3"></li>
          <li className="position pos-4"></li>
          <li className="position">:</li>
          <li className="position pos-5"></li>
          <li className="position pos-6"></li>
        </ul>
        <ul className="txt-clock">
          <li>часы</li>
          <li>минуты</li>
          <li>секунды</li>
        </ul>
      </DefaultContainer>
    </div>
  </div>
);

export default VipMember;
