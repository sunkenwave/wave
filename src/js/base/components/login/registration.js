import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { SocialLogin } from './socialLogin';
import { translate } from './../translation/transform';

import { fetchRegistration, registrationResetError } from '../../actions/registration';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.removeError = this.removeError.bind(this);

    this.state = {
      email: true,
      checkbox: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ email: false, checkbox: true });
    }
  }

  submitForm(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const checkbox = this.refs.checkbox.checked;

    const body = {
      data: {
        attributes: {
          email,
        },
        type: 'users',
      },
      meta: {
        _xsrf: this.props.xsrf,
      },
    };

    if (this.validateForm(email, checkbox)) this.props.dispatch(fetchRegistration(body));
  }

  validateForm(email, checkbox) {
    const regexEmail = new RegExp('^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)' +
    '*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|' +
    'museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,' +
    '3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$', 'i');

    const validEmail = regexEmail.test(email);
    let isErr = true;

    if (!validEmail) {
      this.setState({ email: false, checkboxs: true });
      isErr = false;
    }
    if (!checkbox) {
      this.setState({ email: true, checkbox: false });
      isErr = false;
    }
    if (!validEmail && !checkbox) {
      this.setState({ email: false, checkbox: false });
      isErr = false;
    }

    return isErr;
  }

  removeError() {
    this.props.dispatch(registrationResetError());
    this.setState({ email: true, checkbox: true });
  }

  render() {
    const { error, __ } = this.props;

    const errMsg = error || __('Incorrect e-mail');

    const labelEmail = (
      <label htmlFor="registration--form-input" className="error-msg">
        {errMsg}
      </label>
    );
    const email = this.state.email ? null : labelEmail;

    const labelCheckbox = (
      <span className="error-msg">
        {__('Accept your agreement to our terms and conditions')}
      </span>
    );

    const checkbox = this.state.checkbox ? null : labelCheckbox;
    const emailErr = this.state.email ? '' : 'error';

    const propsEmailInput = {
      type: 'email',
      ref: 'email',
      className: `input-text ${emailErr}`,
      id: 'registration--form-input',
      placeholder: 'e-mail',
    };

    const propsCheckInput = {
      type: 'checkbox',
      ref: 'checkbox',
      className: 'hidden-checkbox',
      id: 'registration--form-checkbox',
      defaultChecked: 'true',
    };

    const propsLabel = {
      htmlFor: 'registration--form-checkbox',
      className: 'gray-msg checkbox--main-label',
    };

    return (
      <div className="blue-section registration">
        <SocialLogin __={__} />
        <form className="registration--form">
          <div className="registration--form-box">
            <input {...propsEmailInput} onFocus={this.removeError} />
            {email}
          </div>
          <div className="checkbox">
            <input {...propsCheckInput} onFocus={this.removeError} />
            <label {...propsLabel}>
              <i className="icon--checkbox"></i>
              <span>
                {__('I accept to')}
                <Link to="/termsandconditions">
                  {__('Conditions')}
                </Link>
              </span>
            </label>
            {checkbox}
          </div>
          <a className="btn btn--primary btn--align" href="#" onClick={this.submitForm}>
            {__('registration')}
          </a>
        </form>
        <Link to="/Login" className="default-url">{__('Sign in')}</Link>
      </div>
    );
  }
}

Registration.propTypes = {
  dispatch: PropTypes.func,
  error: PropTypes.object,
  xsrf: PropTypes.string,
  __: PropTypes.func,
};

const select = (state) => ({
  error: state.authorization.error,
  xsrf: state.xsrf,
});

export default connect(select)(translate(Registration));
