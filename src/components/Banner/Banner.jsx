import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner'>
            <div className='banner-info'>
                <h1 className='banner-title'>One Step Closer To Your<br></br><span className='banner-title-span'>Dream Job</span></h1>
                <p className='banner-description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button><span class="text">Get Started</span></button>
            </div>
        </section>
    );
};

export default Banner;