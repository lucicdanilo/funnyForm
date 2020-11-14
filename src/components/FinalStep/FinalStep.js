import React, { Component } from 'react';
import './FinalStep';
import Monkey3 from '../../images/monkey3.png';

class FinalStep extends Component {

    render() {

        const { firstName, lastName, username, email, password, passwordConfirm } = this.props;

        var formData = {
            fields: [
                {
                    "code": "fname",
                    "valueStr": { firstName },
                    "dataType": "string"
                },
                {
                    "code": "lname",
                    "valueStr": { lastName},
                    "dataType": "string"
                },
                {

                    "code": "username",
                    "valueStr": {username},
                    "dataType": "string"
                },
                {
                    "code": "email",
                    "valueStr": { email },
                    "dataType": "string"
                },
                {
                    "code": "password",
                    "valueStr": { password},
                    "dataType": "string"
                },
                {
                    "code": "password_confirm",
                    "valueStr": { passwordConfirm },
                    "dataType": "string"
                }
            ]
        }

        function submitRegistration(formData){
            return new Promise(() => {
                setTimeout(function (){
                    console.log(formData);                   
                }, 1000);
            }, (error) => {
                setTimeout(function (){
                    console.log(error);
                }, 1000);
            });
        }

        submitRegistration(formData);

        return (
            <div>
                <img 
                src = { Monkey3 } 
                style = {{ 
                    position: "absolute",
                    width: "25%",
                    top: "0%",
                    left: "-55%"
                }} 
                />
                <h3 className="successfulMsg">You are suceesful registered!</h3>
            </div>
        )
    }
}

export default FinalStep;