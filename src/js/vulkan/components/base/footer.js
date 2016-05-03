import React, { Component, PropTypes } from 'react';
import { translate } from './../../../base/components/translation/transform';
import { connect } from 'react-redux';

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
    const { __ } = this.props;
    const email = 'support@vulkanstars.com';
    const phone = '+74993460330';
    const phoneLabel = '+7 (499) 346-03-30';

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
          { __('Licence and all the rights for this web site are owned by  Fornus Ltd.,') }&nbsp;
          { __('Address:') } { __('Edwin Wallace Rey Drive,') }&nbsp;
          { __('201 Rogers Office, George Hill, Anguilla.') }&nbsp;
          { __('Partners of Fornus Ltd. are Vertiline Asset Limited,') }&nbsp;
          { __('Address:') }&nbsp;
          { __('Vasileos Pavlou, 60, Agios Dometios, 2360, Nicosia, Cyprus.') }
        </p>
      </footer>
    );
  }
}

Footer.propTypes = {
  locale: PropTypes.string,
  __: PropTypes.func,
};

const select = (state) => ({
  locale: state.locale,
});

export default connect(select)(translate(Footer));
