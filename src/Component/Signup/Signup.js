import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase.init';




const Signup = () => {
    const [registered, setRegistered] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();




    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);


    const handleNameBlur = (e) => {
        setName(e.target.value);
    }
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleRegisteredChange = e => {

        console.log(e.target.checked);
        setRegistered(e.target.checked);
    }
    if (user) {
        navigate('/')
    }

    const handleCreateUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Confirm Password did not match')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    // User for Google sign in
    const [userGoogle, setUserGoogle] = useState({});
    const provider = new GoogleAuthProvider();

    const handleGoogleSignUp = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUserGoogle(user);

            })
            .catch(error => {
                console.log('error', error)
            })
    }
    return (
        <div className='signin'>
            <h1>Sign Up</h1>
            <div className=" row">
                <div className="col-md-7 col-sm-12">
                </div>
                <div className="col-md-4 col-sm-12 form p-5">
                    <Form onSubmit={handleCreateUser} className='w-100 m-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control onBlur={handleNameBlur} type="name" placeholder="Enter Your Name" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" />
                            <Form.Text className="text-danger">
                                <p>{error}</p>
                            </Form.Text>
                            <Form.Text className="text-light">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button onChange={handleRegisteredChange} variant="primary" type="submit" className='w-100'>
                            Sign Up
                        </Button>
                        <p>
                            Already Have an Account? <Link to='/login'>Log in</Link>
                        </p>
                        <div className="p-3 or">or</div>
                        <Button onClick={handleGoogleSignUp} variant="light" type="submit" className='w-100'>
                            <img src="/image/google.png" alt="" width={'25px'} />
                            Sign Up With Google
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Signup;