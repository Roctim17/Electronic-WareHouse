import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
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
                    <Link className="navbar-brand" to="/">Electronic WareHouse</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

                            <Nav>
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/blog">Blog</Link>
                                <Link className="nav-link" to="/product">Product</Link>
                                {
                                    user?.uid ? (<Link className="nav-link" to="/AddNewProduct">Add Product</Link>
                                    ) : ('')

                                }
                                {
                                    user?.uid ? (
                                        <Link className="nav-link" to="/manage">Manage Product</Link>) : ('')

                                }
                                {
                                    user?.uid ? (
                                        <Link className="nav-link" to="/myProduct">My Product</Link>) : ('')

                                }


                                {
                                    user?.uid ? (
                                        <button onClick={handleLogOut} className='btn btn-danger'>Log Out <i className="fas fa-sign-out-alt" ></i></button>
                                    ) : (
                                        <Link className="nav-link" to="/login" >Login</Link>
                                    )

                                }
                            </Nav>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;