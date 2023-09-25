import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2>OPPSSS............</h2>
            <Link to="/">Go Home</Link>
        </div>
    );
};

export default ErrorPage;