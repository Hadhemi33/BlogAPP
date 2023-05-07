import React from "react";
import "./style.css";
import { Button } from "@material-ui/core";
export default function Contact() {
  return (
    <div className="Container">
      <div className="contact">
        <h3>Contact Us</h3>
        <div className="contact-content">
          <div className="contact-left">
            <p>
              <span>ADDRESS </span>
              <br />
              08 Rue Newton, Ariana <br /> 2088 Tunisia
            </p>
            <p>
              <span>PHONE</span>
              <br />
              +216 123 456 789
            </p>
            <p>
              <span>EMAIL</span>
              <br />
              contact@memo.tn
            </p>
          </div>

          <div className="contact-right">
            <form className="contact-form">
              <input
                type="text"
                className="contact-form-text"
                placeholder="Your name"
              />
              <input
                type="email"
                className="contact-form-text"
                placeholder="Your email"
              />
              <input
                type="text"
                className="contact-form-text"
                placeholder="Your phone"
              />
              <textarea
                className="contact-form-text"
                placeholder="Your message"
              ></textarea>
              <Button
                style={{
                  backgroundColor: "#7fb986",
                }}
                variant="contained"
                type="submit"
                className="contact-form-btn"
                value="Send"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
