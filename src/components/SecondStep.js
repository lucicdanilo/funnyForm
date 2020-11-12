import React, { Component } from 'react';

class SecondStep extends Component {

    previousStep = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    submitButton = e => {
        e.preventDefault();
        console.log('Submit form');
    }

    render(){
        return(
            <div>
                <input 
                    type="text"
                    name="uername"
                    placeholder = "Username"
                />
                <input 
                    type="text"
                    name="mail"
                    placeholder = "Email"
                />
                <input 
                    type="password"
                    name="password"
                    placeholder = "Password"
                />
                <input 
                    type="password"
                    name="passwordConfirm"
                    placeholder = "Confirm Password"
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