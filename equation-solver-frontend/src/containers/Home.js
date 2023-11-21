import React from 'react';
import { Link } from 'react-router-dom';
import tools from "../img/Maths.jpeg";
import img1 from "../img/Attachment.jpeg";
import img2 from "../img/box.jpeg";
import img3 from "../img/Drive.jpeg";

const Home = () => (
    <div className='container'>
        <div class='jumbotron mt-5'>
            <h1 class='display-4'>Handwritten Equation Solver</h1>
            <p class='lead'>Welcome to InkedMathGenius. Upload math challenges and get quick, accurate solutions.</p>
            <hr class='my-4' />
            <Link to="/about">
                <button className="btn">Choose file</button>
            </Link>
            <div className="choosing-file">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            <div className="home-bannerImage-container">
                    <img src={tools} alt="" />
                </div>
        </div>
    </div>
);

export default Home;