import React from 'react';

const AppliedJob = ({ savedJob }) => {
    const { image_url, job_title, full_name, keywords, office_location, salary } = savedJob;
    return (
        <div>
            <img src={image_url} alt="" />
            <h2>{job_title}</h2>
            <p>{full_name}</p>
            <p>{keywords}</p>
            <p>{office_location}</p>
            <p>{salary}</p>
        </div>
    );
};

export default AppliedJob;