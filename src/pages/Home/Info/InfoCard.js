import React from 'react';

const InfoCard = ({img, bgCard, bgTitle}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl text-white pl-5 ${bgCard}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{bgTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                
            </div>
        </div>
    );
};

export default InfoCard;