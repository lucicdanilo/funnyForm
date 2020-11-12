import React, { Component } from 'react';
import './SecondStep.css';

class SecondStep extends Component {

    previousStep = event => {
        event.preventDefault();
        this.props.previousStep();
    }

    submitButton = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    render(){

        const { username, email, password, passwordConfirm, handleChange } = this.props;

        return(
            <div className="secondStep">
                <input 
                    type="text"
                    name="uername"
                    placeholder = "Username"
                    value = { username }
                    onChange = { handleChange('username') }
                />
                <input 
                    type="text"
                    name="mail"
                    placeholder = "Email"
                    value = { email }
                    onChange = { handleChange('email') }
                />
                <input 
                    type="password"
                    name="password"
                    placeholder = "Password"
                    value = { password } 
                    onChange = { handleChange('password') }
                />
                <input 
                    type="password"
                    name="passwordConfirm"
                    placeholder = "Confirm Password"
                    value = { passwordConfirm }
                    onChange = { handleChange('passwordConfirm') }
                />
                <button onClick={ this.previousStep } >
                    Back
                </button>
                <button onClick={ this.submitButton } >
                    Submit
                </button>
            </div>
        )
    }
}

export default SecondStep;