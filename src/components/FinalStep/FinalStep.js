import React, { Component } from 'react';
import './FinalStep';

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

        console.log(formData);
        return (
            <div>
                <h3 className="successfulMsg">You are suceesful registered!</h3>
            </div>
        )
    }
}

export default FinalStep;