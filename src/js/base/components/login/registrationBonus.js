import React from 'react';

export const SocialLogin = () => (
  <div className="registration--social">
    <p>{__('via social networks')}</p>
    <div className="registration--social-buttons">
      <a className="fb" href="/login/facebook">
        <img src={`/static/mobile/images/base/soc-fb.png`} />
      </a>
      <a className="tw" href="/login/twitter">
        <img src={`/static/mobile/images/base/soc-tw.png`} />
      </a>
      <a className="ya" href="/login/yandex">
        <img src={`/static/mobile/images/base/soc-ya.png`} />
      </a>
      <a className="od" href="/login/odnoklassniki">
        <img src={`/static/mobile/images/base/soc-od.png`} />
      </a>
      <a className="vk" href="/login/vkontakte">
        <img src={`/static/mobile/images/base/soc-vk.png`} />
      </a>
      <a className="ma" href="/login/mailru">
        <img src={`/static/mobile/images/base/soc-ma.png`} />
      </a>
      <a className="go" href="/login/google">
        <img src={`/static/mobile/images/base/soc-go.png`} />
      </a>
    </div>
  </div>
);
