import React, { useContext, useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { FaAlignLeft } from 'react-icons/fa';
import { AuthContext } from '../Hook/AuthProvider';

const Header = () => {
    const [nav, setNav] = useState(true);

    const { user, logOut } = useContext(AuthContext);

    const handleResponsiveNav = () => {
        setNav(!nav);
    }

    return (
        <nav>
            <div onClick={handleResponsiveNav} className='nav-responsive-icons'>
                {
                    nav ?
                        <FaAlignLeft style={{ padding: '18px' }} />
                        : <ImCross style={{ padding: '18px' }} />
                }
            </div>
            <div className={`nav-items ${nav ? "hidden" : "visible"}`} >
                <NavLink className='nav-home-btn a' to="/">DownDal</NavLink>
                <div className='nav-btn-group'>
                    <NavLink className='nav-btn a' to="/statistics">Statistics</NavLink>
                    <NavLink className='nav-btn a' to="/jobs">Applied Jobs</NavLink>
                    {
                        !user &&
                        <NavLink className='nav-btn a' to="/login">Login</NavLink>
                    }
                    {
                        !user &&
                        <NavLink className='nav-btn a' to="/register">Register</NavLink>
                    }
                </div>
                {
                    user ?
                   <button onClick={logOut} className='nav-apply-btn'>Log Out</button>
                    : <Link><button to="/" className='nav-apply-btn'>Star Applying</button></Link>
                }
            </div>
        </nav>
    );
};

export default Header;