import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">CareerHub</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/jobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
        </div>
    );
};

export default Header;