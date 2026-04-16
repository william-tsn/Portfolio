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
            `}</style>

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

                {/* Hero */}
                <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-6 relative z-20">
                    <AnimatedComponent animationClass="animate-slide-in-up">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">
                            Mon tableau de synthèse
                        </h1>
                    </AnimatedComponent>
                </section>

                {/* Tableau */}
                <section className="flex justify-center items-center px-4 sm:px-6 pb-48 sm:pb-64 relative z-20">
                    <img
                        src="/Portfolio/assets/Tableau.png"
                        alt="Tableau de synthèse"
                        className="w-full max-w-5xl rounded shadow-lg object-contain"
                        loading="lazy"
                    />
                </section>
            </div>
        </>
    );
}

export default TableauSynthese;