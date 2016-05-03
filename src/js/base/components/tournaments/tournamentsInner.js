import React from 'react';
import { DefaultContainer } from '../templates/defaultContainer';

export const TournamentsInner = () => (
  <div className="tournaments-page">
    <div className="blue-section">
      <h4 className="default-container__title yellow">Большой квест</h4>
      <img src={`/static/mobile/images/base/thumb-cover-big.png`} />
    </div>
    <div className="blue-section--two-blocks">
      <div className="blue-section">
        <span>Понедельник</span>
        <span className="yellow">07:00</span>
      </div>
      <div className="blue-section">
        <span>Воскресенье</span>
        <span className="yellow">23:50</span>
      </div>
    </div>
    <div className="blue-section clearfix">
      <DefaultContainer container="game-new" name="Game" />
      <DefaultContainer container="game-new" name="Game" />
      <DefaultContainer container="game-new" name="Game" />
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
          </table>
        </div>
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
          </table>
        </div>
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
          </table>
        </div>
      </div>
    </div>
    <div className="blue-section">
      <h4 className="default-container__title">Правила турнира</h4>
      <p>
        Лучшие слоты Vulkan Casino объединились в одном турнире,
        чтобы радовать вас щедрыми призами каждую неделю!
        Спешите навстречу приключениям и выигрышам:
        откройте тай-ны Древнего Египта вместе с Book of Ra,
        попытайте удачи в землях Скандинавии вместе с прекрасной воительницей,
        погрузитесь в непроходимую чащу центральной Мексики
        или отправляйтесь к берегам Америки на одном борту с Христофором Колумбом.
      </p>
      <p>
        Правила турнира: пройдите квалификацию в 200 раундов в любой из игр,
        заявленных в турнире, до его окончания.
        Участник, показавший лучший результат, пройдя квалификацию, получит
      </p>
    </div>
  </div>
);
