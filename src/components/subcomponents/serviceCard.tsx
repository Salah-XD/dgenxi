import React from "react";

interface AnimationProps {
  title: string;
  subtext: string;
  whiteCardTitle: string;
  purpleCardTitle: string;
  Sno: string;
  imageURL: string;
}

const AnimationServices: React.FC<AnimationProps> = ({
  title,
  subtext,
  whiteCardTitle,
  purpleCardTitle,
  Sno,
  imageURL,
}) => {
  return (
    <div className="w-full min-h-[500px] p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5rem] items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white text-xl">{Sno}</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-white font-semibold">
                {title} <span className="opacity-75 italic">{subtext}</span>
              </h2>
            </div>

            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              These services include the design and animation of characters,
              scenes, and elements for various purposes such as advertisements,
              explainer videos, educational content, website design, and
              entertainment. By using techniques like frame-by-frame animation,
              motion graphics, and digital tools, 2D animation brings stories
              and concepts to life, enhancing communication and audience
              engagement across different platforms.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Main Image Card */}
            <div className="flex-1">
              <div className="rounded-3xl overflow-hidden shadow-lg bg-gray-900">
                <img
                  src={imageURL}
                  alt="VR Animation Demo"
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>

            {/* Side Cards */}
            <div className="flex flex-col gap-4 md:w-72">
              {/* Motion to Movies Card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {whiteCardTitle}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Explore Portfolio</span>
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Professional Videos Card */}
              <div className="bg-purple-600 rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {purpleCardTitle}
                </h3>
                <p className="text-white/90 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationServices;
