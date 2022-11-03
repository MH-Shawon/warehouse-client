import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

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
            <button onClick={() => signInWithGoogle()} className="logo">
                <img
                    src="https://www.lucabottarostudio.com/wp-content/uploads/2019/05/google_PNG19635.png"
                    alt=""
                />
            </button>
            {errorElement}
        </div>
    );
};

export default SocialLogin;