import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SchoolStaff from '../SchoolStaff/SchoolStaff';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

import image1 from './dilfire.png'
import image2 from './pic1 (1).jpg'
import image3 from './pic1 (2).jpg'
import image4 from './pic1 (3).jpg'

import './HomePage.css'

const HomePage = ({history}) => {

/* 

    let slideIndex = 0;

    function animateSlides() {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName('dot')

        if(slides.length > 0) {
            let i;
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                dots[i].classList.remove('active')
            }
            slideIndex++;
            if (slideIndex > slides.length) { 
                slideIndex = 1 
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].classList.add('active')

        }
      
       setTimeout(animateSlides, 5000)
    }
 */
    const userLogin = useSelector(state => state.userLogin)

    const { userInfo } = userLogin


    useEffect(() => {

        if(userInfo && userInfo.role === 'admin') {
            history.push('/admin')
        }
        if(userInfo && userInfo.role === 'teacher') {
            history.push('/teacher')
        }
        if(userInfo && userInfo.role === 'student') {
            history.push('/student')
        }
    } )

    return (
        <div className="slideshow-container">
           {/*  <div >
                <div className="mySlides fade">
                    <div className="numbertext">1 / 5</div>
                    <img src={image1} alt={image1} />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 5</div>
                    <img src={image2} alt={image2} />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 5</div>
                    <img src={image3} alt={image3} />
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">4 / 5</div>
                    <img src={image4} alt={image4} />
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">5 / 5</div>
                    <img src={image5} alt={image5} />
                </div>
            </div>
            <br />


            <div className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div> */}


            <Carousel axis='horizontal' swipeable useKeyboardArrows  autoPlay interval={3000} infiniteLoop>
                <div className="mySlides">
                    <img src={image1} alt={image1}></img>
                </div>
                <div className="mySlides">
                    <img src={image2} alt={image2}></img>
                </div>
                <div className="mySlides">
                    <img src={image3} alt={image3}></img>
                </div>
                <div className="mySlides">
                    <img src={image4} alt={image4}></img>
                </div>
                
            </Carousel>

            <SchoolStaff />
        </div>
    );
}


export default HomePage;