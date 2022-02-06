import React from 'react';
import { Link } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';


import useAuth from '../../hooks/useAuth';


const Register = () => {
    // const {user} = useFirebase();
    const {user} = useAuth();
    return (
        <div className="login-form">
            <div>
                <h2>Register : create account</h2>
                <form action="">
                    <input type="email" name="email" placeholder="your email"/>
                    <br />
                    <input type="password" name="password" placeholder="your password"/>
                    <br />
                    <input type="password" name="password" placeholder="Re enter password"/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link> </p>
                <button className="main_btn">Google Signin</button>
            </div>
        </div>
    );
};

export default Register;