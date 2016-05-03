import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchLanguage } from '../../../base/actions/locale';

class ChooseLangBox extends Component {
  constructor(props) {
    super(props);
    this.triggerClick = this.triggerClick.bind(this);
    this.state = {
      active: '',
    };
  }

  triggerClick(e) {
    e.preventDefault();
    const { locale } = this.props;
    let lang = e.target.name;

    if (!lang) {
      lang = e.target.parentElement.name;
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
    }
    this.setState({ active: 'hidden' });
  }

  render() {
    const { __ } = this.props;
    return (
      <div className={`language__box ${this.state.active}`}>
        <p className="language__box-title">{__('Choose language')}</p>
        <a
          className="language__box-link btn btn--default"
          href="#"
          onClick={this.triggerClick}
          name="en"
        >
          <i className="icon-usa"></i>
          <span>English</span>
        </a>
        <a
          className="language__box-link btn btn--system"
          href="#"
          name="ru"
          onClick={this.triggerClick}
        >
          <i className="icon-russia"></i>
          <span>Русский</span>
        </a>
      </div>
    );
  }
}

ChooseLangBox.propTypes = {
  locale: PropTypes.string,
  dispatch: PropTypes.func,
  xsrf: PropTypes.string,
  __: PropTypes.func,
};

const select = (state) => ({
  locale: state.locale,
  xsrf: state.xsrf,
});

export default connect(select)(ChooseLangBox);
