import React from "react";
import './Logo.css';
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <div className="logo">
      <Link to='/'>Blog Site</Link>
    </div>
  );
};

export default Logo;
