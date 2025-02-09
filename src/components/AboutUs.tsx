import React from "react";
import Service from "./Service";
import { PiStarFourFill } from "react-icons/pi";
import { BackgroundGradientAnimation } from "./ui/backround-gradient-animation";
import Globe2 from "./globe";


import PricingComponent from "./Pricing";

function AboutUs() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 h-auto w-full  py-12  overflow-y-auto overflow-x-hidden">
        <div className="max-w-7xl mx-auto relative md:px-8 lg:px-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-white">
            About Us
          </h2>

          {/* Rest of your existing content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-thin mb-2 text-white">
                  One <span className="text-3xl md:text-4xl font-medium">Aigenxi</span>
                </h3>
                <p className="text-lg text-purple-100">Many Solutions</p>
              </div>
              <hr className="w-full md:w-[400px] border-white/20" />

              <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                AiGenxi is a next-generation production agency revolutionizing
                content creation with AI-powered intelligence and human expertise.
                We specialize in streamlining the pre-production and
                post-production workflow, delivering visually compelling and
                strategically impactful content at the speed of AI.
              </p>
            </div>

            {/* Right Column - Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 - Large */}
              <div
                className="col-span-2 rounded-2xl p-6 h-48 sm:h-64 relative overflow-hidden group flex flex-col justify-center items-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl font-bold text-white">140+</div>
                  <div className="text-base sm:text-lg text-white">
                    Satisfied Deliveries
                  </div>
                </div>
              </div>

              {/* Card 2 - Small */}
              <div
                className="rounded-2xl p-6 h-40 relative overflow-hidden group flex flex-col justify-center items-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl font-bold text-white">14</div>
                  <div className="text-base sm:text-lg text-white">
                    Years of Experience
                  </div>
                </div>
              </div>

              {/* Card 3 - Small */}
              <div
                className="rounded-2xl p-6 h-40 relative overflow-hidden group flex flex-col justify-center items-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1676299081847-824916de030a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="relative z-10 flex flex-col justify-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white">48+</div>
                  <div className="text-base sm:text-lg text-white">Industries/Client Served</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Section */}
          <div className="mt-16 text-center">
            <h3 className=" text-white text-3xl md:text-5xl font-thin mb-6 flex items-center justify-center gap-2">
              <span className="bg-purple-300 "></span>
              <PiStarFourFill />
              Accelerated by AI
              <span className="bg-purple-300"></span>
            </h3>

            <p className="max-w-3xl mx-auto text-gray-200 text-sm md:text-base mb-8">
              Imagine a setup where all your content needs are seamlessly powered
              by AI, perfected by human artists, and free from the usual AI
              restrictions. This is what Aigenxi delivers. Choose from our
              AI-driven tools for a highly diverse creative experience.
            </p>

            {/* Services Grid */}
            <div className="flex flex-wrap justify-center gap-3 text-white">
              {[
                "Script Writing",
                "Workflows",
                "Image Generator",
                "Storyboards",
                "Research",
                "Streamline Processes",
                "2D & 3D Models",
                "Graphics & Illustrations",
                "Concepts",
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm md:text-lg hover:bg-white/20 transition-colors cursor-pointer flex gap-2"
                >
                  <PiStarFourFill />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Service />
        <Globe2/>
        <PricingComponent />

      </div>
    </BackgroundGradientAnimation>
  );
}

export default AboutUs;