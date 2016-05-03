import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { SocialLogin } from './socialLogin';

import { fetchAuthorization, authorizationResetError } from '../../actions/authorization';

class Login extends Component {
  constructor(props) {
    super(props);

    this.removeError = this.removeError.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      login: true,
      pass: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({
        login: false,
        pass: false,
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    const email = this.refs.login.value;
    const password = this.refs.pass.value;

    const form = {
      data: {
        attributes: {
          password,
          email,
        },
        type: 'users',
      },
      meta: {
        _xsrf: this.props.xsrf,
      },
    };

    if (this.validateForm(email, password)) this.props.dispatch(fetchAuthorization(form));
  }

  validateForm(email, pass) {
    const regexEmail = new RegExp('^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)' +
    '*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|' +
    'museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,' +
    '3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$', 'i');

    const validEmail = regexEmail.test(email);
    let isErr = true;

    if (!validEmail) {
      this.setState({ login: false, pass: true });
      isErr = false;
    }
    if (!pass) {
      this.setState({ login: true, pass: false });
      isErr = false;
    }
    if (!validEmail && !pass) {
      this.setState({ login: false, pass: false });
      isErr = false;
    }

    return isErr;
  }

  removeError() {
    this.props.dispatch(authorizationResetError());
    this.setState({ login: true, pass: true });
  }

  render() {
    const { error } = this.props;

    const errMsgLogin = error ? null : __('Incorrect e-mail');
    const errMsgPass = error || __('You didn`t fill the password field');

    const labelLogin = (
      <label htmlFor="login--form-input--email" className="error-msg">
        {errMsgLogin}
      </label>
    );
    const login = this.state.login ? null : labelLogin;

    const labelPass = (
      <label htmlFor="login--form-input--pass" className="error-msg">
        {errMsgPass}
      </label>
    );
    const pass = this.state.pass ? null : labelPass;

    const loginErr = this.state.login ? '' : 'error';
    const passErr = this.state.pass ? '' : 'error';

    const propsEmailInput = {
      ref: 'login',
      type: 'email',
      className: `input-text ${loginErr}`,
      id: 'login--form-input--email',
      placeholder: 'e-mail',
    };

    const propsPassInput = {
      ref: 'pass',
      type: 'password',
      className: `input-text ${passErr}`,
      id: 'login--form-input--pass',
      placeholder: __('password'),
    };

    return (
      <div className="blue-section registration">
        <SocialLogin />
        <form className="registration--form">
          <div className="registration--form-box">
            <input {...propsEmailInput} onFocus={this.removeError} />
            {login}
          </div>
          <div className="registration--form-box">
            <input {...propsPassInput} onFocus={this.removeError} />
            {pass}
          </div>
          <a href="#" className="btn btn--primary btn--align" onClick={this.submitForm}>
            {__('Sign in')}
          </a>
        </form>
        <Link to="/registration" className="default-url">
          {__('Registration')}
        </Link>
        <div>
          <Link to="/forgot_pass" className="default-url default-url--remember">
            {__('Forgot your password?')}
          </Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  xsrf: PropTypes.string,
};

const select = (state) => ({
  error: state.authorization.error,
  xsrf: state.xsrf,
});

export default connect(select)(Login);
