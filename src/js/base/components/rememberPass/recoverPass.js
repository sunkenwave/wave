import React, { Component, PropTypes } from 'react';

class RecoverPass extends Component {
  constructor(props) {
    super(props);
    this.removeError = this.removeError.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      oldPass: true,
      equalPass: true,
    };
  }

  submitForm(e) {
    e.preventDefault();
    const oldPass = this.refs.oldPass.value;
    const newPass = this.refs.newPass.value;
    const repeatPass = this.refs.repeatPass.value;

    if (this.validateForm(oldPass, newPass, repeatPass)) this.props.onSend({ oldPass, newPass });
  }

  validateForm(oldPass, newPass, repeatPass) {
    let flag = true;

    if ((newPass !== repeatPass) || !newPass || !repeatPass) {
      this.setState({ oldPass: true, equalPass: false });
      this.cleanRecoverPass();
      flag = false;
    }
    if (!oldPass) {
      this.setState({ oldPass: false, equalPass: true });
      this.cleanOldPass();
      flag = false;
    }
    if (!oldPass && (!newPass || !repeatPass || (newPass !== repeatPass))) {
      this.setState({ oldPass: false, equalPass: false });
      flag = false;
    }

    return flag;
  }

  cleanOldPass() {
    this.refs.oldPass.value = '';
  }
  cleanRecoverPass() {
    this.refs.newPass.value = '';
    this.refs.repeatPass.value = '';
  }

  removeError() {
    this.setState({ oldPass: true, equalPass: true });
  }

  render() {
    const labelOldPass = (
      <label htmlFor="login--form-input--pass1" className="error-msg">
        {__('Incorrectly filled password')}
      </label>
    );
    const oldPass = this.state.oldPass ? null : labelOldPass;

    const labelEqualPass = (
      <label htmlFor="login--form-input--pass3" className="error-msg">
        {__('Passwords don`t match')}
      </label>
    );
    const equalPass = this.state.equalPass ? null : labelEqualPass;

    const passOldErr = this.state.oldPass ? '' : 'error';

    const propsToInput = (ref, id, placeholder) => ({
      ref,
      placeholder,
      type: 'password',
      className: `input-text ${passOldErr}`,
      id: `login--form-input--pass${id}`,
    });

    const firstInput = propsToInput('oldPass', 1, __('Old password'));
    const secondInput = propsToInput('newPass', 2, __('New password'));
    const thirdInput = propsToInput('repeatPass', 3, __('Repeat password'));

    return (
      <div className="blue-section registration">
        <form className="registration--form">
          <div className="registration--form-box">
            <input {...firstInput} onFocus={this.removeError} />
            {oldPass}
          </div>
          <div className="registration--form-box">
            <input {...secondInput} onFocus={this.removeError} />
          </div>
          <div className="registration--form-box">
            <input {...thirdInput} onFocus={this.removeError} />
            {equalPass}
          </div>
          <a className="btn btn--primary" href="#" onClick={this.submitForm}>{__('Recover')}</a>
        </form>
      </div>
    );
  }
}

RecoverPass.propTypes = {
  onSend: PropTypes.func,
};

export default RecoverPass;
