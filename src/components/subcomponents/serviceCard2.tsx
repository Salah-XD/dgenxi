import React from "react";

interface AnimatinProps {
  title: string;
  subtext: string;
  blackCardTitle: string;
  Sno: string;
  imageURL: string;
  imageURL2: string;
}

const UiUxDesign: React.FC<AnimatinProps> = ({
  title,
  subtext,
  blackCardTitle,
  Sno,
  imageURL,
  imageURL2,
}) => {
  return (
    <div className="w-full min-h-[500px]  p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side Cards */}
          <div className="flex gap-6">
            {/* Main Card */}
            <div className="w-[280px]">
              <div className="bg-[#1A1A1A] rounded-3xl p-6 text-white h-full">
                <h3 className="text-2xl font-semibold mb-4">
                  {blackCardTitle}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Explore Portfolio</span>
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
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
            </div>

            {/* Right Side Small Cards */}
            <div className="flex flex-col gap-6 w-[180px]">
              <div className="bg-purple-600 rounded-3xl overflow-hidden aspect-video">
                <div
                  className="w-full h-full bg-[url('/api/placeholder/180/100')] bg-cover bg-center opacity-75"
                  style={{
                    backgroundImage: `url(${imageURL})`,
                  }}
                />
              </div>
              <div className="bg-purple-600 rounded-3xl overflow-hidden ">
                <div style={{backgroundImage:`url(${imageURL2})`}} className="w-full h-[265px] bg-cover bg-center opacity-75" />
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white text-xl">{Sno}</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-white font-semibold">
                {title} <span className="font-light italic">{subtext}</span>
              </h2>
            </div>

            <p className="text-white text-base md:text-lg leading-relaxed text-right">
              These services include the design and animation of characters,
              scenes, and elements for various purposes such as advertisements,
              explainer videos, educational content, website design, and
              entertainment. By using techniques like frame-by-frame animation,
              motion graphics, and digital tools, 2D animation brings stories
              and concepts to life, enhancing communication and audience
              engagement across different platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiUxDesign;
