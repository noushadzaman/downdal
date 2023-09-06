import React from 'react';
import './JobCategory.css';

const JobCategory = () => {
    return (
        <section className='job-categories'>
            <h2 className='job-categories-title'>Job Category List</h2>
            <p className='job-categories-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='job-categories-container'>
                <div className='job-category'>
                    <img className='job-category-img' src="../../../public/images/Icons/accounts 1.png" alt="" />
                    <h2 className='job-category-title'>Account & Finance</h2>
                    <p className='job-category-description'>300 Jobs Available</p>
                </div>
                <div className='job-category'>
                    <img className='job-category-img' src="../../../public/images/Icons/business 1.png" alt="" />
                    <h2 className='job-category-title'>Creative Design</h2>
                    <p className='job-category-description'>100+ Jobs Available</p>
                </div>
                <div className='job-category'>
                    <img className='job-category-img' src="../../../public/images/Icons/social-media 1.png" alt="" />
                    <h2 className='job-category-title'>Marketing & Sales</h2>
                    <p className='job-category-description'>150 Jobs Available</p>
                </div>
                <div className='job-category'>
                    <img className='job-category-img' src="../../../public/images/Icons/chip 1.png" alt="" />
                    <h2 className='job-category-title'>Machine Learning</h2>
                    <p className='job-category-description'>224 Jobs Available</p>
                </div>
            </div>
        </section>
    );
};

export default JobCategory;