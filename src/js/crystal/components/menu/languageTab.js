import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchLanguage } from '../../../base/actions/locale';
import { setVisibilityNavigation } from '../../../base/actions/navigation';

class LangTab extends Component {
  constructor(props) {
    super(props);
    this.triggerChangeLang = this.triggerChangeLang.bind(this);
    this.prevent = this.prevent.bind(this);
  }

  prevent(e) { e.preventDefault(); }

  triggerChangeLang(e) {
    e.preventDefault();
    const { locale } = this.props;
    let lang = e.target.name;

    if (!lang) {
      lang = e.target.parentElement.name;
      if (!lang) {
        lang = e.target.parentElement.parentElement.name;
      }
    }
    localStorage.setItem('LanguageCRYST', 'true');

    if (lang !== locale) {
      const data = {
        data: {
          attributes: {
            lang,
          },
          type: 'lang',
        },
        meta: {
          _xsrf: this.props.xsrf,
        },
      };
      this.props.dispatch(fetchLanguage(data));
    } else {
      this.props.dispatch(setVisibilityNavigation());
    }
  }

  render() {
    const { visible, handler, locale } = this.props;
    const classVisible = visible ? '' : 'hidden';
    let activeRus = '';
    let activeEng = '';

    if (locale === 'en') {
      activeEng = 'active';
    } else if (locale === 'ru') {
      activeRus = 'active';
    }
    return (
    <li className="menu__navigation-item menu__navigation-language-item" onClick={handler}>
      <a className="menu__navigation-item--link" href="#" onClick={this.prevent}>
        <div className="menu__icon__align">
          <i className="menu__icon icon-world"></i>
        </div>
        <span>{__('Choose language')}</span>
      </a>
      <ul className={`menu__navigation-inner ${classVisible}`}>
        <li className={`menu__navigation-inner-item ${activeEng}`} onClick={this.triggerChangeLang}>
          <a href="#"
            className="menu__navigation-inner-item--link"
            onClick={this.triggerClick}
            name="en"
          >
            <div className="menu__icon__align">
              <i className="menu__icon icon-usa"></i>
            </div>
            <span>English</span>
          </a>
        </li>
        <li className={`menu__navigation-inner-item ${activeRus}`} onClick={this.triggerChangeLang}>
          <a href="#"
            className="menu__navigation-inner-item--link"
            onClick={this.triggerClick}
            name="ru"
          >
            <div className="menu__icon__align">
              <i className="menu__icon icon-russia"></i>
            </div>
            <span>Русский</span>
          </a>
        </li>
      </ul>
    </li>
    );
  }
}

LangTab.propTypes = {
  locale: PropTypes.string,
  dispatch: PropTypes.func,
  xsrf: PropTypes.string,
  visible: PropTypes.bool,
  handler: PropTypes.func,
};

const select = (state) => ({
  locale: state.locale,
  xsrf: state.xsrf,
});

export default connect(select)(LangTab);
