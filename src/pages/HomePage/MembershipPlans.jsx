import React from "react";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Create Profile",
      "Browse Matches",
      "Basic Filters",
      "Send Interest (Limited)"
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$19 / month",
    features: [
      "Unlimited Profile Views",
      "Send Unlimited Interests",
      "Advanced Filters",
      "Chat with Matches",
      "Priority Support"
    ],
    highlight: true,
  },
  {
    name: "Elite",
    price: "$49 / month",
    features: [
      "VIP Matchmaking",
      "Dedicated Relationship Manager",
      "Verified Match Suggestions",
      "Direct Contact Access",
      "Highest Profile Priority"
    ],
    highlight: false,
  },
];

const MembershipPlans = () => {
  return (
    <section className="py-24 max-w-11/12 mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="text-orange-500">Membership</span> Plans
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Choose the plan that fits your journey. Upgrade anytime to enjoy more features
          and connect faster.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 shadow-lg border transition-all duration-300 hover:shadow-2xl 
              ${plan.highlight ? "border-orange-500 scale-105" : "border-gray-200"}`}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              {plan.name}
            </h3>

            <p className="text-center text-orange-500 text-3xl font-bold mb-6">
              {plan.price}
            </p>

            <div className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <FiCheck className="text-orange-500 text-xl" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-3 rounded-lg font-semibold transition-all 
                ${plan.highlight
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipPlans;
