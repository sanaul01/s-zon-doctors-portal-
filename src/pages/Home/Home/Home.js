import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Service from './service/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Service/>
        </div>
    );
};

export default Home;