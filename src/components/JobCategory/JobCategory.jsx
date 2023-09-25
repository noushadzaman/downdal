import React, { useEffect, useState } from 'react';
import './JobCategory.css';
import JobCategoryDiv from '../JobCategoryDiv/JobCategoryDiv';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('Categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <section className='job-categories'>
            <h2 className='section-title'>Job Category List</h2>
            <p className='section-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='job-categories-container'>
                {
                    categories.map(category => <JobCategoryDiv
                        key={category.id}
                        category={category}
                    ></JobCategoryDiv>)
                }
            </div>
        </section>
    );
};

export default JobCategory;