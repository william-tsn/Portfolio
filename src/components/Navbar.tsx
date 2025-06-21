import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  const navItems = [
    { label: "Accueil", path: "../" },
    { label: "Projets", path: "../projets" },
    { label: "Veille Techno", path: "../veilles-technos" },
    { label: "Entreprise", path: "../entreprises" },
    { label: "Tableau de synthèse", path: "../tableau-synthese" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.innerWidth < 768) return;

      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full h-[100px] flex items-center justify-between px-10 fixed top-0 z-50 bg-transparent font-ubuntu transition-transform duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="text-white text-2xl font-bold"></div>
        <div className="hidden md:flex space-x-10 text-white text-xl">
          {navItems.map(({ label, path }, index) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={index}
                to={path}
                className="relative group text-white"
              >
                {label}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-500
                  ${isActive ? "w-full" : "w-0"}
                  group-hover:w-full`}
                />
              </Link>
            );
          })}
        </div>
        <button
          className="md:hidden text-white text-3xl z-50 fixed top-6 right-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-[70%] bg-black/90 text-white flex flex-col items-center justify-center space-y-6 text-2xl transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
        >
          {navItems.map(({ label, path }, index) => {
            const isActive = location.hash === path;
            return (
              <Link
                key={index}
                to={path}
                className={`hover:text-violet-500 text-white ${isActive ? "border-b-2 border-white" : ""
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div
          className="hidden md:block profil w-12 h-12 rounded-full overflow-hidden cursor-pointer border-2 border-white"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src="/Portfolio/assets/pdp.jpeg"
            alt="Profil"
            className="w-full h-full object-cover"
          />
        </div>
      </nav>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
          aria-label="Fermer la vue agrandie"
        >
          <img
            src="/Portfolio/assets/pdp.jpeg"
            alt="Profil Agrandi"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
