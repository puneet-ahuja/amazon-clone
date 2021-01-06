import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase'

function Login(){

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    // This is used to redirect page.
    const history = useHistory();

    // Link to Logo Image
    // TODO : Need to update this later.
    const logoImage = "https://image.shutterstock.com/image-photo/kiev-ukraine-may-07-2015-260nw-276929006.jpg";

    const login = (event) => {
        // This stops the refresh!!
        event.preventDefault();

        // Login logic here...
        auth.signInWithEmailAndPassword(email, password)
        .then( (auth) => {
            // Logged in and redirect to homeage
            history.push("/");
        })
        .catch(e=> alert(e.message))
    }

    const register = (event) => {
        // This stops the refresh!!
        event.preventDefault();

        // Register logic here...
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // Created a user and logged in...
            history.push("/");
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            {/* Link of Logo */}
            <Link to="/">
                <img 
                    className="login__logo"
                    src={logoImage} 
                    alt="" />
            </Link>

            {/* Login Form */}
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} type="email" onChange={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input value={password} type="password" onChange={event => setPassword(event.target.value)}/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice. 
                </p>
                {/* Button to create new Amazon Account. */}
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
                
            </div>
        </div>
    )
}

export default Login;