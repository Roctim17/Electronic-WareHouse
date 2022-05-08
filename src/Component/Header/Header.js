import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
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
                    <Link className="navbar-brand" to="/">WareHouse</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/blog">Blog</Link>
                            <Link className="nav-link" to="/product">Product</Link>
                            <Link className="nav-link" to="/manage">Manage</Link>
                            {user?.uid ? (
                                <button onClick={handleLogOut} className='btn btn-danger'>Log Out <i className="fas fa-sign-out-alt" ></i></button>
                            ) : (<Link className="nav-link" to="/login" >Login</Link>)


                            }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;