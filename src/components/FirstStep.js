import React, { Component } from 'react';

class FirstStep extends Component {

    nextStep = e => {
        e.preventDefault();
        this.props.nextStep();    
    }

    render(){
        return(
            <div>
                <input 
                    type="text"
                    name="firstName"
                    placeholder = "First Name"
                />
                <input 
                    type="text"
                    name="secondName"
                    placeholder = "Second Name"
                />
                <button onClick={ this.nextStep }>Next</button>
            </div>
        )
    }
}

export default FirstStep;