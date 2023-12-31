import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import './FeaturedJobs.css';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('Jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])


    return (
        <div className='featured-jobs'>
            <h2 className='section-title'>Featured Jobs</h2>
            <p className='section-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='featured-jobs-container'>
                {
                    jobs.slice(0, dataLength).map(job => <FeaturedJob
                        key={job.id}
                        job={job}
                    ></FeaturedJob>)
                }
            </div>
            <div>
             
                <button style={{ cursor: 'pointer' }} onClick={() => setDataLength(jobs.length)} className={dataLength === jobs.length && 'btn-hidden'}><span class="text">Get Started</span></button>
            </div>
        </div>
    );
};

export default FeaturedJobs;