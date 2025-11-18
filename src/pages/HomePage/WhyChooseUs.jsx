import React from 'react';
import { FiLock, FiCheckCircle, FiUserCheck, FiHeadphones } from 'react-icons/fi';

const chooseUsData = [
  {
    icon: <FiLock className="text-orange-500 text-5xl mb-4" />,
    title: "Safe & Secure System",
    desc: "Your privacy is protected with advanced security technology."
  },
  {
    icon: <FiCheckCircle className="text-orange-500 text-5xl mb-4" />,
    title: "Smart Matchmaking",
    desc: "AI-powered matchmaking helps you find the most compatible profiles."
  },
  {
    icon: <FiUserCheck className="text-orange-500 text-5xl mb-4" />,
    title: "Verified Profiles",
    desc: "Every profile is checked carefully to reduce fake or misleading accounts."
  },
  {
    icon: <FiHeadphones className="text-orange-500 text-5xl mb-4" />,
    title: "24/7 Support",
    desc: "Our support team is always available for your assistance."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 max-w-11/12 mx-auto">
      
      {/* Header */}
      <div className="text-center mb-17">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="text-orange-500">Why</span> Choose Us
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We offer the most reliable, trusted, and user-friendly matrimonial experience with unique features designed to make your journey smooth and successful.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {chooseUsData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
