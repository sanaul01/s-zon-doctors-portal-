import React from 'react';
import treatment from "../../../../assets/images/treatment.png"

const Dental = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row p-9 m-9">
                <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                <div className="pl-10">
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo minima accusantium soluta doloribus ratione velit officia tenetur vitae, ipsum vero nisi veritatis ab enim! Non quidem eum accusamus voluptatibus doloremque?</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary ...">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Dental;