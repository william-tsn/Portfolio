import Navbar from "../components/Navbar";
import AnimatedComponent from "../components/AnimatedComponent";

function TableauSynthese() {
    return (
        <>
            <style>{`
                body { background-color: #000000; }
                .tableau-bg {
                    background: linear-gradient(to bottom, #7f1d1d 0%, #000000 100%);
                    background-attachment: fixed;
                }
                ` }</style>

            <div className="tableau-bg relative w-full min-h-screen overflow-x-hidden font-ubuntu text-white">
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="wave25" />
                    <div className="wave26" />
                    <div className="wave27" />
                    <div className="wave28" />
                    <div className="wave29" />
                    <div className="wave30" />
                </div>

                <Navbar />
                <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-6 relative z-20">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">
                            Mon tableau de synthèse
                        </h1>
                    </AnimatedComponent>
                </section>
                <section className="flex flex-col items-center px-4 sm:px-6 pb-48 sm:pb-64 relative z-20">
                    <div className="w-full max-w-5xl rounded-lg shadow-lg overflow-hidden bg-white">
                        <iframe
                            src="/Portfolio/assets/william_tousson_tableau.pdf"
                            title="Tableau de synthèse"
                            className="w-full h-[85vh] border-0"
                        >
                            <p className="p-4 text-black">
                                Votre navigateur ne peut pas afficher ce PDF.{" "}

                                <a href="/Portfolio/assets/william_tousson_tableau.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-600 underline"
                                >
                                    Cliquez ici pour le télécharger
                                </a>.
                            </p>
                        </iframe>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4 justify-center">

                        <a href="/Portfolio/assets/william_tousson_tableau.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-red-700 hover:bg-red-600 rounded text-white transition"
                        >
                            Ouvrir en plein écran
                        </a>

                        <a href="/Portfolio/assets/tableau-synthese.pdf"
                            download
                            className="px-6 py-2 bg-transparent border border-red-500 hover:bg-red-700 rounded text-white transition"
                        >
                            Télécharger le PDF
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}

export default TableauSynthese;