import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase.init';
import './login.css';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const Login = () => {
    const navigate = useNavigate();

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate('/')
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }





    return (
        <div className="row">
            <div className="col-md-12 col-sm-12">
                <div className='auth-form-container '>
                    <div className='auth-form'>
                        <h1>Login</h1>
                        <form onClick={handleLogin}>
                            <div className='input-field'>
                                <label htmlFor='email'>Email</label>
                                <div className='input-wrapper'>
                                    <input type='text' name='email' id='email' />
                                </div>
                            </div>
                            <div className='input-field'>
                                <label htmlFor='password'>Password</label>
                                <div className='input-wrapper'>
                                    <input type='password' name='password' id='password' />
                                </div>
                            </div>
                            <p >
                                Forgot Password?  <Link to='#'>Reset Password </Link>
                            </p>
                            <button type='submit' className='auth-form-submit'>
                                Login
                            </button>
                        </form>
                        <p className='redirect'>
                            New to electronic warehouse?{" "}
                            <span onClick={() => navigate("/signup")}>Create New Account</span>
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
            </div>
        </div>
    );
};

export default Login;