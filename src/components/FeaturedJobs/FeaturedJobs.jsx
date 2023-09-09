import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import './FeaturedJobs.css';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [allJobs, setAllJobs] = useState(false);

    useEffect(() => {
        fetch('public/Json/Jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    // let seeAllJobs = false;

    const seeAllJobsFunc = () => {
        setAllJobs(!allJobs);
    }

    return (
        <div className='featured-jobs'>
            <h2 className='section-title'>Featured Jobs</h2>
            <p className='section-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='featured-jobs-container'>
                {
                    allJobs ? jobs.map(job => <FeaturedJob
                        key={job.id}
                        job={job}
                    ></FeaturedJob>) : jobs.slice(0, 4).map(job => <FeaturedJob
                        key={job.id}
                        job={job}
                    ></FeaturedJob>)
                }
            </div>
            <button onClick={() => seeAllJobsFunc()} className='btn-detail'>SEE ALL JOBS</button>
        </div>
    );
};

export default FeaturedJobs;