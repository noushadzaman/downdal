import React from 'react';
import './JobCategoryDiv.css';

const JobCategoryDiv = ({ category }) => {
    const { name, imageUrl, number } = category;
    return (
        <div className='job-category'>
            <img className='job-category-img' src={imageUrl} alt="" />
            <h2 className='job-category-title'>{name}</h2>
            <p className='job-category-description'>{number}+ Jobs available</p>
        </div>
    );
};

export default JobCategoryDiv;