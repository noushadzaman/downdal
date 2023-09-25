import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetail.css';
import { addToDb, getShoppingCart } from '../utilities/fakeDb';
import toast, { Toaster } from 'react-hot-toast';


const JobDetail = () => {
    const jobs = useLoaderData();
    const { jobId } = useParams();
    const idInt  = parseInt(jobId)
    const job = jobs.find(job => job.id === idInt);
    console.log(idInt, job);

    const { description, job_responsibility, educational_requirements, experience } = job;
    const { id, salary, phone, email, office_location } = job;

    const applyJob = (id) => {
        let appliedJobs = getShoppingCart();
        const quantity = appliedJobs[id];

        if (quantity === 1) {
            toast('Already Applied', {
                duration: 3000,
                position: 'top-right',
                icon: '⛔',
            });
        }
        else {
            addToDb(id);
            toast('You have applied', {
                duration: 3000,
                position: 'top-right',
                icon: '✅',
            });
        }
    };

    return (
        <div>
            <h2 className='section-title'>Job Details</h2>
            <div className='job-details-section'>
                <div className='job-details-info-container'>
                    <p className='job-details-info-bold'>Job Description: <span className='job-details-info-weak'>{description}</span></p>
                    <p className='job-details-info-bold'>Job Responsibility: <span className='job-details-info-weak'>{job_responsibility}</span></p>
                    <p className='job-details-info-bold'>Educational Requirements: <span className='job-details-info-weak'>{educational_requirements}</span></p>
                    <p className='job-details-info-bold'>Experiences: <span className='job-details-info-weak'>{`${experience} Years in this field`}</span></p>
                </div>
                <div className='job-details-apply-container'>
                    <div className='job-details-apply-container-info'>
                        <h2 style={{ marginTop: '32px', marginBottom: '24px' }}>Job Details</h2>
                        <hr className='hr' />
                        <div style={{ marginTop: '16px' }} className='icon-title'>
                            <img src="../images/Icons/Frame-4.png" alt="" />
                            <p>{office_location}</p>
                        </div>
                        <div style={{ marginTop: '16px' }} className='icon-title'>
                            <img src="../images/Icons/Frame.png" alt="" />
                            <p>{`Salary: ${salary[0]}K - ${salary[1]}K`}</p>
                        </div>
                        <h2 style={{ marginTop: '32px', marginBottom: '24px' }}>Contact Information</h2>
                        <hr className='hr' />
                        <div style={{ marginTop: '16px' }} className='icon-title'>
                            <img src="../images/Icons/Frame-2.png" alt="" />
                            <p>{`Phone: ${phone}`}</p>
                        </div>
                        <div style={{ marginTop: '16px' }} className='icon-title'>
                            <img src="../images/Icons/Frame-3.png" alt="" />
                            <p>{`Email: ${email}`}</p>
                        </div>
                        <div style={{ marginTop: '16px' }} className='icon-title'>
                            <img src="../images/Icons/Frame-4.png" alt="" />
                            <p>{`Address: ${office_location}`}</p>
                        </div>
                    </div>
                    <button onClick={() => applyJob(id)} style={{ width: '100%' }} className='btn-detail'>Apply Now</button>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default JobDetail;