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
    startLat: 34.0522,    // Los Angeles
    startLng: -118.2437,
    endLat: 40.7128,      // New York
    endLng: -74.0060,
    arcAlt: 0.4,
    color: "#ff0000",     // red
  },
  {
    order: 2,
    startLat: 51.5074,    // London
    startLng: -0.1278,
    endLat: 48.8566,      // Paris
    endLng: 2.3522,
    arcAlt: 0.35,
    color: "#00ff00",     // green
  },
  {
    order: 3,
    startLat: 35.6895,    // Tokyo
    startLng: 139.6917,
    endLat: -33.8688,     // Sydney
    endLng: 151.2093,
    arcAlt: 0.3,
    color: "#0000ff",     // blue
  },
  {
    order: 4,
    startLat: 30.0444,    // Cairo
    startLng: 31.2357,
    endLat: 55.7558,      // Moscow
    endLng: 37.6173,
    arcAlt: 0.4,
    color: "#ffa500",     // orange
  },
  {
    order: 5,
    startLat: -22.9068,   // Rio de Janeiro
    startLng: -43.1729,
    endLat: -26.2041,     // Johannesburg
    endLng: 28.0473,
    arcAlt: 0.35,
    color: "#ffff00",     // yellow
  },
  {
    order: 6,
    startLat: 52.5200,    // Berlin
    startLng: 13.4050,
    endLat: 41.9028,      // Rome
    endLng: 12.4964,
    arcAlt: 0.4,
    color: "#00ffff",     // cyan
  },
];


export default function Home() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="w-full h-full max-w-[1200px] max-h-[800px]">
        <World globeConfig={globeConfig} data={data} />
      </div>
    </div>
  );
}