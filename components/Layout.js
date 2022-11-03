import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import ScrollTop from "./ScrollTop";

const Layout = (props) => {
  return (
    <>
      <div className="layout__container">
        {props.children}
        <Sidebar />
      </div>
      <div className="layout__footer">
        <ScrollTop />
        <div className="footer__title">
          <Link to="/">Blog Site</Link>
        </div>
        <div className="footer__social">
          <ul className="header__social--list social__icons">
            <li className="header__social--list__item">
              <a
                href="https://www.linkedin.com/in/christopheralee22/"
                className="header__social--list__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="header__social--list__item">
              <a
                href="https://twitter.com/chrisl222"
                className="header__social--list__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="header__social--list__item">
              <a
                href="https://www.instagram.com/chrisalee222/"
                className="header__social--list__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="header__social--list__item">
              <a
                href="https://www.facebook.com/chrisalee222/"
                className="header__social--list__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li className="header__social--list__item">
              <a
                href="https://github.com/chrisalee"
                className="header__social--list__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Layout;
