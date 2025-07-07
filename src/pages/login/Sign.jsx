import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../redux/authSlice'
import Button from '../../component/buttton/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {
    validatePassword,
    validatefirstName,
    validatelastName,
} from '../../component/authentication/validation.js'
const Sign = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [passwordErr, setPasswordErr] = useState('');
    const [firstNameErr, setFirstNameErr] = useState('');
    const [lastNameErr, setLastNameErr] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleform = (e) => {
        e.preventDefault();

        const isfirstnameValid = validatefirstName (firstName , setFirstNameErr)
        const islastnameValid = validatelastName (lastName , setLastNameErr)
        const isPasswordValid = validatePassword (password , setPasswordErr)
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const name = `${firstName} ${lastName}`
        if (isPasswordValid&&isfirstnameValid&&islastnameValid){
         dispatch(registerUser({ name, email, password }))

         console.log(registerUser)
         alert('sent');
        }
    }
    return (
        <div className='d-flex w-100'>
            <form onSubmit={handleform} className='mains mt-5' >
                <h3>Sign Up</h3>
                <div className='d-flex justify-content-center gap-3'>
                    <p className='socials'><FontAwesomeIcon icon={faFacebookF} /></p>
                    <p className='socials'><FontAwesomeIcon icon={faGooglePlusG} /></p>
                    <p className='socials'><FontAwesomeIcon icon={faLinkedinIn} /></p>
                </div>

                <div className='d-flex justifly-content-center flex-column gap-2 align-items-center mb-2'>
                    <div className='d-flex gap-2 w-75'>
                        <p className='text-danger'>{firstNameErr}</p> <p className='text-danger'>{lastNameErr}</p>
                        <input className='input' type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input className='input' type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <input className='input' type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='input' type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
                    <input className='input' type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <p className='text-danger'>{passwordErr}</p>
                <p>Or use your Email for Registration</p>
                <Button btnStyle='login'>Create Account</Button>
            </form>
            <div className='image justify-content-center d-flex align-items-center '>
                <div>
                    <h4>Welcome Back!</h4>
                    <p>To keep Connected with us please Login with your personal Info</p>
                    <Button btnStyle='login'>Login</Button>
                </div>
            </div>


        </div>
    )
}

export default Sign