import React from "react";
import { Check } from "lucide-react";
import { Mail, Phone } from "lucide-react";

const PricingComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-900 p-4 sm:p-6 lg:px-[5rem]">
      {/* Easy Subscription Model Section */}
      <div className="text-3xl sm:text-4xl md:text-5xl text-white text-center my-10 sm:my-20 font-bold py-4">
        Easy Subscription Model
      </div>

      {/* Pricing Cards and Features Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-6">
        {/* Pricing Cards Container */}
        <div className="w-full lg:w-2/3 space-y-6 sm:space-y-10">
          {/* Essentials Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <h2 className="text-xl font-semibold">Essentials</h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Perfect for startups, our Basic Plan offers essential services
                  to establish your online presence.
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">£2999.00</p>
                <p className="text-sm text-gray-600">Per month</p>
              </div>
            </div>
          </div>

          {/* Professional Card */}
          <div className="bg-gray-900 text-white rounded-2xl p-4 sm:p-6 shadow-lg relative">
            <span className="absolute -top-3 right-6 bg-green-400 text-black text-sm px-3 py-1 rounded-full">
              Most popular
            </span>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <h2 className="text-xl font-semibold">Professional</h2>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Our Professional Plan provides a balanced mix of web design,
                  graphic design, and digital marketing services.
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">£4999.00</p>
                <p className="text-sm text-gray-300">Per month</p>
              </div>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <h2 className="text-xl font-semibold">Enterprise</h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Designed for businesses aiming for significant impact, the
                  Enterprise plan has a bundle of features to offer.
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">$5999.00</p>
                <p className="text-sm text-gray-600">Per month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Card */}
        <div className="w-full lg:w-1/3 bg-purple-200 rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-purple-600 text-2xl">✦</span>
              <h2 className="text-xl font-semibold">Endless Creativity</h2>
            </div>

            {[
              "Professional Photo & Videography",
              "Custom designs tailored to your brand",
              "Premium and trendy graphic services",
              "Voiceover & Audio Enhancement",
              "Streamline Processes",
              "Well experienced post-production team",
              "Ongoing support and maintenance for all digital assets",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-purple-600" />
                <p className="text-gray-700 text-sm sm:text-base">{feature}</p>
              </div>
            ))}
          </div>

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Lets Connect
          </button>
        </div>
      </div>

      {/* Clients Section */}
      <div className="flex flex-col items-center mt-10 sm:mt-20">
        <div className="text-3xl sm:text-4xl md:text-5xl text-white font-bold py-4">
          Clients
        </div>
        <div className="text-xl sm:text-2xl text-white font-bold py-4">
          Across the Globe
        </div>
        <hr className="w-[8rem] sm:w-[12rem]" />
        <div className="text-sm sm:text-base md:text-xl text-white text-center my-6 sm:my-10 max-w-[90%] sm:max-w-[800px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          labore eaque ea sequi ipsam autem voluptatum saepe laborum accusantium
          unde odio praesentium, nihil doloribus optio voluptatem, tenetur quod,
          eius libero.
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center p-4 sm:p-10">
  {[
    "src/assets/Amazon_logo 4.png",
    "src/assets/Group.png",
    "src/assets/image 1.png",
    "src/assets/g58.png",
    "src/assets/g42472.png", // Ensure this image is resized properly
    "src/assets/BSC_wtag_KOwhite_rgb 1 1.png",
    "src/assets/viacam 1.png",
    "src/assets/image 2.png",
  ].map((logo, index) => (
    <div
      key={index}
      className="bg-white rounded-xl flex justify-center items-center w-40 h-20 sm:w-72 sm:h-36 p-4 sm:p-12"
    >
      <img
        src={logo}
        alt={`client-${index}`}
        className="w-full h-auto max-w-full max-h-full object-contain"
      />
    </div>
  ))}
</div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center mt-10 sm:mt-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center font-light mb-8 sm:mb-16">
            Lets talk
          </h1>

          <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-16">
            {/* Form Section */}
            <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                >
                  Book a call
                </button>
              </form>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0 text-white">
              <div className="mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">agenxi</h2>
                <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                  Let's discuss your goals and explore how Pixelize can help
                  transform your brand with our innovative digital solutions.
                </p>
                <div className="h-px bg-white/20 w-full"></div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <a
                    href="mailto:info@aigenxi.com"
                    className="text-sm sm:text-lg hover:underline"
                  >
                    info@aigenxi.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <a
                    href="tel:+44452111222"
                    className="text-sm sm:text-lg hover:underline"
                  >
                    +44 452 111 222
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
