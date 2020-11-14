import React, { Component } from 'react';
import './FirstStep.css';
import Monkey from '../../images/monkey.png';

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
                <img 
                src = { Monkey }
                style = {{
                    position: "absolute",
                    width: "25%",
                    top: "0%",
                    left: "-95%"
                }}
                />
                <input 
                    type = "text"
                    name = "firstName"
                    className = "inputField"
                    placeholder = "First Name"
                    value = { firstName }
                    onChange = { handleChange('firstName') }
                    onBlur = { handleBlur('firstName') }
                />
                <div className = "inputFieldError"> { this.props.firstNameError } </div>
                <input 
                    type="text"
                    name="lastName"
                    className = "inputField"
                    placeholder = "Last Name"
                    value = { lastName }
                    onChange = { handleChange('lastName') }
                    onBlur = { handleBlur('lastName') }
                />
                <div className = "inputFieldError"> { this.props.lastNameError } </div>
                <br />
                <a className="nextBtn" onClick={ this.toSecoundStep }>Next</a>
            </div>
        )
    }
}

export default FirstStep;