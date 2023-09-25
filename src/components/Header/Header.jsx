import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { FiAlignCenter } from 'react-icons/fi';

const Header = () => {
    const [nav, setNav] = useState(true);

    const handleResponsiveNav = () => {
        setNav(!nav);
    }

    return (
        <nav>
            <div onClick={handleResponsiveNav} className='nav-responsive-icons'>
                {
                    nav ?
                        <FiAlignCenter style={{padding: '18px'}}/>
                        : <RxCross1  style={{padding: '18px'}}/>
                }
            </div>
            <div className={`nav-items ${nav ? "hidden" : "visible"}`} >
                <NavLink className='nav-home-btn a' to="/">DownDal</NavLink>
                <div className='nav-btn-group'>
                    <NavLink className='nav-btn a' to="/statistics">Statistics</NavLink>
                    <NavLink className='nav-btn a' to="/jobs">Applied Jobs</NavLink>
                </div>
                <Link><button to="/" className='nav-apply-btn'>Star Applying</button></Link>
            </div>
        </nav>
    );
};

export default Header;