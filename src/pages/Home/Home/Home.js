import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Dental from './service/Dental';
import Service from './service/Services';

const Home = () => {
    return (
        <div className="px-12">
            <Banner />
            <Info />
            <Service />
            <Dental />
        </div>
    );
};

export default Home;