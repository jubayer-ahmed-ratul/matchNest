import React from 'react';
import Banner from './Banner';
import WhoWeAre from './WhoWeAre';
import HowWeWork from './HowWeWork';
import WhyChooseUs from './WhyChooseUs';
import MembershipPlans from './MembershipPlans';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhoWeAre/>
            <HowWeWork></HowWeWork>
            <WhyChooseUs></WhyChooseUs>
            <MembershipPlans></MembershipPlans>
        </div>
    );
};

export default Home;