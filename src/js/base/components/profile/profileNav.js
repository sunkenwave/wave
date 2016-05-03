import React from 'react';

export const ProfileNav = () => (
  <nav className="profile-menu">
    <div className="profile-menu--item">
      <img src={`/static/mobile/images/base/profile-nav1.png`} alt="Profile" />
    </div>
    <div className="profile-menu--item current">
      <img src={`/static/mobile/images/base/profile-nav2.png`} alt="Settings" />
    </div>
    <div className="profile-menu--item">
      <img src={`/static/mobile/images/base/profile-nav3.png`} alt="Tickets" />
    </div>
    <div className="profile-menu--item">
      <img src={`/static/mobile/images/base/profile-nav4.png`} alt="Lottery" />
    </div>
  </nav>
);
