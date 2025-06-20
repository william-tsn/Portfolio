import Navbar from "../components/Navbar";
import AnimatedComponent from "../components/AnimatedComponent";

function TableauSynthese() {

    return (

        <div className="relative w-full min-h-screen overflow-x-hidden font-ubuntu text-white">
            <div className="absolute inset-0 bg-gradient-to-b from-red-800 to-black z-[-10]" />
            <div className="absolute inset-0 z-[10] pointer-events-none">
                <div className="wave25" />
                <div className="wave26" />
                <div className="wave27" />
                <div className="wave28" />
                <div className="wave29" />
                <div className="wave30" />
            </div>
            <Navbar />
            <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-6">
                <AnimatedComponent animationClass="animate-slide-in-up">
                    <h1 className="text-4xl md:text-5xl text-white">
                        Mon tableau de synthèse
                    </h1>
                </AnimatedComponent>
            </section>
            <section className="flex justify-center items-center min-h-screen px-4 pb-40">
                <img
                    src="src/assets/tableau.jpg"
                    alt="Tableau de synthèse"
                    className="w-full max-w-5xl rounded shadow-lg object-contain h-full"
                />
            </section>
        </div>
    );
}

export default TableauSynthese;
