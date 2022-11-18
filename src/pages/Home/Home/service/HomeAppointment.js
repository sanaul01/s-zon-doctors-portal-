import React from 'react';
import doctor from "../../../../assets/images/doctor.png";
import appointment from "../../../../assets/images/appointment.png";
import PrimaryButton from '../../../Shared/PrimaryButton';

const HomeAppointment = () => {
    return (
        <section style={{ 
            background:`url(${appointment})`
        }}
         className="flex justify-center items-center mt-[200px] ">
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-170px]" src={doctor} alt="" />
            </div>
            <div className="flex-1 ">
                <h3 className="text-xl text-primary font-bold">Appointment</h3>
                <h2 className="text-3xl text-white">Make an Appointment Today</h2>
                <p className="py-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod ab provident necessitatibus harum neque ullam ea omnis perspiciatis consectetur corporis repellat, ut voluptatum impedit placeat et quis accusamus possimus sunt eveniet nobis error excepturi aut nihil! Aliquid, consequatur ut!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default HomeAppointment;