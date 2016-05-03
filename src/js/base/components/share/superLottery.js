import React from 'react';
import { DefaultContainer } from '../templates/defaultContainer';

export const SuperLottery = () => (
  <div className="tournaments-page">
    <div className="blue-section">
      <h4 className="default-container__title yellow">Cупер лотерея</h4>
      <img src={`/static/mobile/images/base/thumb-cover-big.png`} />
    </div>
    <div className="blue-section--two-blocks">
      <div className="blue-section">
        <span>28.10.2015</span>
      </div>
      <div className="blue-section">
        <span>03.11.2015</span>
      </div>
    </div>
    <div className="blue-section clearfix default-container--game-new-box">
      <DefaultContainer container="game-new" />
      <DefaultContainer container="game-new" />
      <DefaultContainer container="game-new" />
      <DefaultContainer container="game-new" />
      <DefaultContainer container="game-new" />
      <DefaultContainer container="game-new" />
      <DefaultContainer container="game-new" />
      <DefaultContainer container="game-new" />
      <DefaultContainer container="game-new" />
    </div>
    <div className="blue-section">
      <h4 className="default-container__title">Правила турнира</h4>
      <p>
        Лучшие слоты Vulkan Casino объединились в одном турнире,
        чтобы радовать вас щедрыми призами каждую неделю!
        Спешите навстречу приключениям и выигрышам:
        откройте тай-ны Древнего Египта вместе с Book of Ra,
        попытайте удачи в землях Скандинавии вместе с прекрасной воительницей,
        погрузитесь в непроходимую чащу центральной Мексики или отправляйтесь
        к берегам Америки на одном борту с Христофором Колумбом.
      </p>
      <p>
        Правила турнира: пройдите квалификацию в 200 раундов в любой из игр,
        заявленных в турнире, до его окончания.
        Участник, показавший лучший результат, пройдя квалификацию, получит
      </p>
    </div>
    <div className="blue-section">
      <h4 className="default-container__title">Призы</h4>
      <div className="prizes clearfix">
        <div className="prizes--box">
          <table>
            <tr>
              <td className="blue">1</td>
              <td className="yellow">1250 КП</td>
            </tr>
            <tr>
              <td className="blue">2</td>
              <td className="yellow">1050 КП</td>
            </tr>
            <tr>
              <td className="blue">3</td>
              <td className="yellow">1250 КП</td>
            </tr>
            <tr>
              <td className="blue">4</td>
              <td className="yellow">1050 КП</td>
            </tr>
            <tr>
              <td className="blue">5</td>
              <td className="yellow">1250 КП</td>
            </tr>
          </table>
        </div>
        <div className="prizes--box">
          <table>
            <tr>
              <td className="blue">6</td>
              <td className="yellow">1250 КП</td>
            </tr>
            <tr>
              <td className="blue">7</td>
              <td className="yellow">1050 КП</td>
            </tr>
            <tr>
              <td className="blue">8</td>
              <td className="yellow">1250 КП</td>
            </tr>
            <tr>
              <td className="blue">9</td>
              <td className="yellow">1050 КП</td>
            </tr>
            <tr>
              <td className="blue">10</td>
              <td className="yellow">1250 КП</td>
            </tr>
          </table>
        </div>
        <div className="prizes--box">
          <table>
            <tr>
              <td className="blue">11</td>
              <td className="yellow">1250 КП</td>
            </tr>
            <tr>
              <td className="blue">12</td>
              <td className="yellow">1050 КП</td>
            </tr>
            <tr>
              <td className="blue">13</td>
              <td className="yellow">1250 КП</td>
            </tr>
            <tr>
              <td className="blue">14</td>
              <td className="yellow">1050 КП</td>
            </tr>
            <tr>
              <td className="blue">15</td>
              <td className="yellow">1250 КП</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
);
