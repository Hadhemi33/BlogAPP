import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Food Junction</h3>
        <p>
          Made with <span className="heart">&#10084;</span> by Rohit and Payal
        </p>
        <ul className="socials">
          <li>
            <a href="#"></a>
          </li>

          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">food Junction</a>{" "}
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
