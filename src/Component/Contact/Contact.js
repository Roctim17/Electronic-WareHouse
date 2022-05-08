import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="p-3" id="contact">
                <h1>Contact Me</h1>
                <div className="container">

                    <div className="half-width rightside">
                        <h3>Get in touch</h3>
                        <div className="contactbox">
                            <input className="contact" type="text" placeholder="Name" />
                            <input className="contact" type="email" placeholder="Email" />
                        </div>
                        <div>
                            <input className="contact project" type="text" placeholder="Project" />
                        </div>
                        <div>
                            <textarea className="contact project" name="" id="" cols="30" rows="10"
                                placeholder="Message"></textarea>
                        </div>
                        <input className="button" type="button" value="Send Message" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;