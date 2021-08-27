import React from 'react';
import "../css/style.css";


export default function Contact() {
  return (
    <div class="footer">
      <a href="mailto:ca.perez.barr.dev@gmail.com" class="footer__link">Contact Me</a>
      <ul class="social-list">
        <li class="social-list__item">
          <a href="mailto:ca.perez.barr.dev@gmail.com" class="social-list__link"><i
            class="far fa-envelope-open"></i></a>
        </li>
        <li class="social-list__item">
          <a href="./assets/documents/Carlos Perez Resume 2021.pdf" download="caPerez-Resume"
            class="social-list__link"><i class="far fa-file"></i></a>
        </li>
        <li class="social-list__item">
          <a href="https://www.linkedin.com/in/carlos-perez-48012820b" class="social-list__link"><i
            class="fab fa-linkedin"></i></a>
        </li>
        <li class="social-list__item">
          <a href="https://www.github.com/cperezba" class="social-list__link"><i class="fab fa-github"></i></a>
        </li>
      </ul>
    </div>
  );
}
