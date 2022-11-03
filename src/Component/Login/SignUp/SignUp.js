import React, { useRef } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignUp = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading3, error3] =
      useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  
    const location = useLocation();
  
    let errorElement;
    let from = location.state?.from?.pathname || "/";
  
    const navigateLogin = () => {
      navigate("/login");
    };
  
    const handleSignup = (event) => {
      event.preventDefault();
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      createUserWithEmailAndPassword(email, password);
    };
  
    if (error3) {
      errorElement = (
        <h5 className="text-danger m-4">
          Error: {error3?.message}
        </h5>
      );
    }
    if (loading3) {
      return <Spinner animation="grow" variant="dark" />;
    }
  
    if (user) {
      navigate(from, { replace: true });
    }
    return (
        <div className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                <div className="card-img-left d-none d-md-flex"></div>
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center text-dark mb-5 fw-bold fs-5">
                    Sign Up Here
                  </h5>
                  <form onSubmit={handleSignup}>
                    <div className="form-floating mb-3">
                      <input
                        ref={nameRef}
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                      />
                      <label>Username</label>
                    </div>
  
                    <div className="form-floating mb-3">
                      <input
                        ref={emailRef}
                        type="email"
                        className="form-control"
                        placeholder="email"
                        required
                      />
                      <label>Email address</label>
                    </div>
  
                    <div className="form-floating mb-3">
                      <input
                        ref={passwordRef}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <label>Password</label>
                    </div>
  
                    <div className="d-grid mb-2">
                      <Button variant="primary" type="submit">
                        Sign Up
                      </Button>
                    </div>
  
                    <Link
                      to="/login"
                      onClick={navigateLogin}
                      className="text-primary text-decoration-none"
                    >
                      Have an account? Login{" "}
                    </Link>
                  </form>
                  {errorElement}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default SignUp;