import React from "react";
import Form from "./Form";
import SVGBG from "../common/svg/bg/SVGBG";

export default function Contact() {
  return (
    <main className="contact">
      <h1>Une question ? Contactez-moi ici !</h1>

      <div className="contact-form-container">
        <Form />
        <div className="social">
          <a
            href="https://www.linkedin.com/in/kenny-delver/"
            className="square-link linkedin"
            target="_blank"
            rel="noreferrer"
          >
            in
          </a>

          <a
            href="mailto:kennycoder971@gmail.com"
            className="square-link linkedin"
          >
            @
          </a>
        </div>
      </div>
      <SVGBG />
    </main>
  );
}
