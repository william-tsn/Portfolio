import Navbar from "../components/Navbar";

function Projets() {
  return (
    <div className="relative w-full min-h-full overflow-x-hidden font-ubuntu text-white pb-40 bg-gradient-to-b from-[#2c1c0b] to-black">
      <div className="absolute inset-0 z-[10] pointer-events-none">
        <div className="wave7" />
        <div className="wave8" />
        <div className="wave9" />
        <div className="wave10" />
        <div className="wave11" />
        <div className="wave12" />
      </div>

      <Navbar />
    </div>
  );
}

export default Projets;
