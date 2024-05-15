import React from 'react';
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Header.scss";
import logo from '../../assets/logo/Logo.webp'

const Header = () => {
    console.log("in header");
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__container-main">
                    <div className="navbar__logo-container">
                        <NavLink to="/">
                            <img src={logo} className="navbar__img" alt="blood Donation" />
                        </NavLink>
                    </div>
                    <div className="navbar__name-container">
                        <h3>
                            Blood United
                        </h3>
                    </div>
                </div>
                <div className="navbar__links">
                    <ul className="navbar__list">
                        <li>
                            <NavLink to="/login" className="navbar__link navbar__warehouses--active" >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className="navbar__link navbar__inventory--active">
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;