import { useState } from "react";
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
    github: "https://github.com/william-tsn/book-api",
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
    title: "AP3 Clash of League front-end",
    description:
      "Partie front-end d'une application de gestion et communication pour les équipes de Clash of League, avec réservation de stades, planning, messagerie et gestion d'équipe. Réalisé en React.",
    image: "/Portfolio/assets/clash-frontend.png",
    github: "https://github.com/victorcb2003/ClashFrontEnd",
  },
  {
    title: "AP3 Clash of League back-end",
    description:
      "Partie back-end d'une application de gestion et communication pour les équipes de Clash of League, avec réservation de stades, planning, messagerie et gestion d'équipe. Réalisé en Node.js.",
    image: "/Portfolio/assets/clashofleague.webp",
    github: "https://github.com/victorcb2003/ClashBackEnd",
  },
  {
    title: "AP4 Clash of League mobile",
    description:
      "Partie mobile d'une application de gestion et communication pour les équipes de Clash of League, avec réservation de stades, planning, messagerie et gestion d'équipe. Réalisé en React Native.",
    image: "/Portfolio/assets/clashofleague.webp",
    github: "https://github.com/victorcb2003/ClashMobile",
  },
];

function Projets() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <style>{`
        body { background-color: #000000; }
        .projets-bg {
          background: linear-gradient(to bottom, #432b11 0%, #000000 100%);
          background-attachment: fixed;
        }
      `}</style>

      <div className="projets-bg relative w-full min-h-screen overflow-x-hidden font-ubuntu text-white">

        {/* Waves fixes (haut de page, comme le CSS l'indique) */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 10 }}>
          <div className="wave7" />
          <div className="wave8" />
          <div className="wave9" />
        </div>
        {/* Waves absolues (bas de page) */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
          <div className="wave10" />
          <div className="wave11" />
          <div className="wave12" />
        </div>

        <Navbar />

        {/* Hero */}
        <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-6">
          <AnimatedComponent animationClass="animate-slide-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug">
              Mes projets scolaires :{" "}
              <span className="text-orange-400">TP et AP</span>
            </h1>
          </AnimatedComponent>
        </section>

        {/* Grille projets + padding-bottom pour passer au-dessus des waves de fin */}
        <section className="w-full px-4 sm:px-8 md:px-10 pb-48 sm:pb-64">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <AnimatedComponent key={idx} animationClass="animate-slide-in-up">
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative bg-[#ff6f3c]/10 backdrop-blur-md border border-orange-400 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_#ff944d] cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 flex flex-col justify-between min-h-[10rem]">
                    <h3 className="text-orange-300 text-base sm:text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-orange-200">
                      {project.description}
                    </p>
                  </div>
                </div>
              </AnimatedComponent>
            ))}
          </div>
        </section>

        {/* Modal — z-index 50 pour passer au-dessus des waves */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center p-4 sm:p-6 overflow-auto"
            style={{ zIndex: 50 }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-[#1e1e1e] rounded-xl w-full max-w-3xl p-5 sm:p-6 relative mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl leading-none"
                aria-label="Fermer"
              >
                ×
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto rounded-md mb-4 object-contain max-h-64 sm:max-h-80"
              />
              <h3 className="text-yellow-300 text-xl sm:text-2xl mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-orange-200 mb-4 text-sm sm:text-base">
                {selectedProject.description}
              </p>
              <div className="flex flex-col gap-2 text-sm sm:text-base">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 underline"
                  >
                    Voir sur GitHub →
                  </a>
                )}
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
    </>
  );
}

export default Projets;