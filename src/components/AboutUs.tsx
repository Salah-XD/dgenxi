import React from "react";

function AboutUs() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-purple-900 to-blue-800 text-white px-4 py-16 md:px-8 lg:px-16 overflow-hiddenn rounded-3xl">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-400 rounded-full blur-lg opacity-60"></div>

      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">
                One <span className="text-purple-300">Algenxi</span>
              </h3>
              <p className="text-lg text-purple-100">Many Solutions</p>
            </div>

            <p className="text-gray-200 leading-relaxed">
              dGenxi is a next-generation production agency revolutionizing
              content creation with AI-powered intelligence and human expertise.
              We specialize in streamlining the pre-production and
              post-production workflow, delivering visually compelling and
              strategically impactful content at the speed of AI.
            </p>
          </div>

          {/* Right Column - Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 - Large */}
            <div
              className="col-span-2 rounded-2xl p-6 h-64 relative overflow-hidden group"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold text-purple-300">140+</div>
                <div className="text-sm text-purple-100">
                  Satisfied Deliveries
                </div>
              </div>
            </div>

            {/* Card 2 - Small */}
            <div
              className="rounded-2xl p-6 h-40 relative overflow-hidden group"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold text-purple-300">14</div>
                <div className="text-sm text-purple-100">
                  Years of Experience
                </div>
              </div>
            </div>

            {/* Card 3 - Small */}
            <div
              className="rounded-2xl p-6 h-40 relative overflow-hidden group"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1676299081847-824916de030a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold text-purple-300">48+</div>
                <div className="text-sm text-purple-100">Industries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
            <span className="w-6 h-0.5 bg-purple-300"></span>
            Accelerated by AI
            <span className="w-6 h-0.5 bg-purple-300"></span>
          </h3>

          <p className="max-w-3xl mx-auto text-gray-200 mb-12">
            Imagine a setup where all your content needs are seamlessly powered
            by AI, perfected by human artists, and free from the usual AI
            restrictions. This is what dgenxi delivers. Choose from our
            AI-driven tools for a highly diverse creative experience.
          </p>

          {/* Services Grid */}
          <div className="flex flex-wrap justify-center gap-4">
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
                className="bg-white/10 backdrop-blur px-6 py-2 rounded-full text-sm hover:bg-white/20 transition-colors cursor-pointer"
              >
                {index === 0 || index === 3 || index === 6 ? "+ " : ""}
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
