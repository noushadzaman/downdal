import React from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>DownDal | Home</title>
            </Helmet>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;