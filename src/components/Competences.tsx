import AnimatedComponent from "../components/AnimatedComponent";

const skills = [
  { name: "HTML", level: 5, image: "/assets/html.png" },
  { name: "CSS", level: 5, image: "/assets/css.png" },
  { name: "JavaScript", level: 3, image: "/assets/js.webp" },
  { name: "PHP", level: 3, image: "/assets/php.png" },
  { name: "MySQL", level: 3, image: "/assets/mysql.png" },
  { name: "React", level: 3, image: "/assets/react.png" },
  { name: "Tailwind CSS", level: 4, image: "/assets/Tailwind_CSS.png" },
  { name: "Github", level: 4, image: "/assets/github.png" },
  { name: "VS code", level: 4, image: "/assets/Visual_Studio_Code.png" },
  { name: "MCD merise", level: 4, image: "/assets/merise.png" },
  { name: "Magento", level: 4, image: "/assets/magento.png" },
  { name: "Teams", level: 4, image: "/assets/teams.png" },
  { name: "Trello", level: 4, image: "/assets/trello.png" },
];

function renderStars(level: number) {
  return (
    <div className="text-yellow-400">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>{index < level ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function Competences() {
  return (
    <section
      id="competences"
      className="min-h-screen w-full bg-transparent text-white px-4 sm:px-6 lg:px-16 text-center flex flex-col pt-20"
    >
      <div className="flex-grow flex flex-col justify-center items-center">
        <AnimatedComponent animationClass="animate-slide-in-up"><h1 className="neon text-4xl text-center mb-10">Mes compétences</h1></AnimatedComponent>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <AnimatedComponent key={index} animationClass="animate-slide-in-up">
              <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 mb-2"
                />
                <span className="text-base sm:text-lg font-semibold">
                  {skill.name}
                </span>
                {renderStars(skill.level)}
              </div>
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competences;

