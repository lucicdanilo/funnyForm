import React, { Component } from 'react';
import FirstStep from '../FirstStep/FirstStep';
import SecondStep from '../SecondStep/SecondStep';
import FinalStep from '../FinalStep/FinalStep';

class Main extends Component {

    state = {

        step: 1,

        firstName: '',
        lastName: '',

        username: '',
        email: '',
        password: '',
        passwordConfirm: ''

    }

    showStep = () => {

        const { step, firstName, lastName, username, email, password, passwordConfirm } = this.state;

        if( step === 1 ){
            return (<FirstStep 
                nextStep = { this.nextStep } 
                handleChange = {this.handleChange}
                firstName = { firstName }
                lastName = { lastName }
            />);
        }

        if( step === 2 ){
            return (<SecondStep 
                previousStep = { this.previousStep }
                nextStep = { this.nextStep }
                handleChange = { this.handleChange }
                username = { username }
                email = { email }
                password = { password }
                passwordConfirm = { passwordConfirm } 
            />);
        }

        if( step === 3 ){
            return (<FinalStep
                firstName = { firstName }
                lastName = { lastName }
                username = { username }
                email = { email }
                password = { password }
                passwordConfirm = {passwordConfirm}
            />);
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

    handleChange = input => event => {
        this.setState({[input]: event.target.value});
    }

    render(){

        const { step } = this.state;

        return(
            <div>
                <h2>Registration</h2>
                <p>Caution! This is funny form.</p>
                {this.showStep()}
            </div>
        );
    }
}

export default Main;