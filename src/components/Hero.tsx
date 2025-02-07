import { ArrowRight } from 'lucide-react';
import { FaCheckCircle } from "react-icons/fa";
function Hero() {

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      

      {/* Hero Section */}
      <main className="px-4 pt-[12rem] md:py-24 lg:py-32 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Where <span className="text-purple-900">intelligence</span>
              <br />
              <span className="text-purple-900">meets</span> <span className="italic text-purple-600">imagination</span>
            </h2>

            {/* Features */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
              <div className="flex items-center space-x-2">
              <FaCheckCircle color='#9333ea'/>
                <span className="text-gray-700">Creativity on Autopilot</span>
              </div>
              <div className="flex items-center space-x-2">
              <FaCheckCircle color='#9333ea'/>
                <span className="text-gray-700">Powered by AI</span>
              </div>
              <div className="flex items-center space-x-2">
              <FaCheckCircle color='#9333ea'/>
                <span className="text-gray-700">Driven by Humans</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 mx-auto hover:bg-purple-700 transition-colors">
                <span>Explore dgenxi</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Button */}
      {/* <div className="fixed bottom-6 right-6">
        <button className="bg-purple-900 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transition-colors">
          <Bot className="w-6 h-6" />
        </button>
      </div> */}
    </div>
  );
}

export default Hero;