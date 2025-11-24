
export default function DeliverSection() {
    const services = [
        {
            title: "Engineering Simulation Services",
            desc: "We offer on-demand CAE services for simulation requirements in multiple disciplines and sectors.",
            icon: "/icons/sim.png",
        },
        {
            title: "Custom Engineering Software",
            desc: "We deliver custom software for parametric analysis, design optimization and system studies.",
            icon: "/icons/custom.png",
        },
        {
            title: "New Product Development",
            desc: "We partner to deliver best in class designs backed by numerical models and analysis.",
            icon: "/icons/product.png",
        },
        {
            title: "Design Approval Studies",
            desc: "We have built lasting ties with our customers as their preferred partner for design approval studies.",
            icon: "/icons/design.png",
        },
    ];

    return (
        <section className="w-full py-28 bg-[#0A0F1F]">
            <h1 className="text-center text-4xl text-white font-bold mb-14">
                What We{" "}
                <span className="bg-gradient-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4] bg-clip-text text-transparent">
                    Deliver
                </span>
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                {services.map((item, i) => (
                    <div
                        key={i}
                        className="
              bg-[#0F162D] border border-white/10 rounded-2xl p-6 text-center 
              shadow-lg hover:shadow-purple-900/30
              hover:-translate-y-2 transition-all duration-500 
              group relative overflow-hidden
            "
                    >
                        {/* Glow on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4] opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500"></div>

                        <img
                            src="https://www.cetim.fr/var/cetim/storage/images/_aliases/software_highlight/prestations/toutes-nos-prestations/ingenierie-produits-procedes/conception-et-simulation/ingenierie-numerique-calcul-et-simulation/4595525-45-fre-FR/Ingenierie-numerique-Calcul-et-Simulation.png"
                            alt=""
                            className="mx-auto w-20 h-20 mb-6 transition-all duration-500 group-hover:scale-110"
                        />

                        <h2
                            className="
                text-lg font-semibold 
                bg-gradient-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4]
                bg-clip-text text-transparent
                mb-3
              "
                        >
                            {item.title}
                        </h2>

                        <p className="text-gray-300 text-sm mb-6">
                            {item.desc}
                        </p>

                        <button
                            className="
                bg-gradient-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4]
                text-white py-2 px-6 rounded-lg
                shadow-lg hover:shadow-2xl 
                hover:scale-105 transition-all duration-300
                animate-float-smooth
              "
                        >
                            Know More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
