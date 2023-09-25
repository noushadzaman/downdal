import React, { useEffect, useState } from 'react';
import { getStoredJobApplication } from '../utilities/fakeDb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const savedDb = getStoredJobApplication();





    const [selectedOption, setSelectedOption] = useState('option1'); // Set the default selected option

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };



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
    console.log(savedJobs);
    return (

        <div>
            <h2 style={{ marginBottom: '150px' }} className='section-title'>Job Details</h2>


            <div className='applied-Jobs'>
          
                {
                    // if(savedJobs.length === 0){}
                    savedJobs.length === 0 || savedJobs.map(savedJob => <AppliedJob
                        savedJob={savedJob}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;