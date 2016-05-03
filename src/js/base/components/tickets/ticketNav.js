import React from 'react';

export const TicketsNav = () => (
  <nav className="profile-menu tickets">
    <div className="profile-menu--item">
      <img src={`/static/mobile/images/base/profile-nav3`}.png alt="Message" />
    </div>
    <div className="profile-menu--item">
      <img src={`/static/mobile/images/base/close`}.png alt="Accept" />
    </div>
    <div className="profile-menu--item">
      <img src={`/static/mobile/images/base/delete.png`} alt="Delete" />
    </div>
  </nav>
);
