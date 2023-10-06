import React, { useEffect, useState } from 'react';
import { getStoredJobApplication } from '../utilities/fakeDb';
import AppliedJob from '../AppliedJob/AppliedJob';
import { Helmet } from 'react-helmet-async';

const AppliedJobs = () => {
    const savedDb = getStoredJobApplication();

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('Jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    let savedJobs = [];

    for (const id of savedDb) {
        const savedJob = jobs.find(job => job.id == id);
        if (savedJob) {
            savedJobs.push(savedJob);
        }
    }
    return (

        <div>
            <Helmet>
                <title>DownDal | Applied Jobs</title>
            </Helmet>
            <h2 style={{ marginBottom: '150px' }} className='section-title'>Job Details</h2>
            <div className='applied-Jobs' style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center' }}>
                <div>
                    {
                        savedJobs.length === 0 || savedJobs.map(savedJob => <AppliedJob
                            savedJob={savedJob}
                        ></AppliedJob>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;