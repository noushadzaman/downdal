import React from 'react';
import './AppliedJob.css'
import { Helmet } from 'react-helmet-async';

const AppliedJob = ({ savedJob }) => {
    const { image_url, job_title, full_name, keywords, office_location, salary } = savedJob;
    return (
        <div className='applied-job'>
            <img className='applied-job-image' src={image_url} alt="" />

            <div>
                <h2 className='featured-job-title'>{job_title}</h2>
                <p className='featured-job-name'>{full_name}</p>
                {
                    keywords.map(keyword => <button className='keyword'>{keyword}</button>)
                }
                <p className='featured-job-name'>{office_location}</p>
                <div className='icon-title-container'>
                    <div className='icon-title'>
                        <img src="public/images/Icons/Frame-4.png" alt="" />
                        <p>{office_location}</p>
                    </div>
                    <div className='icon-title'>
                        <img src="public/images/Icons/Frame.png" alt="" />
                        <p>{`Salary: ${salary[0]}K - ${salary[1]}K`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;