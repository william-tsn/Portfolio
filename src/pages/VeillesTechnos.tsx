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
                                <strong className="text-green-400">21 mai 2025 - NVIDIA Blackwell</strong> : Nouvelle génération de GPU spécialement conçue pour l’IA générative, le cloud et le calcul intensif. Les performances sont doublées par rapport aux puces précédentes, avec une optimisation des API et frameworks IA.
                            </li>
                            <li>
                                <strong className="text-green-400">22 mai 2025 - NVIDIA NIM (NVIDIA Inference Microservices)</strong> : NVIDIA lance des microservices IA prêts à l'emploi. Ils permettent aux développeurs d'intégrer des modèles IA dans leurs applications web, mobiles ou cloud via des API simples et rapides.
                            </li>
                            <li>
                                <strong className="text-green-400">5 juin 2025 - Omniverse Cloud API</strong> : L'ouverture des API Omniverse permet aux développeurs d'intégrer la 3D collaborative, les jumeaux numériques et la simulation dans des sites web ou des plateformes cloud.
                            </li>
                            <li>
                                <strong className="text-green-400">6 juin 2025 - NVIDIA ACE for Games</strong> : API destinée aux développeurs de jeux ou d’applications interactives pour créer des personnages IA avec animation faciale, voix et dialogue généré en temps réel.
                            </li>
                            <li>
                                <strong className="text-green-400">10 juin 2025 - CUDA X</strong> : Mise à jour majeure de CUDA avec de nouvelles librairies pour le calcul parallèle, l’optimisation IA et la programmation accélérée. Destiné aux développeurs IA, backend et calcul scientifique.
                            </li>
                            <li>
                                <strong className="text-green-400">15 juin 2025 - AI Workbench</strong> : Lancement de AI Workbench, un environnement de développement IA connecté aux principaux IDE (VS Code notamment) pour construire, tester et déployer des modèles IA localement ou dans le cloud.
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
