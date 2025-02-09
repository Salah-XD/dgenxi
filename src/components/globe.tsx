import { World } from "./ui/globe";

const globeConfig = {
  pointSize: 1,
  globeColor: "#1d072e",
  showAtmosphere: true,
  atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.1,
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  // Increased lighting colors (here only the colors are used, not the intensities)
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 2000,
  arcLength: 0.5,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 0, lng: 0 },
  autoRotate: true,
  autoRotateSpeed: 1,
};

const data = [
  {
    order: 1,
    startLat: 34.0522, // Los Angeles
    startLng: -118.2437,
    endLat: 40.7128, // New York
    endLng: -74.006,
    arcAlt: 0.4,
    color: "#ff0000", // red
  },
  {
    order: 2,
    startLat: 51.5074, // London
    startLng: -0.1278,
    endLat: 48.8566, // Paris
    endLng: 2.3522,
    arcAlt: 0.35,
    color: "#00ff00", // green
  },
  {
    order: 3,
    startLat: 35.6895, // Tokyo
    startLng: 139.6917,
    endLat: -33.8688, // Sydney
    endLng: 151.2093,
    arcAlt: 0.3,
    color: "#0000ff", // blue
  },
  {
    order: 4,
    startLat: 30.0444, // Cairo
    startLng: 31.2357,
    endLat: 55.7558, // Moscow
    endLng: 37.6173,
    arcAlt: 0.4,
    color: "#ffa500", // orange
  },
  {
    order: 5,
    startLat: -22.9068, // Rio de Janeiro
    startLng: -43.1729,
    endLat: -26.2041, // Johannesburg
    endLng: 28.0473,
    arcAlt: 0.35,
    color: "#ffff00", // yellow
  },
  {
    order: 6,
    startLat: 52.52, // Berlin
    startLng: 13.405,
    endLat: 41.9028, // Rome
    endLng: 12.4964,
    arcAlt: 0.4,
    color: "#00ffff", // cyan
  },
];

export default function Home() {
  return (
    <div className="h-[100vh] md:h-[120vh]  flex flex-col items-center relative overflow-hidden">
      {/* Text Content */}
      <div className="px-4">
        <div className="text-4xl md:text-5xl text-white text-center mt-10 md:my-10 font-[50]">
          Our Global Reach
        </div>
        <div className="text-lg md:text-xl w-full md:w-[800px] text-white text-center mb-8 md:my-10 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          labore eaque ea sequi ipsam autem voluptatum saepe laborum accusantium
          unde odio praesentium, nihil doloribus optio voluptatem, tenetur quod,
          eius libero.
        </div>
      </div>

      {/* Country Buttons */}
      <div className="text-white flex flex-wrap justify-center gap-2 md:gap-4 ">
        {["United Kingdom", "Europe", "South Africa"].map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm hover:bg-white/20 transition-colors cursor-pointer"
          >
            {service}
          </div>
        ))}
      </div>

      {/* World Component Container */}
      <div className="absolute w-[100%] md:w-[200%] top-96 md:top-36 h-[100%] md:h-[200%]">
        <World globeConfig={globeConfig} data={data} />
      </div>
    </div>
  );
}
