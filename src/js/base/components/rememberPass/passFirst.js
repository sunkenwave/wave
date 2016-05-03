import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchRecoverPass, recoverPassReset } from '../../actions/password';

class PassFirst extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.removeError = this.removeError.bind(this);

    this.state = {
      email: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ email: false });
    }
  }

  submitForm(e) {
    e.preventDefault();
    const email = this.refs.email.value;

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

    if (this.validateForm(email)) this.props.dispatch(fetchRecoverPass(body));
  }

  validateForm(email) {
    const regexEmail = new RegExp('^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)' +
      '*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|' +
      'museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,' +
      '3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$', 'i');

    const validEmail = regexEmail.test(email);

    if (!validEmail) {
      this.setState({ email: false });
      return false;
    }
    return true;
  }

  removeError() {
    this.props.dispatch(recoverPassReset());
    this.setState({ email: true });
  }

  render() {
    const { error } = this.props;

    const errMsg = error || __('Incorrect e-mail');
    const label = <label htmlFor="login-input" className="error-msg">{errMsg}</label>;
    const labelEmail = this.state.email ? null : label;
    const emailErr = this.state.email ? '' : 'error';

    const propsIput = {
      type: 'email',
      ref: 'email',
      className: `input-text ${emailErr}`,
      id: 'login-input',
      placeholder: __('Put your e-mail'),
    };

    return (
      <div className="blue-section registration">
        <form className="registration--form">
          <div className="registration--form-box">
            <input {...propsIput} onFocus={this.removeError} />
            {labelEmail}
          </div>
          <a className="btn btn--align btn--system" href="#" onClick={this.submitForm}>
            {__('Recover')}
          </a>
        </form>
      </div>
    );
  }
}

PassFirst.propTypes = {
  dispatch: PropTypes.func,
  error: PropTypes.string,
  xsrf: PropTypes.string,
};

const select = (state) => ({
  error: state.recoverPass.error,
  xsrf: state.xsrf,
});

export default connect(select)(PassFirst);
