import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Wall-Mounted Design",
      description: "Mounts securely to your bedroom wall, keeping your nightstand clear while providing easy access to fresh water.",
      icon: "🏠",
      stat: "6ft",
      statLabel: "Hose reach"
    },
    {
      title: "Gravity-Fed System",
      description: "Simple, reliable water delivery through gravity and suction - no pumps or complex electronics to break down.",
      icon: "💧",
      stat: "2L",
      statLabel: "Tank capacity"
    },
    {
      title: "UV-C Sterilization",
      description: "Pro model features UV-C light technology that sterilizes the water tank and tubing for the purest hydration.",
      icon: "✨",
      stat: "99.9%",
      statLabel: "Bacteria eliminated"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
              Convenience meets
              <br />
              <span className="text-primary-600">clean design</span>
            </h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Our innovative wall-mounted system delivers fresh water directly to your bedside without cluttering your nightstand. 
              Stay hydrated without ever leaving your bed.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-neutral-700">Food-grade materials throughout</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-neutral-700">Easy installation in any bedroom</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-neutral-700">No electricity required (Basic model)</span>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8">
              {/* Placeholder for installation visualization */}
              <div className="aspect-video bg-white rounded-xl shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <p className="text-neutral-600 font-medium">Installation Guide</p>
                  <p className="text-sm text-neutral-500">Step-by-step video coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              {/* Feature Stat */}
              <div className="border-t border-neutral-100 pt-4">
                <div className="text-2xl font-bold text-primary-600">{feature.stat}</div>
                <div className="text-sm text-neutral-500">{feature.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
