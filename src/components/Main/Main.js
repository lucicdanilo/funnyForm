import React, { Component } from 'react';
import './Main.css';
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
        passwordConfirm: '',
        firstNameError: '',
        lastNameError: '',
        usernameError: '',
        emailError: '',
        passwordError: '',
        passwordConfirmError: '',
        termsAndConditions: false,
        termsAndConditionsError: ''
    }

    showStep = () => {
        if( this.state.step === 1 ){
            return (<FirstStep 
                toSecoundStep = { this.toSecoundStep } 
                handleChange = {this.handleChange}
                handleBlur = { this.handleBlur }
                firstName = { this.state.firstName }
                lastName = { this.state.lastName }
                firstNameError = { this.state.firstNameError }
                lastNameError = { this.state.lastNameError }
            />);
        }

        if( this.state.step === 2 ){
            return (<SecondStep 
                previousStep = { this.previousStep }
                toThirdStep = { this.toThirdStep }
                handleChange = { this.handleChange }
                handleBlur = { this.handleBlur }
                username = { this.state.username }
                email = { this.state.email }
                password = { this.state.password }
                passwordConfirm = { this.state.passwordConfirm } 
                usernameError = { this.state.usernameError }
                emailError = { this.state.emailError }
                passwordError = { this.state.passwordError }
                passwordConfirmError = { this.state.passwordConfirmError }
                termsAndConditions = { this.state.termsAndConditions}
                termsAndConditionsError = { this.state.termsAndConditionsError }
            />);
        }

        if( this.state.step === 3 ){
            return (<FinalStep
                firstName = { this.state.firstName }
                lastName = { this.state.lastName }
                username = { this.state.username }
                email = { this.state.email }
                password = { this.state.password }
                passwordConfirm = { this.state.passwordConfirm }
            />);
        }
    }

    toSecoundStep = () => {
        if(
            this.state.step === 1 &&
            this.state.firstNameError === '' &&
            this.state.lastNameError === '' &&
            this.state.firstName.length > 0
        ){
            this.setState({
                step: this.state.step + 1 
            });   
        }else{
            this.setState({ firstNameError: "First name is required!" })
        }
    }

    toThirdStep = () => {
        if(
            this.state.step === 2 &&
            this.state.usernameError === '' &&
            this.state.emailError === '' &&
            this.state.passwordError === '' && 
            this.state.email.length > 0
        ){
            if(this.state.password.length > 0){
                if(this.state.passwordConfirm.length > 0){
                    if(this.state.password === this.state.passwordConfirm){
                        if(this.state.termsAndConditions === true){
                            this.setState({
                                step: this.state.step + 1 
                            }); 
                        }else{
                            this.setState({ termsAndConditionsError: "Terms and Coditions must be checked!" })
                        }
                    }else{
                        this.setState({ passwordConfirmError: "Passwords are not same!" })
                    }
                }else{
                    this.setState({ passwordConfirmError: "Confirmed password is required!" })
                }
            }else{
                this.setState({ passwordError: "Password is required!" })
            }
        }else{
            this.setState({ emailError: "Email is required!" })
        }
    }

    previousStep = () => {
        this.setState({
            step: this.state.step - 1 
        });
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
        // For changing filed value hide error for that field
        if( input === 'firstName' ){ this.setState({ firstNameError: '' } )}
        if( input === 'lastName' ){ this.setState({ lastNameError: '' } )}
        if( input === 'username' ){ this.setState({ usernameError: '' }) }
        if( input === 'email' ){ this.setState({ emailError: '' }) }
        if( input === 'password' ){ this.setState({ passwordError: '' }) }
        if( input === 'passwordConfirm' ){ this.setState({ passwordConfirmError: '' }) }
        if( input === 'termsAndConditions' ){ 
            this.setState({ termsAndConditions: !this.state.termsAndConditions })
        }
    }

    handleBlur = input => event => {   
        if(input === 'firstName'){
            if( event.target.value.length === 0 ){
                this.setState({ firstNameError: "First name is required!" });
            }
            if( event.target.value.length < 2 && event.target.value.length > 0 ){
                this.setState({ firstNameError: "Minimum length of first name is 2" });
            } 
            if( event.target.value.length > 25 ){
                this.setState({ firstNameError: "Maximum length of first name is 25" });
            }
        }

        if(input === 'lastName'){
            if( event.target.value.length < 2 && event.target.value.length > 0 ){
                this.setState({ lastNameError: "Minimum length of last name is 2" });
            }
            if( event.target.value.length > 25 ){
                this.setState({ lastNameError: "Maximum length of first name is 25" });
            }
        }

        if(input === 'username'){
            if( event.target.value.length < 4 && event.target.value.length > 0){
                this.setState({ usernameError: "Minimum length of last name is 4" });
            } 
            if( event.target.value.length > 20 ){
                this.setState({ usernameError: "Maximum length of first name is 20" });
            }
        }

        if(input === 'email'){
            if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(event.target.value))){
                this.setState({ emailError: "This is not valid form of e-mail!" });
            }
            if( event.target.value.length === 0 ){
                this.setState({ emailError: "Email is required!" });
            }
        }

        if(input === 'password'){
            if(!(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(event.target.value))){
                this.setState({ passwordError: "This is not valid format od password!" });
            }
            if( event.target.value.length === 0 ){
                this.setState({ passwordError: "Password is required!" });
            }
        }

        if(input === 'passwordConfirm'){
            if(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(event.target.value)){

            }else{
                this.setState({ passwordConfirmError: "This is not valid format od password!" });
            }
        }
    }

    render(){
        const { step } = this.state;
        return(
            <div className="main">
                <h2>Registration</h2>
                <p>Caution! This is funny form.</p>
                { this.showStep() }
                <div>{ step } of 3</div>
            </div>
        );
    }
}

export default Main;