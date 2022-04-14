import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {

const [user] = useAuthState(auth)

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [address, setAddress] = useState('');
const [phone, setPhone] = useState('');
const [error, setError] = useState('');

const handleNameBlur = event =>{
    setName(event.target.value);
}

// const handleEmailBlur = event =>{
//     setEmail(event.target.value);
// }

const handleAddressBlur = event =>{
    setAddress(event.target.value); 
}

const handlePhoneBlur = event =>{
    setPhone(event.target.value); 
}

const handleCreateUser = event =>{
    event.preventDefault();
    
    }


    return (
                      <div className="form-container">
            <div>
                <h2 className="form-title">Shipping Information</h2>
                <form onSubmit={handleCreateUser}>

                    
            <div className="input-group">
                         <label htmlFor="name">Name</label>
                         <input onBlur={handleNameBlur} type="text" name="name" required></input>
                     </div>


                    <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required></input> 
                </div>
                     <div className="input-group">
                         <label htmlFor="address">Address</label>
                         <input onBlur={handleAddressBlur} type="text" name="address" required></input>
                     </div>
                     <div className="input-group">
                         <label htmlFor="phone">Phone-Number</label>
                         <input onBlur={handlePhoneBlur} type="number" name="phone" required></input>
                     </div>
                     <p style={{color:'red'}}>{error}</p>
                     <input type="submit" className="form-submit" value="Shipping Add"/>
                </form>
            
            </div>
 
        </div>
    );
};

export default Shipment;