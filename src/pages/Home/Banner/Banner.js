import React from 'react';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, saepe ipsum tenetur iusto praesentium dignissimos minus nihil dolor quis vero.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;