import React from 'react';
import  { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="flexContainer">
        <div className="infos">
          <ul>
            <h3>Contact et accès</h3>
            <li>Adresse: 18 Avenue des verbes, 83400 Hyères</li>
            <li>
              Télephone: <a href="tel">09 78 45 23 54</a>
            </li>
            <li>Parking restaurant</li>
          </ul>
        </div>

        <div className="horaires">
          <ul>
            <h3>Horaires d'ouverture</h3>
            <li>
              Lundi - Vendredi :<br />
              12h00-15h00 18h00-22h30
            </li>
            <li>
              Samedi - Dimanche :<br />
              12h00-15h00
            </li>
          </ul>
        </div>

        <div className="links">
          <NavLink
            className={(navData) => (navData.isActive ? "nav-active" : "")}
            to="/"
          >
            Accueil
          </NavLink>

          <NavLink
            className={(navData) => (navData.isActive ? "nav-active" : "")}
            to="/Carte"
          >
            Carte
          </NavLink>

          <NavLink
            className={(navData) => (navData.isActive ? "nav-active" : "")}
            to="/Galerie"
          >
            Galerie
          </NavLink>

          <NavLink
            className={(navData) => (navData.isActive ? "nav-active" : "")}
            to="/Reservation"
          >
            Reservation
          </NavLink>

          <NavLink
            className={(navData) => (navData.isActive ? "nav-active" : "")}
            to="/Contact"
          >
            Contact
          </NavLink>
        </div>

        <div className="rs">
          <img src="https://img.icons8.com/fluency/30/000000/facebook-circled.png" />
          <img src="https://img.icons8.com/offices/30/000000/instagram-new.png" />
          <img src="https://img.icons8.com/color/30/000000/tripadvisor.png" />
        </div>
      </div>
      <div className="mentions">
        <a href="##">Mentions légales</a>
        <p>
        Copyright © 2022 Restaurant Brasserie, Le Voltaire - Tous droits
        réservés
      </p>
      </div>
      
    </div>
  );
};

export default Footer;