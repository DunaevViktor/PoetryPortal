import React from "react";
import "./Footer.css";

const arrayOfLinks = {
  twitter: "https://twitter.com/viktor_dunaev",
  facebook: "https://www.facebook.com/geras.lord",
  vk: "https://vk.com/viva_belarus_mc",
  instagram: "https://www.instagram.com/viktordunaev"
};

const Footer = function() {
  return (
    <footer id="poetry-portal-footer">
      <form action={arrayOfLinks.facebook}>
        <button type="submit" className="btn btn-light footer-button-float">
          <i className="fab fa-facebook-square fa-3x" />
        </button>
      </form>

      <form action={arrayOfLinks.twitter}>
        <button type="submit" className="btn btn-light footer-button-float">
          <i className="fab fa-twitter-square fa-3x" />
        </button>
      </form>

      <form action={arrayOfLinks.vk}>
        <button type="submit" className="btn btn-light footer-button-float">
          <i class="fab fa-vk fa-3x" />
        </button>
      </form>

      <form action={arrayOfLinks.instagram}>
        <button type="submit" className="btn btn-light footer-button-float">
          <i class="fab fa-instagram fa-3x" />
        </button>
      </form>
    </footer>
  );
};

export default Footer;
