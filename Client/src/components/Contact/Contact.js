import React from 'react'
import "./style.css";
export default function Contact() {
    return (
        <div>
            <div className="contact">
                <h3>Contact Us</h3>
                <div className="contact-content">
                    <div className="contact-left">
                        <p>
                            <span>ADDRESS </span><br />
                            08 Rue Newton, Ariana <br/> 2088 Tunisia
                           
                        </p>
                        <p>
                            <span>PHONE</span><br />
                            +216 123 456 789
                        </p>
                        <p>
                            <span>EMAIL</span><br />
                          contact@memo.tn
                           
                        </p>


                    </div>
                    
                    <div className="contact-right">
                        <form className="contact-form">
                            <input type="text" className="contact-form-text" placeholder="Your name" />
                            <input type="email" className="contact-form-text" placeholder="Your email" />
                            <input type="text" className="contact-form-text" placeholder="Your phone" />
                            <textarea className="contact-form-text" placeholder="Your message"></textarea>
                            <input type="submit" className="contact-form-btn" value="Send" />
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}
