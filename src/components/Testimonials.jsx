import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "No more stumbling to the kitchen for water at 3am! The Somnisip is mounted right next to my bed and the hose reaches perfectly. Game changer.",
      author: "Sarah Chen",
      role: "Software Engineer",
      company: "Tech Startup",
      avatar: "SC"
    },
    {
      quote: "The UV-C sterilization in the Pro model gives me peace of mind. Clean, fresh water every time without any maintenance hassle.",
      author: "Dr. Michael Rodriguez",
      role: "Family Physician",
      company: "Metro Health",
      avatar: "MR"
    },
    {
      quote: "Installation was surprisingly easy and it doesn't take up any nightstand space. The cooling feature keeps water perfectly chilled all night.",
      author: "Jennifer Park",
      role: "Interior Designer",
      company: "Park Design Studio",
      avatar: "JP"
    }
  ];

  const stats = [
    { number: "10K+", label: "Units installed" },
    { number: "95%", label: "Satisfaction rate" },
    { number: "4.8/5", label: "Average rating" },
    { number: "30", label: "Day guarantee" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Join thousands of satisfied customers
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Real people, real convenience. See how Somnisip is making nighttime hydration effortless and hygienic.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote */}
              <div className="mb-6">
                <div className="text-primary-600 text-4xl mb-4">"</div>
                <p className="text-neutral-700 leading-relaxed text-lg">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-neutral-200">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">
              Ready for effortless bedside hydration?
            </h3>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Experience the convenience of wall-mounted water access with a 30-day risk-free trial. 
              If you're not completely satisfied, we'll refund every penny.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start your trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Talk to sleep expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
