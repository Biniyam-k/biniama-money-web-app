import React, {useEffect, useState} from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function CreateAccount() {

    //state => saved variable in memory

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [pin, setPin] = useState(0);
    const [confirmPin, setConfirmPin] = useState(0);
    const [dateOfBirth, setDateOfBirth] = useState('1990-01-01');

    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

    // console.log(`firstName: ${firstName}`);

    useEffect(() => {

        if (isReadyToSubmit === true) {
            //validation
            if (pin !== confirmPin) {
                alert("Please check if you entered the same pin.")
            } else {
                //api call
                console.log(`ready for api call`);
                //TODO: replace with actual date picker
                setDateOfBirth('1990-01-01');

                axios.post('http://localhost:8080/api/accounts', {
                    'firstName': firstName,
                    'middleName': middleName,
                    'lastName': lastName,
                    'phoneNumber': phoneNumber,
                    'email': email,
                    'pin': pin,
                    'dateOfBirth': dateOfBirth
                })
                    .then(function (response) {
                        console.log(response);
                        alert(`Account with ID ${response.data.id} is created successfully.`);
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert(`Error happened ${error}`);
                    });
            }
            setIsReadyToSubmit(false);
        }
    }, [isReadyToSubmit, firstName, middleName, lastName, phoneNumber, email, pin, confirmPin, dateOfBirth]);

    return (
        <div>
            <p>Hello, user!</p>
            <p>Please fill the following form to create an account on our money transfer app.</p>
            <div>
                <TextField variant='outlined' placeholder='First Name'
                           value={firstName}
                           onChange={(event) => setFirstName(event.target.value)}/>
                <TextField variant='outlined' placeholder='Middle Name'
                           value={middleName}
                           onChange={(event) => setMiddleName(event.target.value)}/>
                <TextField variant='outlined' placeholder='Last Name'
                           value={lastName}
                           onChange={(event) => setLastName(event.target.value)}/>
                <TextField variant='outlined' placeholder='Phone Number'
                           value={phoneNumber}
                           onChange={(event) => setPhoneNumber(event.target.value)}/>

                <TextField variant='outlined' placeholder='Email'
                           value={email}
                           onChange={(event) => setEmail(event.target.value)}/>

                {/*<DatePicker label="Basic date picker" />*/}

                <TextField variant='outlined' placeholder='Pin'
                           value={pin}
                           onChange={(event) => setPin(event.target.value)}/>
                <TextField variant='outlined' placeholder='Confirm Pin'
                           value={confirmPin}
                           onChange={(event) => setConfirmPin(event.target.value)}/>
                <Button variant="contained" onClick={() => setIsReadyToSubmit(true)}>Create Account</Button>
            </div>
        </div>
    );
}

export default CreateAccount;
