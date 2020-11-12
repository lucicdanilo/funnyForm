import React, { Component } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

class Main extends Component {

    state = {

        step: 1,

        firstName: '',
        lastName: '',

        username: '',
        email: '',
        password: '',
        confirmPassword: ''

    }

    showStep = () => {

        const { step } = this.state;

        if( step === 1 ){
            return (<FirstStep nextStep = { this.nextStep } />);
        }

        if( step === 2 ){
            return (<SecondStep previousStep = { this.previousStep } />);
        }
    }

    nextStep = () => {

        const { step } = this.state;

        this.setState({
            step: step + 1 
        });
    }

    previousStep = () => {

        const { step } = this.state;

        this.setState({
            step: step - 1 
        });
    }

    render(){

        return(
            <div>
                <h2 className="">Registration</h2>
                <p>Caution! This is funny form.</p>
                {this.showStep()}
            </div>
        );
    }
}

export default Main;