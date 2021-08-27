import React from 'react';
// import "../css/style.css"

export default function About() {
  return (
    <div className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">Full-Stack Web Developer in Training!</p>


      <div className="about-me__body">
        <p>My name is Carlos and I am a Full-Stack Web Developer in Training! Bootcamp attendant at the University of Texas at Austin, I am working hard in becoming a fully fledged full-stack web developer</p>
        <p>Currently enjoying every bit of my bootcamp journey, I am currently versed in everything from the trio-suite of HTML, CSS, and Javascript to MySQL, MongoDB, and MVC. Genuinely looking forward to mastering React and showcasing more projects in the future!</p>
      </div>

      <img src="" alt="" class="about-me__img" ></img>
    </div>
  );
};
