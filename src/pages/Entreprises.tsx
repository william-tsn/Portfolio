import Navbar from "../components/Navbar";
import AnimatedComponent from "../components/AnimatedComponent";

function Entreprise() {
    return (
        <>
            <style>{`
                body { background-color: #000000; }
                .entreprise-bg {
                    background: linear-gradient(to bottom, #081a3b 0%, #000000 100%);
                    background-attachment: fixed;
                }
            `}</style>

            <div className="entreprise-bg w-full min-h-screen font-ubuntu overflow-x-hidden text-white">
                <Navbar />

                {/* Hero */}
                <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-6">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug">
                            Stage & Alternance chez{" "}
                            <span className="text-blue-600">Dream Machine</span>
                        </h1>
                    </AnimatedComponent>
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 justify-center">
                            <div className="border border-blue-600 rounded-xl px-6 sm:px-8 py-4 bg-[#0a1e3f]">
                                <p className="text-blue-600 font-semibold text-base sm:text-lg">Stage 1ère année</p>
                                <p className="text-sm text-gray-300">Avril – Juin 2025</p>
                            </div>
                            <div className="border border-blue-600 rounded-xl px-6 sm:px-8 py-4 bg-[#0a1e3f]">
                                <p className="text-blue-600 font-semibold text-base sm:text-lg">Alternance 2ème année</p>
                                <p className="text-sm text-gray-300">Septembre 2025 – Août 2026</p>
                            </div>
                        </div>
                    </AnimatedComponent>
                </section>

                {/* Présentation entreprise */}
                <section className="px-4 sm:px-6 max-w-3xl mx-auto space-y-5 sm:space-y-6 text-base sm:text-lg text-center py-12 sm:py-16">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <p>
                            Mon parcours chez <span className="text-blue-600">Dream Machine</span> a débuté par un stage de première année, avant de se prolonger en alternance. Dream Machine est une entreprise française fondée en 1996, spécialisée dans la vente de pièces détachées pour véhicules Volkswagen Aircooled et Porsche.
                        </p>
                        <p className="mt-4">
                            Dream Machine est une référence pour les passionnés de voitures classiques, proposant une large gamme de produits allant des kits carburateur aux volants, échappements sport, suspensions, accessoires de camping et équipements pour véhicules de collection.
                        </p>
                        <p className="mt-4">
                            L'entreprise assure une livraison rapide et un service client disponible du lundi au vendredi.
                        </p>
                    </AnimatedComponent>
                </section>

                {/* Texte + image */}
                <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12">
                    <AnimatedComponent animationClass="animate-slide-in">
                        <div className="md:w-1/2 space-y-6 text-left text-lg max-w-xl">
                            <p>
                                Durant mon stage, j'ai contribué à la maintenance et à l'évolution du site e-commerce de Dream Machine, basé sur la plateforme <span className="text-blue-600">Magento</span>, que j'ai installé en local pour mes développements.
                            </p>
                            <p>
                                J'ai participé à divers projets, notamment la traduction des fiches produits et la refonte des pages du footer.
                            </p>
                            <p>
                                En alternance, j'ai pris part à un projet d'envergure bien plus grande : la conception et le développement complet d'un nouveau site e-commerce, <span className="text-blue-600">autoparts-europe.eu</span>, basé sur <span className="text-blue-600">PrestaShop 8</span>.
                            </p>
                        </div>
                    </AnimatedComponent>

                    <AnimatedComponent animationClass="animate-slide-in-right">
                        <div className="md:w-20/21 max-w-md rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="/Portfolio/assets/dreammachine.jpg"
                                alt="Dream Machine"
                                className="object-cover w-full h-full"
                                loading="lazy"
                            />
                        </div>
                    </AnimatedComponent>
                </section>

                {/* Stage 1ère année */}
                <section className="px-4 sm:px-6 py-12 sm:py-20 max-w-5xl mx-auto">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <h2 className="text-3xl sm:text-4xl text-blue-600 mb-3 text-center">Stage — 1ère année</h2>
                        <p className="text-center text-gray-300 mb-10 sm:mb-12">Avril 2025 – Juin 2025 · Magento</p>
                    </AnimatedComponent>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
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
                                description: "Automatisation via l'API OpenAI pour générer les fiches produits en espagnol et allemand.",
                                resultats: "Traductions générées efficacement.",
                            },
                            {
                                nom: "Amélioration de l'interface",
                                description: "Refonte de la création de compte et des pages du footer (mentions légales, CGV, etc.).",
                                resultats: "Expérience utilisateur améliorée.",
                            },
                        ].map((projet, index) => (
                            <AnimatedComponent key={index} animationClass="animate-slide-in-up">
                                <div className="border border-blue-600 rounded-xl p-5 sm:p-6 bg-[#0a1e3f] shadow-lg text-white space-y-2">
                                    <h3 className="text-lg sm:text-xl text-blue-600">{projet.nom}</h3>
                                    <p className="text-sm sm:text-base">{projet.description}</p>
                                    <p className="text-sm sm:text-base">
                                        <span className="text-blue-600">Résultats :</span> {projet.resultats}
                                    </p>
                                </div>
                            </AnimatedComponent>
                        ))}
                    </div>
                </section>

                {/* Alternance 2ème année */}
                <section className="px-4 sm:px-6 py-12 sm:py-20 max-w-5xl mx-auto">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <h2 className="text-3xl sm:text-4xl text-blue-600 mb-3 text-center">Alternance — 2ème année</h2>
                        <p className="text-center text-gray-300 mb-10 sm:mb-12">Septembre 2025 – Août 2026 · PrestaShop 8</p>
                    </AnimatedComponent>

                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <p className="text-base sm:text-lg text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                            En alternance, j'ai travaillé sur la création complète du site <span className="text-blue-600">autoparts-europe.eu</span>, une plateforme e-commerce de vente de pièces auto intégrant un catalogue fournisseur de plus de 27 000 articles, une recherche par plaque d'immatriculation, un filtrage avancé par véhicule et de nombreux modules sur mesure.
                        </p>
                    </AnimatedComponent>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                        {[
                            {
                                nom: "Conception & design du site (PrestaShop 8)",
                                description: "Mise en place complète de la boutique autoparts-europe.eu : thème, structure des pages, ergonomie et identité visuelle.",
                                resultats: "Site e-commerce fonctionnel et en ligne.",
                            },
                            {
                                nom: "Module catalogue fournisseur (~27 000 articles)",
                                description: "Développement d'un module d'import et de synchronisation automatique du catalogue d'un fournisseur européen via API.",
                                resultats: "27 000 produits intégrés et mis à jour automatiquement.",
                            },
                            {
                                nom: "Module filtrage véhicule (vehiclefilter)",
                                description: "Développement d'un filtre de recherche de pièces par marque, modèle, motorisation et plaque d'immatriculation.",
                                resultats: "Recherche de pièces précise et intuitive pour l'utilisateur.",
                            },
                            {
                                nom: "Module conformité fiscale B2B OSS/VIES",
                                description: "Intégration d'un module de gestion de la TVA intracommunautaire et vérification VIES pour les clients professionnels européens.",
                                resultats: "Conformité fiscale B2B assurée.",
                            },
                            {
                                nom: "Module connexion OAuth Google",
                                description: "Développement d'un module de connexion et d'inscription rapide via compte Google.",
                                resultats: "Expérience de connexion simplifiée pour les clients.",
                            },
                            {
                                nom: "Correction & restructuration BDD catégories PrestaShop",
                                description: "Audit et refonte de l'arborescence des catégories produits dans la base de données pour une navigation optimisée.",
                                resultats: "Catalogue structuré, navigation et SEO améliorés.",
                            },
                        ].map((projet, index) => (
                            <AnimatedComponent key={index} animationClass="animate-slide-in-up">
                                <div className="border border-blue-600 rounded-xl p-5 sm:p-6 bg-[#0a1e3f] shadow-lg text-white space-y-2">
                                    <h3 className="text-lg sm:text-xl text-blue-600">{projet.nom}</h3>
                                    <p className="text-sm sm:text-base">{projet.description}</p>
                                    <p className="text-sm sm:text-base">
                                        <span className="text-blue-600">Résultats :</span> {projet.resultats}
                                    </p>
                                </div>
                            </AnimatedComponent>
                        ))}
                    </div>
                </section>

                {/* Outils utilisés */}
                <section className="px-4 sm:px-6 py-12 sm:py-20 max-w-5xl mx-auto">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <h2 className="text-3xl sm:text-4xl text-blue-600 mb-10 sm:mb-12 text-center">Outils utilisés</h2>
                    </AnimatedComponent>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
                        {[
                            {
                                nom: "PrestaShop 8",
                                image: "/Portfolio/assets/prestashop.png",
                                desc: "Plateforme e-commerce open source utilisée pour le développement complet du site autoparts-europe.eu en alternance.",
                            },
                            {
                                nom: "Magento",
                                image: "/Portfolio/assets/magento.png",
                                desc: "Plateforme e-commerce utilisée lors du stage de première année pour gérer le site et les produits Dream Machine.",
                            },
                            {
                                nom: "FileZilla",
                                image: "/Portfolio/assets/filezilla.png",
                                desc: "Client FTP utilisé pour le transfert de fichiers vers le serveur.",
                            },
                            {
                                nom: "Visual Studio Code",
                                image: "/Portfolio/assets/Visual_Studio_Code.png",
                                desc: "Éditeur de code principal pour le développement des modules, scripts et la modification du site.",
                            },
                            {
                                nom: "API OpenAI",
                                image: "/Portfolio/assets/openai.png",
                                desc: "Utilisée pour automatiser la traduction de 12 000 fiches produits en espagnol et en allemand.",
                            },
                            {
                                nom: "MySQL / PhpMyAdmin",
                                image: "/Portfolio/assets/mysql.png",
                                desc: "Gestion et restructuration de la base de données produits et catégories du site PrestaShop.",
                            },
                        ].map((outil, index) => (
                            <AnimatedComponent key={index} animationClass="animate-slide-in-up">
                                <div className="text-center space-y-3 sm:space-y-4">
                                    <img
                                        src={outil.image}
                                        alt={outil.nom}
                                        className="h-20 sm:h-24 mx-auto object-contain"
                                        loading="lazy"
                                    />
                                    <h3 className="text-lg sm:text-xl text-blue-600">{outil.nom}</h3>
                                    <p className="text-sm sm:text-base">{outil.desc}</p>
                                </div>
                            </AnimatedComponent>
                        ))}
                    </div>
                </section>

                {/* Sites réalisés */}
                <section className="w-full px-4 sm:px-6 pt-20 sm:pt-28 pb-48 sm:pb-64">
                    <div className="flex flex-col md:flex-row gap-16 md:gap-8 max-w-6xl mx-auto w-full">

                        {/* Dream Machine — gauche */}
                        <div className="w-full md:w-1/2">
                            <AnimatedComponent animationClass="animate-slide-in">
                                <div className="flex flex-col items-center text-center">
                                    <h2 className="text-2xl sm:text-3xl text-blue-600 mb-4">Site de l'entreprise</h2>
                                    <a
                                        href="https://www.dream-machine.fr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base sm:text-lg text-blue-600 hover:underline break-all mb-8"
                                    >
                                        https://www.dream-machine.fr/
                                    </a>
                                    <div className="w-full rounded-xl shadow-lg overflow-hidden" style={{ height: "180px", backgroundColor: "#ffffff" }}>
                                        <img
                                            src="/Portfolio/assets/dreamlogo.jpg"
                                            alt="Logo Dream Machine"
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </AnimatedComponent>
                        </div>

                        {/* Autoparts — droite */}
                        <div className="w-full md:w-1/2">
                            <AnimatedComponent animationClass="animate-slide-in-right">
                                <div className="flex flex-col items-center text-center">
                                    <h2 className="text-2xl sm:text-3xl text-blue-600 mb-4">Site réalisé en alternance</h2>
                                    <a
                                        href="https://autoparts-europe.eu/fr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base sm:text-lg text-blue-600 hover:underline break-all mb-8"
                                    >
                                        https://autoparts-europe.eu/fr/
                                    </a>
                                    <div className="w-full rounded-xl shadow-lg overflow-hidden" style={{ height: "180px", backgroundColor: "#000000" }}>
                                        <img
                                            src="/Portfolio/assets/autoparts.jpg"
                                            alt="Screenshot autoparts-europe.eu"
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </AnimatedComponent>
                        </div>

                    </div>
                </section>

                <div className="wave19 pointer-events-none" />
                <div className="wave20 pointer-events-none" />
                <div className="wave21 pointer-events-none" />
                <div className="wave22 pointer-events-none" />
                <div className="wave23 pointer-events-none" />
                <div className="wave24 pointer-events-none" />
            </div>
        </>
    );
}

export default Entreprise;