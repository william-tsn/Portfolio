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
                                <strong className="text-green-400">NVIDIA Blackwell</strong> : Nouvelle architecture GPU pour la série RTX 50, offrant des performances accrues en ray tracing et en IA grâce aux cœurs RT de quatrième génération et aux cœurs Tensor de cinquième génération.
                            </li>
                            <li>
                                <strong className="text-green-400">DLSS 4</strong> : Technologie de super-échantillonnage IA qui génère des images plus nettes et fluides, boostant les performances dans les jeux compatibles.
                            </li>
                            <li>
                                <strong className="text-green-400">Omniverse</strong> : Plateforme collaborative pour la création et simulation 3D en temps réel, utilisée dans l'industrie, la recherche et les effets spéciaux.
                            </li>
                            <li>
                                <strong className="text-green-400">NVIDIA AI Enterprise</strong> : Suite logicielle optimisée pour l'IA en entreprise, facilitant le déploiement de modèles d'apprentissage automatique dans le cloud et sur site.
                            </li>
                            <li>
                                <strong className="text-green-400">NVIDIA DRIVE</strong> : Plateforme de conduite autonome intégrant des GPU et logiciels pour véhicules intelligents.
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
                            href="https://www.nvidia.com/fr-fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 underline hover:text-green-300 transition"
                        >
                            www.nvidia.com
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
