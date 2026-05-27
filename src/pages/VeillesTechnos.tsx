import { useState } from "react";
import Navbar from "../components/Navbar";
import AnimatedComponent from "../components/AnimatedComponent";
import { Rss, X, Newspaper, Bell, Globe } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

type Source = {
    icon: React.ReactNode;
    titre: string;
    desc: string;
    capture: string;
    dernier: {
        titre: string;
        desc: string;
        url: string;
    };
};

function VeilleTechno() {
    const [selectedSource, setSelectedSource] = useState<Source | null>(null);

    const sources: Source[] = [
        {
            icon: <Rss size={36} />,
            titre: "Flux RSS — Feedly",
            desc: "Je centralise mes flux RSS dans Feedly, dans un dossier dédié « NVIDIA VEILLE » regroupant 6 sources officielles : GeForce.com News, NVIDIA Newsroom, NVIDIA Blog, NVIDIA Technical Blog et NVIDIA Product Security.",
            capture: "/Portfolio/assets/veille/feedly.png",
            dernier: {
                titre: "Vera Arrives: NVIDIA's First CPU Built for Agents Lands at Top AI Labs",
                desc: "Article publié le 18 mai 2026 sur le blog NVIDIA. Il annonce la livraison des tout premiers CPU NVIDIA Vera, le premier processeur de l'entreprise conçu spécifiquement pour les agents IA. Les trois premiers exemplaires ont été livrés aux laboratoires Anthropic (San Francisco), OpenAI (Mission Bay) et SpaceXAI (Palo Alto), suivis d'une livraison à Oracle Cloud Infrastructure à Santa Clara. Cette annonce marque l'entrée de NVIDIA sur le marché des CPU, jusqu'ici dominé par Intel et AMD.",
                url: "https://nvidianews.nvidia.com/",
            },
        },
        {
            icon: <X size={36} />,
            titre: "Réseaux sociaux — X",
            desc: "Je suis le compte officiel @nvidia sur X (2,5 millions d'abonnés) pour suivre en temps réel les annonces produits, conférences et partenariats stratégiques.",
            capture: "/Portfolio/assets/veille/twitter.png",
            dernier: {
                titre: "Repost @NVIDIAGTC",
                desc: "Le compte officiel @nvidia repartage régulièrement les publications de @NVIDIAGTC, le compte dédié à la conférence annuelle GPU Technology Conference (GTC). Ces reposts incluent les annonces de keynotes, les présentations techniques des nouvelles architectures GPU et les démonstrations en direct des partenaires industriels lors de l'événement majeur de NVIDIA.",
                url: "https://x.com/nvidia",
            },
        },
        {
            icon: <FaYoutube size={36} />,
            titre: "YouTube & Conférences",
            desc: "Abonné à la chaîne officielle @NVIDIA (2,18 M abonnés, 2,6k vidéos) pour suivre les keynotes GTC/CES, les podcasts AI et les démonstrations techniques.",
            capture: "/Portfolio/assets/veille/youtube.png",
            dernier: {
                titre: "Turning Tokens Into Business Value",
                desc: "Épisode du AI Podcast de NVIDIA avec Shruti Koparkar (NVIDIA). La vidéo explore comment les entreprises peuvent transformer la consommation de tokens d'IA (les unités de calcul utilisées par les modèles de langage) en valeur business concrète : optimisation des coûts d'inférence, choix des modèles, et stratégies de déploiement de l'IA générative à l'échelle de l'entreprise.",
                url: "https://www.youtube.com/@NVIDIA",
            },
        },
        {
            icon: <Newspaper size={36} />,
            titre: "Veille produits — Frandroid",
            desc: "Je consulte les plateformes comme Frandroid pour suivre la disponibilité et les prix des produits NVIDIA en France (cartes graphiques GeForce, boîtiers Shield TV).",
            capture: "/Portfolio/assets/veille/frandroid.png",
            dernier: {
                titre: "Top produits NVIDIA",
                desc: "Page de Frandroid qui agrège l'ensemble des produits grand public NVIDIA disponibles en France, avec leurs tests, comparatifs et prix actuels. On y retrouve les boîtiers multimédia NVIDIA Shield TV (Pro, classique, Tablet) ainsi que les cartes graphiques GeForce RTX. Cette page me permet de suivre la disponibilité et les promotions des produits NVIDIA grand public sur le marché français.",
                url: "https://www.frandroid.com/produits/nvidia",
            },
        },
        {
            icon: <Bell size={36} />,
            titre: "Google Alertes",
            desc: "J'ai configuré une alerte Google sur le mot-clé « nvidia » qui m'envoie quotidiennement par mail les nouvelles publications de presse mentionnant l'entreprise.",
            capture: "/Portfolio/assets/veille/google-alerts.png",
            dernier: {
                titre: "NVIDIA : résultats record portés par l'IA et le marché technologique",
                desc: "Article publié sur Le Revenu, média financier français spécialisé en bourse et placements. L'article analyse les résultats trimestriels exceptionnels de NVIDIA, qui ont battu des records historiques grâce à l'explosion de la demande en intelligence artificielle. Il examine également l'impact de ces résultats sur le cours de bourse (NASDAQ: NVDA) et les perspectives du marché technologique pour les mois à venir.",
                url: "https://www.lerevenu.com/reussir-bourse/conseils-bourse/nvidia-resultats-record-ia-marche-technologique/",
            },
        },
        {
            icon: <Globe size={36} />,
            titre: "Site officiel — Newsroom",
            desc: "Je consulte directement la newsroom officielle nvidianews.nvidia.com pour accéder aux communiqués de presse et annonces financières de première main.",
            capture: "/Portfolio/assets/veille/newsroom.png",
            dernier: {
                titre: "NVIDIA Announces Financial Results for First Quarter Fiscal 2027",
                desc: "Communiqué de presse officiel publié sur nvidianews.nvidia.com le 20 mai 2026. NVIDIA annonce un chiffre d'affaires record de 81,6 milliards de dollars pour le premier trimestre fiscal 2027 (clos le 26 avril 2026), en hausse de 20% par rapport au trimestre précédent et de 85% par rapport à l'année précédente. Le communiqué détaille les performances par segment (data center, gaming, visualisation professionnelle, automobile) et donne les perspectives pour le trimestre suivant.",
                url: "https://nvidianews.nvidia.com/",
            },
        },
    ];

    return (
        <>
            <style>{`
                body { background-color: #0d1f0a; }
                .veille-bg {
                    background: linear-gradient(to bottom, #0d1f0a 0%, #000000 100%);
                    background-attachment: fixed;
                }
            `}</style>

            <div className="veille-bg w-full min-h-screen font-ubuntu overflow-x-hidden text-white relative">
                <Navbar />

                <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-6">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl leading-snug">
                            Veille technologique sur{" "}
                            <strong className="text-green-400">NVIDIA</strong>
                        </h2>
                    </AnimatedComponent>
                    <div className="wave13 pointer-events-none" />
                    <div className="wave14 pointer-events-none" />
                    <div className="wave15 pointer-events-none" />
                </div>

                <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center py-16 sm:py-20 space-y-8 sm:space-y-10">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <h1
                            className="text-2xl sm:text-3xl md:text-4xl mb-4"
                            style={{ textShadow: "0 0 8px #4ade80" }}
                        >
                            Pourquoi NVIDIA ?
                        </h1>
                        <div className="max-w-3xl space-y-5 sm:space-y-6">
                            <p className="text-base sm:text-lg leading-relaxed">
                                NVIDIA est un leader mondial dans les technologies de calcul
                                accéléré, spécialisé dans les GPU (unités de traitement graphique)
                                utilisés dans les jeux, l'intelligence artificielle, les centres
                                de données et l'automobile.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed">
                                Les GPU NVIDIA de dernière génération, comme la série{" "}
                                <strong className="text-green-400">RTX 50</strong>, offrent des
                                performances exceptionnelles en ray tracing et en IA, permettant
                                des expériences immersives et des avancées majeures dans la
                                recherche scientifique et l'industrie.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed">
                                NVIDIA pousse également l'innovation dans des domaines clés comme
                                le <strong className="text-green-400">deep learning</strong>, la{" "}
                                <strong className="text-green-400">simulation 3D</strong> avec sa
                                plateforme{" "}
                                <strong className="text-green-400">Omniverse</strong>, et l'
                                <strong className="text-green-400">
                                    informatique accélérée
                                </strong>{" "}
                                pour les centres de données et véhicules autonomes.
                            </p>
                        </div>
                    </AnimatedComponent>
                </section>

                <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center py-16 sm:py-20 space-y-8 sm:space-y-10">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <h1
                            className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10"
                            style={{ textShadow: "0 0 8px #4ade80" }}
                        >
                            Comment je récupère les actualités ?
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 max-w-5xl mx-auto text-left">
                            {sources.map((item, index) => (
                                <AnimatedComponent key={index} animationClass="animate-slide-in-up">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedSource(item)}
                                        className="w-full text-left border border-green-700 rounded-xl p-5 sm:p-6 bg-[#0d1f0a] shadow-lg space-y-3 h-full hover:border-green-400 hover:shadow-green-900/50 transition cursor-pointer"
                                    >
                                        <div className="text-green-400">{item.icon}</div>
                                        <h3 className="text-lg sm:text-xl text-green-400">
                                            {item.titre}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                            {item.desc}
                                        </p>
                                        <p className="text-xs text-green-400 font-semibold pt-2">
                                            Cliquer pour voir la preuve →
                                        </p>
                                    </button>
                                </AnimatedComponent>
                            ))}
                        </div>
                    </AnimatedComponent>
                </section>

                <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center py-16 sm:py-20 space-y-8 sm:space-y-10">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <h1
                            className="text-2xl sm:text-3xl md:text-4xl mb-4"
                            style={{ textShadow: "0 0 8px #4ade80" }}
                        >
                            Actualités de NVIDIA
                        </h1>
                        <div className="max-w-3xl text-left">
                            <ul className="space-y-4 text-base sm:text-lg list-disc list-inside">
                                <li>
                                    
                                       <a href="https://blogs.nvidia.com/blog/vera-cpu-phoronix/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-300 transition"
                                    >
                                        <strong className="text-green-400">
                                            26 mai 2026 — Vera CPU face à la concurrence
                                        </strong>
                                    </a>{" "}
                                    : Les premiers benchmarks publiés par Phoronix confirment la
                                    supériorité du nouveau CPU NVIDIA Vera dans les charges
                                    agentiques, grâce à ses cœurs rapides, sa bande passante
                                    mémoire massive et ses performances soutenues sous pleine
                                    charge.
                                </li>
                                <li>
                                    
                                       <a href="https://blogs.nvidia.com/blog/nvidia-gtc-taipei-computex-2026-news/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-300 transition"
                                    >
                                        <strong className="text-green-400">
                                            21 mai 2026 — NVIDIA GTC Taipei à COMPUTEX
                                        </strong>
                                    </a>{" "}
                                    : Développeurs, chercheurs et leaders industriels mondiaux se
                                    réunissent à Taipei pour explorer les dernières avancées : AI
                                    factories, infrastructures à grande échelle, IA agentique et
                                    physique.
                                </li>
                                <li>
                                    
                                       <a href="https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-300 transition"
                                    >
                                        <strong className="text-green-400">
                                            20 mai 2026 — Résultats financiers Q1 fiscal 2027
                                        </strong>
                                    </a>{" "}
                                    : NVIDIA annonce un chiffre d'affaires record de 81,6
                                    milliards de dollars pour le trimestre clos le 26 avril 2026,
                                    en hausse de 20% par rapport au trimestre précédent et de 85%
                                    sur un an.
                                </li>
                                <li>
                                    
                                       <a href="https://blogs.nvidia.com/blog/google-cloud-developer-community-ai-builders/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-300 transition"
                                    >
                                        <strong className="text-green-400">
                                            19 mai 2026 — NVIDIA & Google Cloud à Google I/O
                                        </strong>
                                    </a>{" "}
                                    : Les deux entreprises accélèrent le travail de plus de 100
                                    000 développeurs de leur communauté commune, avec parcours
                                    d'apprentissage, laboratoires pratiques et événements
                                    dédiés.
                                </li>
                                <li>
                                    
                                       <a href="https://blogs.nvidia.com/blog/vera-cpu-delivery/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-300 transition"
                                    >
                                        <strong className="text-green-400">
                                            18 mai 2026 — Premiers CPU NVIDIA Vera livrés
                                        </strong>
                                    </a>{" "}
                                    : Le premier CPU NVIDIA conçu pour les agents IA est livré aux
                                    laboratoires de pointe Anthropic (San Francisco), OpenAI
                                    (Mission Bay) et SpaceXAI (Palo Alto), suivi d'une livraison à
                                    Oracle Cloud Infrastructure à Santa Clara.
                                </li>
                                <li>
                                    
                                       <a href="https://blogs.nvidia.com/blog/your-career-starts-at-the-beginning-of-the-ai-revolution-nvidia-ceo-tells-graduates/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-300 transition"
                                    >
                                        <strong className="text-green-400">
                                            10 mai 2026 — Discours de Jensen Huang à Carnegie
                                            Mellon
                                        </strong>
                                    </a>{" "}
                                    : Le fondateur et CEO de NVIDIA donne le discours d'ouverture
                                    de la promotion 2026 de Carnegie Mellon University, soulignant
                                    que les diplômés démarrent leur carrière au tout début de la
                                    révolution de l'IA.
                                </li>
                                <li>
                                    
                                       <a href="https://nvidianews.nvidia.com/news/nvidia-names-suzanne-nora-johnson-to-board-of-directors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-300 transition"
                                    >
                                        <strong className="text-green-400">
                                            8 mai 2026 — Suzanne Nora Johnson rejoint le conseil
                                        </strong>
                                    </a>{" "}
                                    : NVIDIA nomme Suzanne Nora Johnson à son conseil
                                    d'administration, avec une prise de fonction effective le 13
                                    juillet 2026.
                                </li>
                                <li>
                                    
                                       <a href="https://nvidianews.nvidia.com/news/nvidia-and-iren-announce-strategic-partnership-to-accelerate-deployment-of-up-to-5-gigawatts-of-ai-infrastructure"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-300 transition"
                                    >
                                        <strong className="text-green-400">
                                            7 mai 2026 — Partenariat NVIDIA / IREN (5 GW)
                                        </strong>
                                    </a>{" "}
                                    : NVIDIA et IREN Limited annoncent un partenariat stratégique
                                    pour accélérer le déploiement de jusqu'à 5 gigawatts
                                    d'infrastructures d'IA de nouvelle génération.
                                </li>
                                <li>
                                    
                                       <a href="https://nvidianews.nvidia.com/news/nvidia-and-corning-announce-long-term-partnership-to-strengthen-us-manufacturing-for-ai-infrastructure"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-300 transition"
                                    >
                                        <strong className="text-green-400">
                                            6 mai 2026 — Partenariat NVIDIA / Corning
                                        </strong>
                                    </a>{" "}
                                    : NVIDIA et Corning annoncent un partenariat technologique
                                    pluriannuel pour développer la fabrication américaine de
                                    solutions de connectivité optique avancée pour l'infrastructure
                                    IA.
                                </li>
                                <li>
                                    
                                       <a href="https://blogs.nvidia.com/blog/nemotron-3-nano-omni-multimodal-ai-agents/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-300 transition"
                                    >
                                        <strong className="text-green-400">
                                            28 avril 2026 — Modèle Nemotron 3 Nano Omni
                                        </strong>
                                    </a>{" "}
                                    : NVIDIA lance un modèle multimodal ouvert qui unifie vision,
                                    audio et langage pour des agents IA jusqu'à 9 fois plus
                                    efficaces.
                                </li>
                            </ul>
                            <p className="text-xs text-gray-500 mt-6 text-center italic">
                                Source : nvidianews.nvidia.com — Latest News
                            </p>
                        </div>
                    </AnimatedComponent>
                </section>

                <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 space-y-8 sm:space-y-10">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <h1
                            className="text-2xl sm:text-3xl md:text-4xl text-center"
                            style={{ textShadow: "0 0 8px #4ade80" }}
                        >
                            Présentation
                        </h1>

                        <div className="hidden md:block border-4 border-green-700 rounded-xl overflow-hidden shadow-2xl">
                            <iframe
                                src="https://docs.google.com/presentation/d/e/2PACX-1vRR341tq2ABSgaPpeYyMBjE1jpd2VyMZA-7QO_pEwi-wGKZqZESHtAz4H1IKySlNeV4z9At40ATzwoV/pubembed?start=true&loop=true&delayms=10000"
                                width="908"
                                height="540"
                                allowFullScreen
                                loading="lazy"
                                title="Présentation NVIDIA"
                                style={{ display: "block", border: "none" }}
                            />
                        </div>

                        <div className="block md:hidden text-center">
                            <p className="text-base mb-4">
                                Cliquez ci-dessous pour voir la présentation :
                            </p>
                            
                               <a href="https://docs.google.com/presentation/d/e/2PACX-1vRR341tq2ABSgaPpeYyMBjE1jpd2VyMZA-7QO_pEwi-wGKZqZESHtAz4H1IKySlNeV4z9At40ATzwoV/pub?start=true&loop=true&delayms=10000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 underline hover:text-green-300 transition"
                            >
                                Ouvrir la présentation
                            </a>
                        </div>
                    </AnimatedComponent>
                </section>

                <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-12 sm:pt-16 pb-48 sm:pb-64 space-y-4 sm:space-y-6">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <h1
                            className="text-2xl sm:text-3xl md:text-4xl"
                            style={{ textShadow: "0 0 8px #4ade80" }}
                        >
                            Ressources officielles
                        </h1>
                        <p className="text-base sm:text-lg">
                            Pour plus d'informations, visitez le site officiel de Nvidia :
                            <br />
                            
                                <a href="https://nvidianews.nvidia.com/news/latest"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 underline hover:text-green-300 transition"
                            >
                                Dernières actus de NVIDIA
                            </a>
                        </p>
                    </AnimatedComponent>
                </section>

                <div className="wave16 pointer-events-none" />
                <div className="wave17 pointer-events-none" />
                <div className="wave18 pointer-events-none" />
            </div>

            {selectedSource && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedSource(null)}
                >
                    <div
                        className="bg-[#0d1f0a] border-2 border-green-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-4 relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedSource(null)}
                            className="absolute top-4 right-4 text-green-400 hover:text-green-300 text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-green-900/30 transition"
                            aria-label="Fermer"
                        >
                            ✕
                        </button>
                        <div className="text-green-400">{selectedSource.icon}</div>
                        <h3 className="text-xl sm:text-2xl text-green-400 pr-8">
                            {selectedSource.titre}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                            {selectedSource.desc}
                        </p>
                        <img
                            src={selectedSource.capture}
                            alt={selectedSource.titre}
                            className="rounded-md border border-green-900 w-full"
                        />
                        <div className="pt-4 border-t border-green-900/60">
                            <p className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-1">
                                Dernier consulté
                            </p>
                            
                               <a href={selectedSource.dernier.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold text-gray-100 hover:text-green-400 underline transition block mb-2"
                            >
                                {selectedSource.dernier.titre}
                            </a>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {selectedSource.dernier.desc}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default VeilleTechno;