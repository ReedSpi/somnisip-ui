import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      name: "Somnisip Standard",
      tagline: "Essential bedside hydration",
      description: "Wall-mounted water dispenser with gravity-fed system and 6ft retractable hose for easy nighttime access.",
      features: ["2L water capacity", "6ft retractable hose", "Wall-mount design", "Easy installation"],
      price: "$89",
      badge: null
    },
    {
      name: "Somnisip Plus",
      tagline: "Cool, refreshing hydration",
      description: "Everything in Standard plus thermoelectric cooling to keep your water at the perfect temperature all night.",
      features: ["All Standard features", "Thermoelectric cooling", "Temperature control", "Energy efficient"],
      price: "$149",
      badge: "Most Popular"
    },
    {
      name: "Somnisip Pro",
      tagline: "Pure, clean hydration",
      description: "Complete system with cooling and UV-C sterilization for the cleanest, freshest water every time.",
      features: ["All Plus features", "UV-C sterilization", "Self-cleaning system", "Premium materials"],
      price: "$199",
      badge: "Premium"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            The right hydration solution for every bedside
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From basic convenience to premium purification, choose the Somnisip that fits your needs. 
            All models feature our signature wall-mount design and retractable hose system.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border ${
                product.badge === "Most Popular" 
                  ? "border-primary-200 ring-2 ring-primary-100" 
                  : "border-neutral-200"
              } hover:shadow-lg transition-all duration-300`}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                    product.badge === "Most Popular" 
                      ? "bg-primary-600 text-white" 
                      : "bg-neutral-900 text-white"
                  }`}>
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl">💧</span>
                  </div>
                  <p className="text-sm text-neutral-500">Product image</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                <p className="text-lg text-primary-600 font-medium mb-3">{product.tagline}</p>
                <p className="text-neutral-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and CTA */}
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 mb-4">{product.price}</div>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                  product.badge === "Most Popular"
                    ? "bg-primary-600 hover:bg-primary-700 text-white"
                    : "bg-neutral-900 hover:bg-neutral-800 text-white"
                }`}>
                  Pre-order now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-neutral-600 mb-6">
            Need help choosing? Our installation team can recommend the best model for your space.
          </p>
          <button className="btn-secondary px-8 py-3">
            Schedule consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
