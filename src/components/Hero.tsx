import { ArrowRight } from 'lucide-react';
import { BsArrowDownSquare } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
function Hero() {

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      

      {/* Hero Section */}
      <main className="px-4 pt-[12rem] md:py-24 lg:py-32 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center space-y-8 ">
            <h2 style={{lineHeight:'1.5'}} className="text-[#2O1A1D] text-5xl md:text-6xl ">
              Where <span style={{color:'#2O1A1D'}} className="text-[#2O1A1D] font-bold lg:text-8xl ">intelligence</span>
              <br />
              <span className="text-[#2O1A1D]-900 font-bold text-5xl md:text-6xl">meets</span> <span className="italic text-[#2O1A1D]-100 lg:text-7xl">imagination</span>
            </h2>

            {/* Features */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
              <div className="flex items-center space-x-2">
              <FaCheckCircle color='#9333ea'/>
                <span className="text-2O1A1D-700">Creativity on Autopilot</span>
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
            <br />
            <br />
            <br />
            
            <div className="mt-10">
              <button className=" text-purple-700 px-8 py-3 rounded-full flex items-center space-x-2 mx-auto gap-2 mt-10 transition-colors">
                <BsArrowDownSquare/>
                <span>Explore Aigenxi</span>
                
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