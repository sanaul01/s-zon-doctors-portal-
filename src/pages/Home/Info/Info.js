import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    const cardInfos =[
        {
            img:clock, 
            title:"Opening Hours", 
            bgColor:"bg-gradient-to-r from-primary to-secondary ..."
        },
        {
            img:marker, 
            title:"Our Locations", 
            bgColor:"bg-accent"
        },
        {
            img:phone, 
            title:"Contact Us", 
            bgColor:"bg-gradient-to-r from-primary to-secondary ..."
        },
    ]
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
            <InfoCard bgTitle="Opening Hours" bgCard="bg-gradient-to-r from-primary to-secondary ..." img={clock}/>
            <InfoCard bgTitle="Our Locations" bgCard="bg-neutral" img={marker}/>
            <InfoCard bgTitle="Contact Us" bgCard="bg-gradient-to-r from-primary to-secondary ..." img={phone}/>
        </div>
    );
};

export default Info;