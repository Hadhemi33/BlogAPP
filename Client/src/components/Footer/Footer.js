import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Memo Tunisia</h3>
        <p>
          Made with <span className="heart">&#10084;</span> by Rohit and Payal
        </p>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; copyright 2023 <a href="#">Memo Tunisia</a>{" "}
        </p>
      </div>
    </footer>
  );
}
