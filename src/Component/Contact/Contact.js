import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className=''>
            <div className="p-3 pb-5" id="contact">
                <h1 className='pt-3 pb-3'>Contact Us</h1>
                <div className="container">

                    <div className="half-width rightside">
                        <h3>Get in touch</h3>
                        <div className="contact-box">
                            <input className="contact text-light" type="text" placeholder="Name" />
                            <input className="contact text-light" type="email" placeholder="Email" />
                        </div>
                        <div>
                            <input className="contact project text-light" type="text" placeholder="Project" />
                        </div>
                        <div>
                            <textarea className="contact project text-light" name="" id="" cols="30" rows="10"
                                placeholder="Message"></textarea>
                        </div>
                        <input className="contact text-light w-50" type="button" value="Send Message" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;