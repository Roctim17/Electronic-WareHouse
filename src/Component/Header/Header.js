import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
// import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase.init';

const Header = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, [])


    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/"><h1>Electronic</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">


                            <Link className="btn nav-link" to="/">HOME</Link>
                            <Link className="btn nav-link" to="/about">ABOUT</Link>
                            <Link className="btn nav-link" to="/product">PRODUCT</Link>
                            {/* {
                                user?.uid ? (<Link className="btn nav-link" to="/AddNewProduct">ADD PRODUCT</Link>
                                ) : ('')

                            } */}
                            {
                                user?.uid ? (
                                    <Link className="btn nav-link" to="/manage">MANAGE PRODUCT</Link>) : ('')

                            }
                            {
                                user?.uid ? (
                                    <Link className="btn nav-link" to="/myProduct">MY PRODUCT</Link>) : ('')

                            }

                            <Link className="btn nav-link" to="/blog">BLOG</Link>

                            {
                                user?.uid ? (
                                    <button onClick={handleLogOut} className='btn '>LOG OUT <i className="fas fa-sign-out-alt" ></i></button>
                                ) : (
                                    <Link className="btn nav-link" to="/login" >LOGIN</Link>
                                )

                            }


                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;