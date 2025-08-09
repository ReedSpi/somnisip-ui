import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      name: "Somnisip Basic",
      tagline: "Simple, user-installed",
      description: "A wall-mounted bedside water system focused on convenient, consistent hydration.",
      features: ["2L water capacity", "6ft retractable hose", "Easy to install", "Easy to clean", "3 extra mouthpieces"],
      price: "$79"
    },
    {
      name: "Somnisip Plus",
      tagline: "Cooling and control",
      description: "Adds quiet thermoelectric cooling and temperature control to the Basic model.",
      features: ["All basic features", "Quiet thermoelectric cooling", "Temperature control"],
      price: "$159"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
            Compare models
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Two options to fit your bedside setup.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* No badges */}

              {/* Image removed intentionally to keep things simple and honest */}

              {/* Product Info */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-neutral-900 mb-1">{product.name}</h3>
                <p className="text-primary-600 font-medium">{product.tagline}</p>
              </div>

              {/* Features */}
              <div className="mb-4 flex-1">
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-700">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price (no CTA button) */}
              <div className="text-center mt-auto pt-2">
                <div className="text-3xl font-bold text-neutral-900 tracking-tight">{product.price}</div>
                <div className="text-xs text-neutral-500">USD</div>
              </div>
            </div>
          ))}
        </div>
        {/* No extra CTAs. Use the waitlist section below. */}
      </div>
    </section>
  );
};

export default ProductShowcase;
