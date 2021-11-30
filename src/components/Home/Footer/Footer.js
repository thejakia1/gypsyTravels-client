import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-color">
            <div className="container">
                <div className="row mt-5 mb-3 pt-5 text-center ">
                    <div className="col-md-6">
                        <h1 className="fw-bold m-2">GypsyTravels</h1>
                        <h5 className="mt-3">Chittagong, Bangladesh</h5>
                        <p>info@gmail.com</p>
                        <p>+880 1755555555</p>

                    </div>
                    <div className="col-md-3">
                        <h2 className="fw-bold">Destinations</h2>
                        <h6 className="mt-3">Private Villas</h6>
                        <h6>Resorts</h6>
                        <h6>Luxary Charters</h6>
                        <h6>Guest Houses</h6>
                        <h6>City Hotels</h6>
                    </div>
                    <div className="col-md-3 footer-link">
                        <h2 className="fw-bold">Quick Links</h2>
                        <a href="/"><h6>Privacy Policy</h6></a>
                        <a href="/"><h6>Discussion</h6></a>
                        <a href="/"><h6>Terms & Conditions</h6></a>
                        <a href="/"><h6>Customer Support</h6></a>
                    </div>
                    <div className="mt-4">
                        <p>© Copyright 2021, GypsyTravels | All Rights Reserved by Jakia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;