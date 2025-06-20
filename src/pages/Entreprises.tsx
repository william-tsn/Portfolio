import Navbar from "../components/Navbar";
import AnimatedComponent from "../components/AnimatedComponent";


function Entreprise() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#081a3b] to-[#031024] font-ubuntu overflow-x-hidden text-white">
            <Navbar />

            <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-6">
                <AnimatedComponent animationClass="animate-slide-in-up">
                    <h1 className="text-4xl md:text-5xl">
                        Stage de première année chez <span className="text-blue-600">Dream Machine</span>
                    </h1>
                </AnimatedComponent>
            </section>
            <section className="px-6 max-w-3xl mx-auto space-y-6 text-lg text-center">
                <AnimatedComponent animationClass="animate-slide-in-up">
                    <p>
                        Mon stage s'est déroulé chez <span className="text-blue-600">Dream Machine</span>, une entreprise française fondée en 1996, spécialisée dans la vente de pièces détachées pour véhicules Volkswagen Aircooled et Porsche.
                    </p>
                    <p>
                        Dream Machine est une référence pour les passionnés de voitures classiques, proposant une large gamme de produits allant des kits carburateur aux volants, échappements sport, suspensions, accessoires de camping et équipements pour véhicules de collection.
                    </p>
                    <p>
                        L'entreprise assure une livraison rapide et un service client disponible du lundi au vendredi.
                    </p>
                </AnimatedComponent>
            </section>

            <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12">
                <AnimatedComponent animationClass="animate-slide-in">
                    <div className="md:w-1/2 space-y-6 text-left text-lg max-w-xl">
                        <p>
                            Durant mon stage, j'ai contribué à la maintenance et à l'évolution du site e-commerce de Dream Machine, basé sur la plateforme <span className="text-blue-600">Magento</span>, que j'ai installé en local pour mes développements.
                        </p>
                        <p>
                            J'ai participé à divers projets, notamment la traduction des fiches produits et la refonte des pages du footer.
                        </p>
                    </div>
                </AnimatedComponent>

                <AnimatedComponent animationClass="animate-slide-in-right">
                    <div className="md:w-20/21 max-w-md rounded-xl overflow-hidden shadow-lg">
                        <img
                            src="../src/assets/dreammachine.jpg"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </AnimatedComponent>
            </section>

            <section className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
                <AnimatedComponent animationClass="animate-slide-in-up">
                    <h2 className="text-4xl text-blue-600 mb-12 text-center">Projets réalisés</h2>
                </AnimatedComponent>

                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        {
                            nom: "Installation de Magento en local",
                            description: "Mise en place d'une version locale du site pour travailler sans impacter la production.",
                            resultats: "Serveur local stable et fonctionnel.",
                        },
                        {
                            nom: "Changement de serveur",
                            description: "Participation à la migration pour garantir le bon fonctionnement du site.",
                            resultats: "Site migré avec succès.",
                        },
                        {
                            nom: "Traduction de 12 000 articles",
                            description: "Automatisation via l'API ChatGPT pour générer les fiches produits en espagnol et allemand.",
                            resultats: "Traductions générées efficacement.",
                        },
                        {
                            nom: "Amélioration de l'interface",
                            description: "Refonte de la création de compte et des pages du footer (mentions légales, CGV, etc.).",
                            resultats: "Expérience utilisateur améliorée.",
                        },
                    ].map((projet, index) => (
                        <AnimatedComponent key={index} animationClass="animate-slide-in-up">
                            <div className="border border-blue-600 rounded-xl p-6 bg-[#0a1e3f] shadow-lg text-white space-y-2">
                                <h3 className="text-xl text-blue-600">{projet.nom}</h3>
                                <p>{projet.description}</p>
                                <p>
                                    <span className="text-blue-600">Résultats :</span> {projet.resultats}
                                </p>
                            </div>
                        </AnimatedComponent>
                    ))}
                </div>
            </section>

            <section className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
                <AnimatedComponent animationClass="animate-slide-in-up">
                    <h2 className="text-4xl text-blue-600 mb-12 text-center">Outils utilisés</h2>
                </AnimatedComponent>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            nom: "Magento",
                            image: "../src/assets/magento.png",
                            desc: "Plateforme e-commerce open source utilisée pour gérer le site et les produits.",
                        },
                        {
                            nom: "FileZilla",
                            image: "../src/assets/filezilla.png",
                            desc: "Client FTP utilisé pour le transfert de fichiers vers le serveur.",
                        },
                        {
                            nom: "Visual Studio Code",
                            image: "../src/assets/Visual_Studio_Code.png",
                            desc: "Éditeur de code principal pour le développement des scripts et la modification du site.",
                        },
                    ].map((outil, index) => (
                        <AnimatedComponent key={index} animationClass="animate-slide-in-up">
                            <div className="text-center space-y-4">
                                <img
                                    src={outil.image}
                                    alt={outil.nom}
                                    className="h-24 mx-auto object-contain"
                                />
                                <h3 className="text-xl text-blue-600">{outil.nom}</h3>
                                <p>{outil.desc}</p>
                            </div>
                        </AnimatedComponent>
                    ))}
                </div>
            </section>

            <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 pb-36 bg-transparent text-center">
                <AnimatedComponent animationClass="animate-slide-in-up">
                    <h2 className="text-4xl text-blue-600 mb-6">Site web de l'entreprise</h2>
                    <a
                        href="https://www.dream-machine.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl text-blue-600 hover:underline"
                    >
                        https://www.dream-machine.fr/
                    </a>
                    <div className="mt-12 w-96 h-92 rounded-xl shadow-lg flex items-center justify-center overflow-hidden mx-auto">
                        <img
                            src="../src/assets/dreamlogo.jpg"
                            alt="Logo Dream Machine"
                            className="object-contain max-w-full max-h-full"
                        />
                    </div>
                </AnimatedComponent>
            </section>

            <div className="wave19 pointer-events-none" />
            <div className="wave20 pointer-events-none" />
            <div className="wave21 pointer-events-none" />
            <div className="wave22 pointer-events-none" />
            <div className="wave23 pointer-events-none" />
            <div className="wave24 pointer-events-none" />
        </div>
    );
}

export default Entreprise;
