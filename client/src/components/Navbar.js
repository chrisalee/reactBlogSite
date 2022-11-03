import React, { useState } from 'react';
import "./Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";

const Navbar = (props) => {

    const [input, setInput] = useState('');
    const [search, setSearch] = useState(false);

    const submitSearch = (event) => {
        event.preventDefault();
        alert("Searching");
        setInput('Search');
        setSearch(false);
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? "search__input active" : "search__input";

    return (
        <div className="navbar">
            <ul className="navbar__menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/">Posts</Link></li>
                {/* <li><Link to="/posts">Posts</Link></li> */}
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder="Search" />
                    <SearchIcon className="search__icon" onClick={openSearch}/>
                </form>
            </div>
        </div>
    )
}

export default Navbar
