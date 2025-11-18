import React from 'react';
import { FiShield, FiGlobe, FiUsers } from 'react-icons/fi';

// Reusable Card component
const Card = ({ Icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center h-full min-h-[280px] text-center">
            <Icon className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-orange-500 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

const WhoWeAre = () => {
    const cardsData = [
        {
            Icon: FiShield,
            title: "Trusted Platform",
            description:
                "Millions trust us to connect them with compatible matches. Your journey is safe and private with us."
        },
        {
            Icon: FiGlobe,
            title: "Global Community",
            description:
                "Connect with people from around the world. Find someone who shares your values and dreams."
        },
        {
            Icon: FiUsers,
            title: "Personalized Matches",
            description:
                "Our smart matching system helps you discover profiles that truly align with your preferences."
        }
    ];

    return (
        <section className="py-16 max-w-11/12 mx-auto">
            <div className="container text-center">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        <span className='text-orange-500'>Who</span> We Are
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We are a dedicated matrimony platform connecting hearts across the world. 
                        Our mission is to make meaningful connections easier, safer, and enjoyable. 
                        With thousands of happy couples, we are committed to helping you find your perfect match.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            Icon={card.Icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
