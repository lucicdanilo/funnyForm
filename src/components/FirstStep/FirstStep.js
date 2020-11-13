import React, { Component } from 'react';
import './FirstStep.css';

class FirstStep extends Component {

    toSecoundStep = event => {
        event.preventDefault();
        this.props.toSecoundStep();  
    }

    render(){

        const { 
            firstName, 
            lastName, 
            handleChange, 
            handleBlur 
        } = this.props;

        return(
            <div className="firstStep">
                <input 
                    type = "text"
                    name = "firstName"
                    placeholder = "First Name"
                    value = { firstName }
                    onChange = { handleChange('firstName') }
                    onBlur = { handleBlur('firstName') }
                />
                { this.props.firstNameError }
                <input 
                    type="text"
                    name="lastName"
                    placeholder = "Second Name"
                    value = { lastName }
                    onChange = { handleChange('lastName') }
                    onBlur = { handleBlur('lastName') }
                />
                { this.props.lastNameError }
                <br />
                <a className="nextBtn" onClick={ this.toSecoundStep }>Next</a>
            </div>
        )
    }
}

export default FirstStep;