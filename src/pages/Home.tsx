import Navbar from "../components/Navbar";
import AnimatedComponent from "../components/AnimatedComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Competences from "../components/Competences";
import ParticlesName from "../components/ParticalesName";

function Accueil() {
  return (
    <div className="font-ubuntu w-full min-h-screen bg-gradient-to-b from-[#0f0a1f] to-black overflow-x-hidden text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl">
          Bienvenue sur mon portfolio
        </h2>
        <ParticlesName />
        <div className="wave1 pointer-events-none" />
        <div className="wave2 pointer-events-none" />
        <div className="wave3 pointer-events-none" />
      </div>
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center py-20 space-y-10 bg-transparent">
        <AnimatedComponent animationClass="animate-slide-in-up">
          <h1 className="neon text-4xl mb-4">Qui suis-je</h1>
          <div className="max-w-2xl space-y-6">
            <p className="text-lg leading-relaxed">
              Bonjour, je m'appelle <strong>William Tousson</strong>, j'ai 19 ans.
              Après un <strong className="text-purple-400">Bac Pro MELEC</strong>, j'ai choisi de me spécialiser dans l'informatique
              en intégrant un <strong className="text-purple-400">BTS SIO</strong> à l'IPSSI,
              une grande école d'informatique située à Saint-Quentin-en-Yvelines.
            </p>
            <p className="text-lg">Vous retrouverez ci-dessous mon CV :</p>

            <a
              download
              href="/Portfolio/assets/tousson-william-cv.pdf"
              className="inline-block px-6 py-2 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-black transition mt-4"
            >
              MON CV
            </a>
          </div>
        </AnimatedComponent>
      </section>
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center py-20 space-y-10 bg-transparent">
        <AnimatedComponent animationClass="animate-slide-in-right">
          <h1 className="neon text-4xl mb-4">Ma formation</h1>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg">
              <strong>BTS SIO :</strong> Brevet de Technicien Supérieur en Services Informatiques aux Organisations.
            </p>
            <div className="border border-purple-400 p-4 rounded-lg space-y-2">
              <h2 className="text-xl text-purple-400 mb-2">Cours Communs :</h2>
              <ul className="space-y-1">
                {[
                  "Culture générale et expression",
                  "Mathématiques pour l'informatique",
                  "Culture économique, managériale et juridique",
                  "Expression en langue anglaise"
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-purple-400 p-4 rounded-lg space-y-2">
              <h2 className="text-xl text-purple-400 mb-2">Spécialité choisie Option SLAM :</h2>
              <p>
                L'option SLAM (Solutions Logicielles et Applications Métiers) forme aux métiers du développement de logiciels,
                de la conception d'applications et de la gestion des services informatiques.
              </p>
            </div>
          </div>
        </AnimatedComponent>
      </section>
      <Competences />
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center py-20 space-y-10 bg-transparent">
        <AnimatedComponent animationClass="animate-slide-in-up">
          <h1 className="neon text-4xl">Me contacter</h1>
        <div className="space-y-6">
            <h2 className="text-2xl hover:text-violet-400 cursor-pointer pt-6">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <a href="tel:0769058970">07 69 05 89 70</a>
            </h2>
            <h2 className="text-2xl hover:text-violet-400 cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:william.tousson@gmail.com">william.tousson@gmail.com</a>
            </h2>
            <h2 className="text-2xl hover:text-violet-400 cursor-pointer">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              <a href="https://www.linkedin.com/in/william-tousson-a122b033a/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </h2>
        </div>
        </AnimatedComponent>
      </section>

      <div className="wave4 pointer-events-none" />
      <div className="wave5 pointer-events-none" />
      <div className="wave6 pointer-events-none" />
    </div>
  );
}

export default Accueil;
