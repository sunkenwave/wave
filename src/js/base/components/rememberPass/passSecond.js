import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchForgottenPass } from '../../actions/password';

class PassSecond extends Component {
  constructor(props) {
    super(props);
    this.removeError = this.removeError.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      equalPass: true,
    };
  }

  submitForm(e) {
    e.preventDefault();
    const code = this.props.params.id;
    const password = this.refs.password.value;
    const repeatPass = this.refs.repeatPass.value;

    const body = {
      data: {
        attributes: {
          code,
          password,
        },
        type: 'users',
      },
      meta: {
        _xsrf: this.props.xsrf,
      },
    };

    if (this.validateForm(password, repeatPass)) this.props.dispatch(fetchForgottenPass(body));
  }

  validateForm(password, repeatPass) {
    if ((password !== repeatPass) || !password || !repeatPass) {
      this.setState({ equalPass: false });
      this.cleanPass();
      return false;
    }
    return true;
  }

  cleanPass() {
    this.refs.password.value = '';
    this.refs.repeatPass.value = '';
  }

  removeError() {
    this.setState({ equalPass: true });
  }

  render() {
    const label = (
      <label htmlFor="login--form-input--pass3" className="error-msg">
        {__('Passwords don`t match')}
      </label>
    );

    const labelEqualPass = this.state.equalPass ? null : label;
    const passEqualErr = this.state.equalPass ? '' : 'error';

    const propsToInput = (ref, placeholder) => ({
      ref,
      placeholder,
      type: 'password',
      className: `input-text ${passEqualErr}`,
      id: 'login--form-input--pass2',
    });

    const firstInput = propsToInput('password', __('New password'));
    const secondInput = propsToInput('repeatPass', __('Repeat password'));

    return (
      <div className="blue-section registration">
        <form className="registration--form">
          <div className="registration--form-box">
            <input {...firstInput} onFocus={this.removeError} />
          </div>
          <div className="registration--form-box">
            <input {...secondInput} onFocus={this.removeError} />
            {labelEqualPass}
          </div>
          <a className="btn btn--primary" href="#" onClick={this.submitForm}>
            {__('Recover')}
          </a>
        </form>
      </div>
    );
  }
}

PassSecond.propTypes = {
  dispatch: PropTypes.func,
  params: PropTypes.object,
  xsrf: PropTypes.string,
};

const select = (state) => ({
  xsrf: state.xsrf,
});

export default connect(select)(PassSecond);
