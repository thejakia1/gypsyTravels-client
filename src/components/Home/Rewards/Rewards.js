import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Rewards.css'


const Rewards = () => {
    return (
        <div className="rewards">
            <div className="container text-center mx-auto mb-5 w-75">
                <h3 className="text-succes fw-bold">Tour Coins</h3>
                <h6 className="text-success fw-bold fst-italic">Travel smart by earning and redeeming Tour Coins! 100 Tour Coins = $1</h6>
                <h6 className="text-dark fst-italic"><span className="text-success">GypsyTravels</span> will use the real-time exchange rate from a designated open source to convert Tour Coins to USD at the time of transaction. Rates listed on this page are for reference only and subject to fluctuation based on the exchange rate.</h6>
            </div>
            <div className="container text-center mx-auto mt-5 mb-5 w-75">
                <h3 className="text-success fw-bold mt-2">How to Earn Tour Coins</h3>
                <div className="row row-col-lg-4 row-col-md-2 row-col-sm-1 mt-4 mb-5">
                    <div className="col mb-2">
                        <i className="fas fa-plane text-success fs-3"></i>
                        <h5 className="text-success fw-bold">Book Flights</h5>
                        <h6 className="text-secondary fst-italic">Earn 25 Tour Coins for every $100 spent on flights.</h6>
                    </div>
                    <div className="col mb-2">
                        <i className="fas fa-hotel text-success fs-3"></i>
                        <h5 className="text-success fw-bold">Book Hotels</h5>
                        <h6 className="text-secondary fst-italic">Earn 80 Tour Coins for every $100 spent on hotels.</h6>
                    </div>
                    <div className="col mb-1">
                        <i className="fas fa-camera text-success fs-3"></i>
                        <h5 className="text-success fw-bold">Post Tour Moments</h5>
                        <h6 className="text-secondary fst-italic">Earn up to a daily maximum of 515 Tour Coins.</h6>
                    </div>
                    <div className="col mb-2">
                        <i className="fas fa-pencil-alt text-success fs-3"></i>
                        <h5 className="text-success fw-bold">Write Attraction Reviews</h5>
                        <h6 className="text-secondary fst-italic">Earn up to 200 Tour Coins.</h6>
                    </div>
                </div>
            </div>
            <div className="container text-center mx-auto mt-5 mb-5 w-75">
                <h3 className="text-success fw-bold">How to Use Tour Coins</h3>
                <h6 className="text-success fw-bold fst-italic">You can use Tour Coins in the app to save instantly on bookings.</h6>
                <Carousel className="mt-4">
                    <Carousel.Item>
                       <img
                       className=" w-50 text-center"
                       src="https://i.ibb.co/0s3644V/colombo.jpg"
                       alt="First slide"
                       />
                    </Carousel.Item>
                    <Carousel.Item>
                       <img
                       className=" w-50 text-center"
                       src="https://i.ibb.co/Gd4XqbZ/cover-2.jpg"
                       alt="Second slide"
                       />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Rewards;