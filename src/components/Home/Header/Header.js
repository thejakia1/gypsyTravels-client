import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="header">
            <Navbar bg="success" variant="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>
                     <h3 className="fw-bold ms-1 text-white">GypsyTravels</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                        <Nav className="ms-auto">
                            <NavLink className="text-decoration-none text-white fs-6 ms-4 fw-bold" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none text-white fs-6 ms-4 fw-bold" to="/tours">Tours</NavLink>
                            <NavLink className="text-decoration-none text-white fs-6 ms-4 fw-bold" to="/deals">Deals</NavLink>
                            <NavLink className="text-decoration-none text-white fs-6 ms-3 fw-bold" to="/rewards">Rewards</NavLink>
                            {
                                user.email && <span className="text-white fw-bold ms-4 me-1">{user.displayName}</span>
                            }
                            {
                                user.email?
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="text-white fw-bold ms-3 text-center">
                                    <i className="fas fa-user me-2 text-white"></i>Profile
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="bg-light">
                                       <Dropdown.Item><NavLink className="text-decoration-none text-success" to="/myBooking"><i className="fas fa-clipboard-list me-2"></i>My Booking</NavLink></Dropdown.Item>
                                       <Dropdown.Item><NavLink className="text-decoration-none text-success" to="/manageBooking"><i className="fas fa-tasks me-2"></i>Manage Booking</NavLink></Dropdown.Item>
                                       <Dropdown.Item><NavLink className="text-decoration-none text-success" to="/addTour"><i className="fas fa-folder-plus me-2"></i>Add a new Tour</NavLink></Dropdown.Item>
                                       <Dropdown.Item onClick={logOut} className="text-success"><i className="fas fa-sign-out-alt me-2 text-success"></i>Sign Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                :
                                <NavLink className="text-decoration-none text-white fs-6 ms-3 fw-bold btn btn-success btn-sm" to="/signin"><i className="fas fa-sign-in-alt me-2 text-white"></i>Sign In</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;