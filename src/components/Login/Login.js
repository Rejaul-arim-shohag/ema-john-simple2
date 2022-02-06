import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css';
initializeAuthentication();
const Login = () => {
    // const {user, signInUsingGoogle} = useFirebase();
    const {user, signInUsingGoogle} = useAuth();
    const location = useLocation();
    console.log("came form", location.state?.form)
    return (
        <div className="login-form">
            <div>
                <h2>Please Login </h2>
                <form action="">
                    <input type="Email" />
                    <br />
                    <input type="password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema john? <Link to="/register">Create Account</Link> </p>
                <div>-------or--------</div>
                <button onClick={signInUsingGoogle} className="main_btn">Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;