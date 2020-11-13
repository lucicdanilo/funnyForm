import React, { Component } from 'react';
import './SecondStep.css';

class SecondStep extends Component {

    previousStep = event => {
        event.preventDefault();
        this.props.previousStep();
    }

    submitButton = event => {
        event.preventDefault();
        this.props.toThirdStep();
 
    }

    render(){

        const { 
            username, 
            email,
            password,
            passwordConfirm,
            handleChange, 
            handleBlur 
        } = this.props;

        return(
            <div className="secondStep">
                <input 
                    type="text"
                    name="uername"
                    placeholder = "Username"
                    value = { username }
                    onChange = { handleChange('username') }
                    onBlur = { handleBlur('username') }
                />
                { this.props.usernameError }
                <input 
                    type="text"
                    name="email"
                    placeholder = "Email"
                    value = { email }
                    onChange = { handleChange('email') }
                    onBlur = { handleBlur('email') }
                />
                { this.props.emailError }
                <input 
                    type="password"
                    name="password"
                    placeholder = "Password"
                    value = { password } 
                    onChange = { handleChange('password') }
                    onBlur = { handleBlur('password') }
                />
                { this.props.passwordError }
                <input 
                    type="password"
                    name="passwordConfirm"
                    placeholder = "Confirm Password"
                    value = { passwordConfirm }
                    onChange = { handleChange('passwordConfirm') }
                    onBlur = { handleBlur('passwordConfirm') }
                />
                { this.props.passwordConfirmError }
                <br />
                <a className="backBtn" onClick={ this.previousStep } >
                    Back
                </a>
                <a className="nextBtn" onClick={ this.submitButton } >
                    Submit
                </a>
            </div>
        )
    }
}

export default SecondStep;