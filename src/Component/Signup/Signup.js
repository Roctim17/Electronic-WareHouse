import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../Firebase.init";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate('/')
            }).catch((error) => {
                console.error(error);

            });
    }

    const handleEmail = (emailInput) => {
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: '' });
        } else {
            setEmail({ value: '', error: 'Invalid email' });
        }
    };
    const handlePassword = (passwordInput) => {
        if (passwordInput.length >= 8) {
            setPassword({ value: passwordInput, error: '' });
        } else {
            setPassword({ value: '', error: 'Password must be 8 characters' });
        }
    }
    const handleConfirmPassword = (confirmPassword) => {
        if (confirmPassword === password.value) {
            setConfirmPassword({ value: confirmPassword, error: '' });
        } else {
            setConfirmPassword({ value: '', error: "Password doesn't match" });
        }
    }

    const handleSignup = (e) => {
        e.preventDefault();


        if (email.value === '') {
            setEmail({ value: '', error: 'Email is required' });
        }
        if (password.value === '') {
            setPassword({ value: '', error: 'Password is required' });
        }

        if (email.value && password.value && confirmPassword.value === password.value) {
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    toast.success("User Created", { id: "error" });
                    navigate('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorMessage.includes("email-already-in-use")) {
                        toast.error("Already Exist", { id: "error" });
                    } else {
                        toast.error(errorMessage, { id: "error" });
                    }
                });
        }
    };


    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Sign Up</h1>
                <form onSubmit={handleSignup}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input onBlur={(e) => handleEmail(e.target.value)} type='email' name='email' id='email' />
                        </div>
                        {
                            email?.error && <p className="text-danger">{email.error}</p>
                        }
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input onBlur={(e) => handlePassword(e.target.value)} type='password' name='password' id='password' />
                        </div>
                        {
                            password?.error && <p className="text-danger">{password.error}</p>
                        }
                    </div>
                    <div className='input-field'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <div className='input-wrapper'>
                            <input onBlur={(e) => handleConfirmPassword(e.target.value)}
                                type='password'
                                name='confirmPassword'
                                id='confirm-password'
                            />
                        </div>
                        {
                            confirmPassword?.error && <p className="text-danger">{confirmPassword.error}</p>
                        }
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Sign Up
                    </button>
                </form>
                <p className='redirect'>
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}>Login</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button onClick={googleAuth} className='google-auth'>
                        <p> Continue with Google </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;