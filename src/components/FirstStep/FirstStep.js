import React, { Component } from 'react';
import './FirstStep.css';

class FirstStep extends Component {

    nextStep = event => {
        event.preventDefault();
        this.props.nextStep();  
    }

    render(){
        const { firstName, lastName, handleChange } = this.props;
        return(
            <div className="firstStep">
                <input 
                    type = "text"
                    name = "firstName"
                    placeholder = "First Name"
                    value = { firstName }
                    onChange = { handleChange('firstName') }
                />
                <input 
                    type="text"
                    name="lastName"
                    placeholder = "Second Name"
                    value = { lastName }
                    onChange = { handleChange('lastName') }
                />
                <a className="nextBtn" onClick={ this.nextStep }>Next</a>
            </div>
        )
    }
}

export default FirstStep;