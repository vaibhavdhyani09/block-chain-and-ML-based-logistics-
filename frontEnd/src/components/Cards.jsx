import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      icon: "",
      title: "Real-Time Tracking",
      description: "Monitor your shipments live with GPS-enabled tracking",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "",
      title: "AI-Powered Predictions",
      description: "Machine learning algorithms predict delivery times",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "",
      title: "Blockchain Verified",
      description: "Immutable records ensure transparency and trust",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "",
      title: "Risk Analysis",
      description: "Advanced analytics identify high-risk shipments",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 ">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group relative bg-gray-600 rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
          
          <div className="relative z-10">
            <div className="text-5xl mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-900">
              {feature.title}
            </h3>
            <p className="text-white text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default FeatureCards;
