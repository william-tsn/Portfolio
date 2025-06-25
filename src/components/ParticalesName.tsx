import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticulesNames = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="w-full h-screen bg-black">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#0d0d0d",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            number: {
              value: 0,
            },
            color: {
              value: "#a855f7",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
            },
            size: {
              value: 2,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: {
                default: "bounce",
              },
            },
          },
          emitters: [
            {
              position: {
                x: 50,
                y: 50,
              },
              rate: {
                delay: 0.1,
                quantity: 2,
              },
              particles: {
                move: {
                  direction: "none",
                  speed: 2,
                  outModes: {
                    default: "destroy",
                  },
                },
              },
            },
          ],
          preset: "text",
          text: {
            value: "Je m'appelle\nWilliam Tousson",
            font: "Verdana",
            style: "",
            weight: "700",
            size: 40,
            fill: true,
          },
        }}
      />
    </div>
  );
};

export default ParticulesNames;
