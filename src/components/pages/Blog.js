import React from 'react';
import "../css/style.css";



export default function Blog() {
  return (
    <div className="my-work" id="work">
      <h2 class="section__title section__title--work">My work</h2>
      <p class="section__subtitle section__subtitle--work">Some of my completed projects!</p>

      <div className="portfolio">
        <a href="portfolio-items\portfolio-item-1.html" className="portfolio__item">
          <img src="./assets/Rectangle 3-10.png" alt="" className="portfolio__img"></img>
        </a>



        <a href="portfolio-items/portfolio-item-2.html" className="portfolio__item">
          <img src="./assets/Rectangle 3-11.png" alt="" className="portfolio__img"></img>
        </a>



        <a href="portfolio-items/portfolio-item-3.html" className="portfolio__item">
          <img src="./assets/Rectangle 3-2.png" alt="" className="portfolio__img"></img>
        </a>
      </div>


    </div>
  );
}
