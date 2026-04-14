import Navbar from "../components/Navbar";
import AnimatedComponent from "../components/AnimatedComponent";

function VeilleTechno() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#0d1f0a] to-black font-ubuntu overflow-x-hidden text-white relative">
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-6">
                <AnimatedComponent animationClass="animate-slide-in-up">
                    <h2 className="text-3xl md:text-4xl">
                        Veille technologique sur <strong className="text-green-400">NVIDIA</strong>
                    </h2>
                </AnimatedComponent>
                <div className="wave13 pointer-events-none" />
                <div className="wave14 pointer-events-none" />
                <div className="wave15 pointer-events-none" />
            </div>
            <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center py-20 space-y-10 bg-transparent">
                <AnimatedComponent animationClass="animate-slide-in-up">
                    <h1 className="text-4xl mb-4" style={{ textShadow: "0 0 8px #4ade80" }}>
                        Pourquoi NVIDIA ?
                    </h1>
                    <div className="max-w-3xl space-y-6">
                        <p className="text-lg leading-relaxed">
                            NVIDIA est un leader mondial dans les technologies de calcul accéléré, spécialisé dans les GPU (unités de traitement graphique) utilisés dans les jeux, l'intelligence artificielle, les centres de données et l'automobile.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Les GPU NVIDIA de dernière génération, comme la série <strong className="text-green-400">RTX 50</strong>, offrent des performances exceptionnelles en ray tracing et en IA, permettant des expériences immersives et des avancées majeures dans la recherche scientifique et l'industrie.
                        </p>
                        <p className="text-lg leading-relaxed">
                            NVIDIA pousse également l'innovation dans des domaines clés comme le <strong className="text-green-400">deep learning</strong>, la <strong className="text-green-400">simulation 3D</strong> avec sa plateforme <strong className="text-green-400">Omniverse</strong>, et l'<strong className="text-green-400">informatique accélérée</strong> pour les centres de données et véhicules autonomes.
                        </p>
                    </div>
                </AnimatedComponent>
            </section>

            <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center py-20 space-y-10 bg-transparent">
                <AnimatedComponent animationClass="animate-slide-in-up">
                    <h1 className="text-4xl mb-4" style={{ textShadow: "0 0 8px #4ade80" }}>
                        Actualités de NVIDIA
                    </h1>
                    <div className="max-w-3xl space-y-6 text-left">
                        <ul className="space-y-4 text-lg list-disc list-inside">
                            <li>
                                <strong className="text-green-400">Mars 2026 - NVIDIA GTC</strong> : Lors de sa conférence annuelle, NVIDIA a présentées ses dernières avancées en intelligence artificielle, notamment dans les GPU, les data centers et les applications d’IA générative.
                            </li>
                            <li>
                                <strong className="text-green-400">Mars 2026 - Plateforme Vera Rubin</strong> : Nouvelle architecture dédiée à l’IA permettant de faire fonctionner des supercalculateurs encore plus puissants pour l’entraînement de modèles avancés.
                            </li>
                            <li>
                                <strong className="text-green-400">Mars 2026 - Partenariats industriels</strong> : NVIDIA collabore avec de grandes entreprises pour intégrer l’IA dans l’industrie, notamment dans la conception, la simulation et la production automatisée.
                            </li>
                            <li>
                                <strong className="text-green-400">Mars 2026 - AI Factories</strong> : NVIDIA développe des infrastructures appelées "AI Factories" pour produire de la puissance de calcul à grande échelle tout en optimisant la consommation énergétique.
                            </li>
                            <li>
                                <strong className="text-green-400">Mars 2026 - IA dans l’espace</strong> : L’entreprise travaille sur des solutions permettant d’exécuter de l’intelligence artificielle directement dans l’espace pour les satellites et l’analyse de données.
                            </li>
                            <li>
                                <strong className="text-green-400">Février 2026 - Résultats financiers</strong> : NVIDIA annonce des résultats record, portés par la forte demande en IA et en data centers à l’échelle mondiale.
                            </li>
                        </ul>
                    </div>
                </AnimatedComponent>
            </section>
            <section className="w-full flex flex-col items-center justify-center px-4 py-20 bg-transparent space-y-10">
                <AnimatedComponent animationClass="animate-slide-in-up">
                    <h1 className="text-4xl text-center" style={{ textShadow: "0 0 8px #4ade80" }}>
                        Présentation
                    </h1>
                    <div className="hidden md:block border-4 border-green-700 rounded-xl overflow-hidden shadow-2xl">
                        <iframe
                            src="https://docs.google.com/presentation/d/e/2PACX-1vRR341tq2ABSgaPpeYyMBjE1jpd2VyMZA-7QO_pEwi-wGKZqZESHtAz4H1IKySlNeV4z9At40ATzwoV/pubembed?start=true&loop=true&delayms=10000"
                            width="908"
                            height="540"
                            allowFullScreen
                            className="w-[908px] h-[540px]"
                        ></iframe>
                    </div>
                    <div className="block md:hidden text-center">
                        <p className="text-lg mb-4">
                            Cliquez ci-dessous pour voir la présentation :
                        </p>
                        <a
                            href="https://docs.google.com/presentation/d/e/2PACX-1vRR341tq2ABSgaPpeYyMBjE1jpd2VyMZA-7QO_pEwi-wGKZqZESHtAz4H1IKySlNeV4z9At40ATzwoV/pub?start=true&loop=true&delayms=10000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 underline hover:text-green-300 transition"
                        >
                            Ouvrir la présentation
                        </a>
                    </div>
                </AnimatedComponent>
            </section>
            <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center py-20 space-y-10 bg-transparent">
                <AnimatedComponent animationClass="animate-slide-in-up">
                    <h1 className="text-4xl mb-4" style={{ textShadow: "0 0 8px #4ade80" }}>
                        Ressources officielles
                    </h1>
                    <p className="text-lg">
                        Pour plus d'informations, visitez le site officiel de Nvidia :
                        <br />
                        <a
                            href="https://nvidianews.nvidia.com/news/latest#:~:text=NVIDIA%20is%20launching%20a%20comprehensive,%2C%20robotaxi%20companies%20and%20..."
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
    );
}
export default VeilleTechno;
