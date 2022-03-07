import React from 'react';
import  { NavLink } from 'react-router-dom';
// import image from '../assets/restaurant.jpg';
import logo from '../assets/logo.png';

const Navigation = () => { 
  return (
  <div>
    <header>
      <nav className="navigation">
        <NavLink 
          className={(navData) => navData.isActive ? "nav-active" : ""} to="/">
          Le restaurant
        </NavLink>

        <NavLink 
          className={(navData) => navData.isActive ? "nav-active" : ""} to="/Carte">
          Notre Carte
        </NavLink>

        <NavLink 
          className={(navData) => navData.isActive ? "nav-active" : ""} to="/Galerie">
          Galerie
        </NavLink>

        <NavLink 
          className={(navData) => navData.isActive ? "nav-active" : ""} to="/Reservation">
          Reservation
        </NavLink>

        <NavLink 
          className={(navData) => navData.isActive ? "nav-active" : ""} to="/Contact">
          Contact
        </NavLink>
      </nav>
      <div className="logo">
      <img src={logo} />
     </div>
    </header>
  </div>
  );
};

export default Navigation;



