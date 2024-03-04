import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import './SocialLogin.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../Images/Social/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading2, error2] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let errorElement;
    let from = location.state?.from?.pathname || "/";

    if (error2) {
        errorElement = (
            <h5 className="text-danger m-4">Error: {error2?.message}</h5>
        );
    }

    if (loading2) {
        return <Spinner animation="grow" variant="dark" />;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (



        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-info w-50"></div>
                <p className="mt-2 p-3"> OR </p>
                <div style={{ height: "1px" }} className="bg-info w-50"></div>
            </div>
            <div>
                <Button onClick={() => signInWithGoogle()} className="w-50 bg-info text-white">
                    <img src={google} alt="" />
                    <span className="mx-2">Google</span> </Button>

            </div>
            {errorElement}
        </div>

    );
};

export default SocialLogin;