import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Memo Tunisia</h3>
        <p>
          Made with <span class="heart">&#10084;</span> by  H2 I2
        </p>
      
      </div>
      <div className="footer-bottom">
        <p>
        &copy; copyright 2023  <a href="#">Memo Tunisia</a>{" "}
        </p>
     
      </div>
    </footer>
  );
}
