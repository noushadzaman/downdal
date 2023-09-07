import React from 'react';
import './FeaturedJob.css';

const FeaturedJob = ({ job }) => {
    const { image_url, job_title, full_name, keywords, office_location, salary } = job;

    const location = office_location.split(",");
    return (
        <div className='featured-job'>
            <img className='featured-job-image' src={image_url} alt="" />
            <h2 className='featured-job-title'>{job_title}</h2>
            <p className='featured-job-name'>{full_name}</p>
            {
                keywords.map(keyword => <button className='keyword'>{keyword}</button>)
            }
            <div className='icon-title-container'>
                <div className='icon-title'>
                    <img src="../../../public/images/Icons/Frame-4.png" alt="" />
                    <p>{location[0]}</p>
                </div>
                <div className='icon-title'>
                    <img src="../../../public/images/Icons/Frame.png" alt="" />
                    <p>{`Salary: ${salary[0]}K - ${salary[1]}K`}</p>
                </div>
            </div>
            <button className='btn-detail'>View Details</button>
        </div>
    );
};

export default FeaturedJob;