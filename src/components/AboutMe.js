import React from 'react';
import author from '../assets/profile-pic.jpg';

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="Author" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quis, aperiam et reprehenderit sed mollitia minima corrupti, recusandae doloremque alias inventore voluptas ratione? Alias vel facilis ullam non cupiditate minus odit iure mollitia commodi voluptate nihil quasi labore laudantium rem quis dolor maxime, distinctio reiciendis nobis velit? Vel repellat dicta corporis voluptates eius culpa eum vero id tempore, nihil laborum magni pariatur exercitationem ad quisquam corrupti quo iure laudantium obcaecati sequi, hic impedit ab accusamus. Aspernatur voluptatem officia, praesentium ad necessitatibus pariatur alias et nostrum aliquid culpa ex, natus magnam repellendus voluptas quas molestias sit porro ipsum accusamus. Tempora, quisquam?</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
