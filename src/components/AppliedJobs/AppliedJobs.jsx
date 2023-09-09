import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakeDb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const savedDb = getShoppingCart();

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('public/Json/Jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    let savedJobs = [];

    for (const id in savedDb) {
        const savedJob = jobs.find(job => job.id == id);
        if (savedJob) {
            savedJobs.push(savedJob);
        }
    }
    console.log(savedJobs);
    return (

        <div>
            <h2 style={{marginBottom : '150px'}} className='section-title'>Job Details</h2>
            <div className='applied-Jobs'>
                {
                    // if(savedJobs.length === 0){}
                  savedJobs.length===0 || savedJobs.map(savedJob => <AppliedJob
                  savedJob={savedJob}
                  ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;