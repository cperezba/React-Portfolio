import React from 'react';
import "../css/style.css";

export default function AboutMe() {
  return (
    <div className="intro" id="home">
      <h1 class="section__title section__title--intro">
        Hi, I am <strong>Carlos Perez</strong> a Full-Stack
      </h1>
      <p class="section__subtitle section__subtitle--intro">Web-Developer</p>
      {/* <img src="./assets/Profile-Pic/IMG_20210526_230851_102.jpg" alt="Carlos Perez' Profile Picture" style="display:block; width: 120px;border: 8px solid #2c2f3f; border-radius: 50%; position: relative; right: 45px;" class="intro__img"></img> */}
    </div>
  );
}
