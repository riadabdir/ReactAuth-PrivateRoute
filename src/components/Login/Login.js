import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <h2>Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google</button>
            <br /><br />

            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;