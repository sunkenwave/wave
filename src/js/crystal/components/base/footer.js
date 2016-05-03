import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    document.getElementById('sh_button').click();
    document.body.scrollTop = 0;
  }

  render() {
    const email = 'support@crystalcasino.com';
    const phone = '+74993462030';
    const phoneLabel = '+7 (499) 346-20-30';

    const srcSys = '/static/mobile/images/base/payment-systems.png';
    const srcCard = '/static/mobile/images/base/bank-cards.png';

    return (
      <footer className="footer">
        <img src={srcSys} className="footer__payments" />
        <img src={srcCard} className="footer__payments" />
        <a className="footer__contact-link" href={`tel:${phone}`}><i className="icon--phone"></i>
          {phoneLabel}
        </a>
        <a className="footer__contact-link" href={`mailto:${email}`} target="_top">
          <i className="icon--email"></i><span>{email}</span>
        </a>
        <a href="#" className="btn btn--primary btn--footer-support" onClick={this.handleClick}>
          <i className="icon--support"></i>
          <span>
            {__('Support Team')}
          </span>
        </a>
        <p className="footer__description">
          { __('Licence and rights is owned by') }&nbsp;
          Invicta Networks (License 8048/JAZ2012-009)&nbsp;
          { __('N.V.,') }&nbsp;
          { __('Address: E-Commerce Park Vredenberg, Curacao, Netherlands Antilles,') }&nbsp;
          { __('Registration number:') }&nbsp;
          123787;&nbsp;
          { __('and operated by') }&nbsp;
          Brivio LTD,&nbsp;
          { __('Address:') }&nbsp;
          Arch. Makariou III, 135, Emelle Building, 4 floor, 3021, Limassol, Cyprus;&nbsp;
          { __('Registration number:') }&nbsp;
          HE315596
        </p>
      </footer>
    );
  }
}

export default Footer;
