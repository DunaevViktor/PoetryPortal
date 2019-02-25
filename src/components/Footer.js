import React from "react";
import "./Footer.css";

const Links = [
  {
    name: "twitter",
    link: "https://twitter.com/viktor_dunaev",
    style: "fab fa-twitter-square fa-3x"
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/geras.lord",
    style: "fab fa-facebook-square fa-3x"
  },
  {
    name: "vk",
    link: "https://vk.com/viva_belarus_mc",
    style: "fab fa-vk fa-3x"
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/viktordunaev",
    style: "fab fa-instagram fa-3x"
  }
];

class Footer extends React.Component {
  render() {
    const list = [];
    for (let i = 0; i < Links.length; i++) {
      list.push(
        <a
          href={Links[i].link}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-button-float"
        >
          <i className={Links[i].style} />
        </a>
      );
    }

    return <div>${list}</div>;
  }
}

export default Footer;
