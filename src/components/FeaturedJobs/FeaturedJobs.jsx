import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import './FeaturedJobs.css';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('public/Json/Jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div className='featured-jobs'>
            <h2 className='section-title'>Featured Jobs</h2>
            <p className='section-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='featured-jobs-container'>
                {
                    jobs.map(job => <FeaturedJob
                        key={job.id}
                        job={job}
                    ></FeaturedJob>)
                }
            </div>
            <button className='btn-detail'>SEE ALL JOBS</button>
        </div>
    );
};

export default FeaturedJobs;