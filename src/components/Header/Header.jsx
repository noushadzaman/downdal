import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink className='nav-home-btn' to="/">DownDal</NavLink>
            <div className='nav-btn-group'>
                <NavLink className='nav-btn' to="/statistics">Statistics</NavLink>
                <NavLink className='nav-btn' to="/jobs">Applied Jobs</NavLink>
            </div>
            <Link><button to="/" className='nav-apply-btn'>Star Applying</button></Link>
        </nav>
    );
};

export default Header;