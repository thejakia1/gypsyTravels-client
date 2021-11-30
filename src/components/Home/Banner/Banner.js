import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="bg-img min-h-screen text-center flex items-center justify-center">
                {/* <img src={banner1} className="img-fluid" alt="" /> */}

            </div>
            <div className="header-description">
                <h1 className="banner-title">We're one of the largest travel companies</h1>
                <Link to="/home"><button className="btn btn-success fw-bold p-3">BOOK NOW</button></Link>
            </div>
        </div>
    );
};

export default Banner;