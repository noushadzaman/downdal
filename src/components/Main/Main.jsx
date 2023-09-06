import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <Footer></Footer>
        </div>
    );
};

export default Main;