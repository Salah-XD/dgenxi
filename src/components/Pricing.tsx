import React from "react";
import { Check } from "lucide-react";
import { Mail, Phone } from "lucide-react";

const PricingComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-900 p-6 px-[5rem]">
      <div className="text-5xl text-white text-center my-20 font-[50] py-4 ">
        Easy Subscription Model
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-6">
        {/* Pricing Cards Container */}
        <div className="w-full lg:w-2/3 space-y-10">
          {/* Essentials Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between items-center gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <h2 className="text-xl font-semibold">Essentials</h2>
                </div>
                <p className="text-gray-600">
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
          <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg relative">
            <span className="absolute -top-3 right-6 bg-green-400 text-black text-sm px-3 py-1 rounded-full">
              Most popular
            </span>
            <div className="flex justify-between items-center gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <h2 className="text-xl font-semibold">Professional</h2>
                </div>
                <p className="text-gray-300">
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
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between items-center gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <h2 className="text-xl font-semibold">Enterprise</h2>
                </div>
                <p className="text-gray-600">
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
        <div className="w-full lg:w-1/3 bg-purple-200 rounded-2xl p-10 max-h-fit space-y-6">
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
                <p className="text-gray-700 text-[16px]">{feature}</p>
              </div>
            ))}
          </div>

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Lets Connect
          </button>
        </div>
      </div>
      {/* //clients */}
      <div className=" flex flex-col items-center">
        <div className="text-5xl text-white  mt-20 font-[50] py-4 ">
          Clients
        </div>
        <div className="text-2xl text-white font-[50] py-4 ">
          Accross the Globe
        </div>
        <hr className="w-[12rem]" />
        <div className="text-xl w-[800px] text-white text-center my-10 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          labore eaque ea sequi ipsam autem voluptatum saepe laborum accusantium
          unde odio praesentium, nihil doloribus optio voluptatem, tenetur quod,
          eius libero.
        </div>
      </div>

      {/* contact */}
      <div className=" flex flex-col items-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl text-white text-center font-light mb-16">
            Lets talk
          </h1>

          <div className="flex flex-col lg:flex-row justify-between gap-16">
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
              <div className="mb-12">
                <h2 className="text-4xl font-bold mb-8">agenxi</h2>
                <p className="text-lg mb-8">
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
                    className="text-lg hover:underline"
                  >
                    info@aigenxi.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <a
                    href="tel:+44452111222"
                    className="text-lg hover:underline"
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
