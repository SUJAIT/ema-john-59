import React, { useState } from 'react';
import './SignUp.css'
import {Link, useNavigate} from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SignUp = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();
const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
const handleEmailBlur = event =>{
    setEmail(event.target.value);
}

const handlePasswordBlur = event =>{
    setPassword(event.target.value);
}

const handleConfirmPasswordBlur = event =>{
    setConfirmPassword(event.target.value); 
}

if(user){
    navigate ('/shop');
}

const handleCreateUser = event =>{
    event.preventDefault();
    if(password !== confirmPassword) {
        setError('Your two passwords did not match');
        return;
    }
    if(password.length<6){
        setError('password must be 6 characters or longer');
        return;
    }
createUserWithEmailAndPassword(email,password);
}

    return (
               <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required></input> 
                </div>
                     <div className="input-group">
                         <label htmlFor="password">Password</label>
                         <input onBlur={handlePasswordBlur} type="password" name="password" required></input>
                     </div>
                     <div className="input-group">
                         <label htmlFor="Confirm-password">Confirm Password</label>
                         <input onBlur={handleConfirmPasswordBlur} type="password" name="Confirm-password" required></input>
                     </div>
                     <p style={{color:'red'}}>{error}</p>
                     <input type="submit" className="form-submit" value="Sign Up"/>
                </form>
                <p>
                    Already Have an account? <Link className="form-link" to="/login">Login your account</Link> 
                </p>
            </div>
 
        </div>
    );
};

export default SignUp;