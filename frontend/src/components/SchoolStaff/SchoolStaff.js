import React from 'react';
import image from '../SchoolStaff/diagram.png'

import './SchoolStaff.css'

const SchoolStaff = () => {
    return (
        <div className="school-information-container">
            <div className="school-staff">

                <div className="title-container">
                    <h1>The School Staff</h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo .Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo .Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit. Aenean commodo .Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo .Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean commodo .Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo .Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean commodo .Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit. Aenean commodo .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo .</p>

                <div className="staff-image">
                    <div>
                        <img src={image} alt={image} />
                    </div>
                    <div>
                        <p>
                           <h4>There are 1892 students</h4>
                            <h5>- 878’s are males and</h5>
                            <h5>- 1014’s are females</h5>
                        </p>
                           
                    </div>

                </div>


            </div>


            <div className="mission-vision-goal" id="mission">
                <div className="mission">
                    <h1>Our Mission</h1>
                    <p>Improving student’s score by 10% annually.
                        Fully implementation of millennium development goals on the sector of
                        education. Decreasing illiteracy rate in the society.
                        Forward development of the country.

                    </p>
                </div>

                <div className="vision">
                    <h1>Our Vision</h1>
                    <p> Eradicate illiteracy from the society.
                        Generate civic minded society.
                        Implementing diversity.
                        Modernizing learning and teaching system.</p>
                </div>

                <div>
                    <h1>Our Goal</h1>
                    <p>To create well disciplined, knowledgeable and self-confident citizen.</p>
                </div>
            </div>

            <div className="school-background">

                <h1>Background</h1>
                <p>
                    Dilfire elementary school is one of the most known education centers. It is
                    found in Oromia region Jimma town in Bossa Addis kebele. It was established in
                    1979 E.c. when we see its historical background it have passed some
                    improvements through the time.

                </p>
            </div>

        </div>

    );
}


export default SchoolStaff;