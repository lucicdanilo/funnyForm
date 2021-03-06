import React, { Component } from 'react';
import './SecondStep.css';
import Monkey2 from '../../images/monkey2.png';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

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
            handleBlur,
            termsAndConditions,
        } = this.props;

        return(
            <div className="secondStep">
                <Fade top>
                    <img
                    src = { Monkey2 }
                    style = {{ 
                        position: "absolute",
                        width: "30%",
                        top: "0%",
                        left: "-30%"
                    }} 
                    />
                </Fade>
                <Fade right>
                    <input 
                        type="text"
                        name="uername"
                        className = "inputField"
                        placeholder = "Username"
                        value = { username }
                        onChange = { handleChange('username') }
                        onBlur = { handleBlur('username') }
                    />
                    <div className = "inputFieldError"> { this.props.usernameError } </div>
                    <input 
                        type="text"
                        name="email"
                        className = "inputField"
                        placeholder = "Email"
                        value = { email }
                        onChange = { handleChange('email') }
                        onBlur = { handleBlur('email') }
                    />
                    <div className = "inputFieldError"> { this.props.emailError } </div>
                    <input 
                        type="password"
                        name="password"
                        className = "inputField"
                        placeholder = "Password"
                        value = { password } 
                        onChange = { handleChange('password') }
                        onBlur = { handleBlur('password') }
                    />
                    <div className = "inputFieldError"> { this.props.passwordError } </div>
                    <input 
                        type = "password"
                        name = "passwordConfirm"
                        className = "inputField"
                        placeholder = "Confirm Password"
                        value = { passwordConfirm }
                        onChange = { handleChange('passwordConfirm') }
                        onBlur = { handleBlur('passwordConfirm') }
                    />
                    <div className = "inputFieldError"> { this.props.passwordConfirmError } </div>
                    <label className = "termsAndConditions">
                        <input
                            type = "checkbox"
                            className = "termsAndCoditionsCheckbox"
                            name = "termsAndConditions"
                            checked = { termsAndConditions }
                            onChange = { handleChange('termsAndConditions') }
                        />
                    Terms and conditions</label>
                    <br />
                    <div className = "inputFieldError"> { this.props.termsAndConditionsError } </div>
                    <br />
                </Fade>
                <Zoom bottom>
                    <a className="backBtn" onClick={ this.previousStep } >
                        Back
                    </a>
                    <a className="nextBtn" onClick={ this.submitButton } >
                        Submit
                    </a>
                </Zoom>
            </div>
        )
    }
}

export default SecondStep;