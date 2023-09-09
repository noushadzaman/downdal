import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link className='nav-home-btn' to="/">DownDal</Link>
            <div className='nav-btn-group'>
                <Link className='nav-btn' to="/statistics">Statistics</Link>
                <Link className='nav-btn' to="/jobs">Applied Jobs</Link>
                <Link className='nav-btn' to="/blog">Blog</Link>
            </div>
            <Link><button to="/" className='nav-apply-btn'>Star Applying</button></Link>
        </nav>
    );
};

export default Header;