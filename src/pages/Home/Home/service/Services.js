import React from 'react';
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import Service from './Service';



const services=[
    {
        _id: 1,
        name: 'Fluoride Treatment',
        descriptions:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum animi deserunt aliquam iure repudiandae ipsa necessitatibus? Iste, amet dolore.",
        img: fluoride

    },
    {
        _id: 1,
        name: 'Cavity Filling',
        descriptions:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum animi deserunt aliquam iure repudiandae ipsa necessitatibus? Iste, amet dolore.",
        img:  cavity

    },
    {
        _id: 1,
        name: 'Teeth Whitening',
        descriptions:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum animi deserunt aliquam iure repudiandae ipsa necessitatibus? Iste, amet dolore.",
        img: whitening

    },
]

const Services = () => {
    return (
        <div className="my-28">
            <div className="text-center my-20">
                <h2 className="text-primary text-xl font-bold uppercase">Our Services</h2>
                <h2 className="text-5xl">Services We Porvied</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-3 gap-3">
               {services.map(service => <Service
                    key={service.name}
                    service={service}
               />)}
            </div>
        </div>
    );
};

export default Services;