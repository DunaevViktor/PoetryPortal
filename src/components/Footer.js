import React from "react";
import "./Footer.css";

const Links = {
  twitter: "https://twitter.com/viktor_dunaev",
  facebook: "https://www.facebook.com/geras.lord",
  vk: "https://vk.com/viva_belarus_mc",
  instagram: "https://www.instagram.com/viktordunaev"
};

const Footer = function() {
  return (
    <footer id="poetry-portal-footer">
      <a href={Links.facebook} className="footer-button-float">
        <i className="fab fa-facebook-square fa-3x" />
      </a>

      <a href={Links.twitter} className="footer-button-float">
        <i className="fab fa-twitter-square fa-3x" />
      </a>

      <a href={Links.vk} className="footer-button-float">
        <i class="fab fa-vk fa-3x" />
      </a>

      <a href={Links.instagram} className="footer-button-float">
        <i class="fab fa-instagram fa-3x" />
      </a>
    </footer>
  );
};

export default Footer;
