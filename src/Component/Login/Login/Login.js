
import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Spinner, } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const location = useLocation();
    const navigate = useNavigate();

    let errorElement;
    let from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading3, error1] =
        useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] =
        useSendPasswordResetEmail(auth);

    if (error1) {
        errorElement = (
            <h5 className="text-danger m-4">
                Error: {error1?.message}
                {resetError?.message}
            </h5>
        );
    }

    const handleLogin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const res = await signInWithEmailAndPassword(email, password);
        console.log(res);
       const {data} = await axios.post(`https://ware-house-server-zeta.vercel.app/accesstoken`, {email});
       console.log(data);
       localStorage.setItem('accessToken', data.accessToken);
       navigate(from, { replace: true });
    };

    
    const navigateSignup = () => {
        navigate("/signup");
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);

            toast("Sent email");
        } else {
            toast("Email Address Not Found");
        }
    };

    if (loading3 || sending) {
        return <Spinner animation="grow" variant="dark" />;
    }

    return (
        <div className="wrapper border">
            <div className="text-center mb-4 name">LOGIN</div>
            <div className="text-center">

            </div>

            <form onSubmit={handleLogin} className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input
                        ref={passwordRef}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <Button variant="primary" type="submit">
                    Login{" "}
                </Button>
            </form>
            {errorElement}
            <div className=" d-flex w-85 mx-auto justify-content-between align-items-center fs-6">
                <p>Are you new? <Link to="/signup" className='text-primary px-auto text-decoration-none' onClick={navigateSignup}>Please Register</Link> </p>

                <p>Forget password?

                    <Link
                        to="/login"
                        onClick={resetPassword}
                        className="text-primary pe-auto text-decoration-none"
                    >
                        Reset password
                    </Link>{" "}


                </p>

            </div>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;