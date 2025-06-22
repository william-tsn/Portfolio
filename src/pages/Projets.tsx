import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AnimatedComponent from "../components/AnimatedComponent";

type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  doc?: string;
  url?: string;
};

const projects: Project[] = [
  {
    title: "Projet Pokémon",
    description: "Un Pokédex interactif avec Tailwind/JS et une API Pokémon.",
    image: "/Portfolio/assets/pokedex.webp",
    github: "https://github.com/william-tsn/pokedex",
    doc: "https://docs.google.com/document/d/xxx-pokedex",
  },
  {
    title: "book'ing api",
    description:
      "Librairie avec moteur de recherche, comptes, Tailwind, JS, PHP et API Google.",
    image: "/Portfolio/assets/bookapi.webp",
    github: "https://github.com/william-tsn/flag-game",
    doc: "https://docs.google.com/document/d/xxx-drapeaux",
  },
  {
    title: "Portfolio",
    description: "Mon site portfolio réalisé en React et Tailwind CSS.",
    image: "/Portfolio/assets/portfolio.webp",
    github: "https://github.com/william-tsn/portfolio",
    doc: "https://docs.google.com/document/d/xxx-portfolio",
  },
  {
    title: "Projet Citoyen",
    description:
      "Site web d'un projet citoyen réalisé en HTML, CSS et dans le cadre du BTS SIO. Il sensibilise à l'accessibilité et à l'inclusion des personnes en situation de handicap.",
    image: "/Portfolio/assets/projetc.webp",
    github: "https://github.com/tony78rip/projetc",
    url: "https://tony78rip.github.io/projetc/",
  },
  {
    title: "Shifumi",
    description:
      "Jeu Pierre-Papier-Ciseaux en HTML, CSS et JS contre l'ordi avec score.",
    image: "/Portfolio/assets/shifumi.webp",
    github: "https://github.com/william-tsn/shifumi",
    doc: "https://docs.google.com/document/d/xxx-shifumi",
  },
  {
    title: "AP1 Site vitrine Smarty",
    description:
      "Création d'un site vitrine responsive pour la marque Smarty, incluant des pages produits, un formulaire de contact, et une page de vente. Réalisé en HTML et CSS.",
    image: "/Portfolio/assets/site-smarty.webp",
    github: "https://github.com/william-tsn/Site-vitrine-smarty",
    url: "https://william-tsn.github.io/Site-vitrine-smarty/index.html",
  },
  {
    title: "AP2 Clash of League",
    description:
      "Application de gestion et communication pour les équipes de Clash of League, avec réservation de stades, planning, messagerie et gestion d'équipe.",
    image: "/Portfolio/assets/clashofleague.webp",
    github: "",
    doc: "/Portfolio/assets/AP2.pdf",
  },
  {
    title: "AP3 Projet à venir",
    description:
      "Pas encore disponible. Ce projet sera ajouté dès qu'il est finalisé.",
    image: "/Portfolio/assets/notfound.webp",
    github: "#",
  },
  {
    title: "AP4 Projet à venir",
    description:
      "Pas encore disponible. Ce projet sera ajouté dès qu'il est finalisé.",
    image: "/Portfolio/assets/notfound.webp",
    github: "#",
  },
];

function Projets() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 768);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full min-h-screen font-ubuntu text-white pb-40">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2c1c0b] to-black z-[-10]" />

      <div className="absolute inset-0 z-[10] pointer-events-none">
        <div className="wave7" />
        <div className="wave8" />
        <div className="wave9" />
        <div className="wave10" />
        <div className="wave11" />
        <div className="wave12" />
      </div>

      <Navbar />

      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-6 text-white">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Mes projets scolaires : <span className="text-orange-400">TP et AP</span>
        </h1>
      </section>

      <section className="w-full px-4 md:px-10 pb-24">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:hidden">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#ff6f3c]/10 border border-orange-500 rounded-lg p-3 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-28 object-cover mb-2 rounded"
                loading="lazy"
              />
              <h3 className="text-orange-300 text-base mb-1">{project.title}</h3>
              <p className="text-sm text-orange-200 line-clamp-3">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 relative z-5">
          {projects.map((project, idx) => (
            <AnimatedComponent
              key={idx}
              animationClass="animate-slide-in-up"
              disableOnMobile={isMobile}
            >
              <div
                onClick={() => setSelectedProject(project)}
                className={`group relative block bg-[#ff6f3c]/10 border border-orange-400 rounded-xl overflow-hidden transition-transform duration-300 cursor-pointer ${
                  isMobile
                    ? ""
                    : "hover:scale-105 hover:z-10 hover:shadow-[0_0_25px_#ff944d]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4 flex flex-col justify-between h-36">
                  <h3 className="text-orange-300 text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-orange-200 line-clamp-3">{project.description}</p>
                </div>
              </div>
            </AnimatedComponent>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center p-6 z-50 overflow-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#1e1e1e] rounded-xl max-w-3xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-auto rounded-md mb-4 object-contain"
            />
            <h3 className="text-yellow-300 text-2xl mb-2">{selectedProject.title}</h3>
            <p className="text-orange-200 mb-4">{selectedProject.description}</p>
            <div className="flex flex-col gap-2">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                Voir sur GitHub →
              </a>
              {selectedProject.doc && (
                <a
                  href={selectedProject.doc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 underline"
                >
                  Voir la doc technique →
                </a>
              )}
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 underline"
                >
                  Voir le site →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projets;
