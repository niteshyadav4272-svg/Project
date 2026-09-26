
import SectionTitle from "../Component/SectionTitle";
import portfolioData from "../data/portfolioData";

const Services = () => {
    const services = portfolioData.services;

    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#1f2024] px-6 py-24 sm:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#ff014f]/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-[-100px] h-80 w-80 rounded-full bg-[#ff014f]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* Section Heading */}
                <SectionTitle
                    subtitle="What I Do"
                    title="My Services"
                />

                {/* Services Grid */}
                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/[0.06]
                                bg-[#292b30]
                                p-7
                                shadow-[0_10px_35px_rgba(0,0,0,0.15)]
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:border-[#ff014f]/30
                                hover:shadow-[0_20px_45px_rgba(0,0,0,0.3)]
                            "
                        >

                            {/* Top Accent Line */}
                            <div
                                className="
                                    absolute
                                    left-0
                                    top-0
                                    h-[3px]
                                    w-0
                                    bg-gradient-to-r
                                    from-[#ff014f]
                                    to-[#ff4d7d]
                                    transition-all
                                    duration-500
                                    group-hover:w-full
                                "
                            />

                            {/* Background Number */}
                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    right-5
                                    top-3
                                    text-6xl
                                    font-black
                                    text-white/[0.025]
                                    transition-all
                                    duration-500
                                    group-hover:text-[#ff014f]/[0.06]
                                "
                            >
                                0{index + 1}
                            </span>

                            {/* Icon */}
                            <div
                                className="
                                    relative
                                    mb-6
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-[#ff014f]/20
                                    bg-[#ff014f]/10
                                    text-[#ff014f]
                                    transition-all
                                    duration-500
                                    group-hover:scale-110
                                    group-hover:border-[#ff014f]/40
                                    group-hover:bg-[#ff014f]
                                    group-hover:text-white
                                "
                            >
                                {index === 0 && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.8"
                                        stroke="currentColor"
                                        className="h-7 w-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 6.75h-10.5a2.25 2.25 0 0 0-2.25 2.25v6a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V9a2.25 2.25 0 0 0-2.25-2.25Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m8.25 12 2.25 2.25L15.75 9"
                                        />
                                    </svg>
                                )}

                                {index === 1 && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.8"
                                        stroke="currentColor"
                                        className="h-7 w-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m8.25 9 3.75-3.75L15.75 9M15.75 15l-3.75 3.75L8.25 15"
                                        />
                                    </svg>
                                )}

                                {index === 2 && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.8"
                                        stroke="currentColor"
                                        className="h-7 w-7"
                                    >
                                        <ellipse
                                            cx="12"
                                            cy="5"
                                            rx="7.5"
                                            ry="2.75"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 5v7c0 1.52 3.36 2.75 7.5 2.75s7.5-1.23 7.5-2.75V5"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12v7c0 1.52 3.36 2.75 7.5 2.75s7.5-1.23 7.5-2.75v-7"
                                        />
                                    </svg>
                                )}

                                {index === 3 && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.8"
                                        stroke="currentColor"
                                        className="h-7 w-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 3 6 13.5h5.25L10.5 21 18 10.5h-5.25L13.5 3Z"
                                        />
                                    </svg>
                                )}

                                {index === 4 && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.8"
                                        stroke="currentColor"
                                        className="h-7 w-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 3.75 19.5 7.5v5.25c0 4.2-3.18 6.9-7.5 8.25-4.32-1.35-7.5-4.05-7.5-8.25V7.5L12 3.75Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m9.25 12 1.75 1.75 3.75-4"
                                        />
                                    </svg>
                                )}

                                {index >= 5 && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.8"
                                        stroke="currentColor"
                                        className="h-7 w-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 19.5h15"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 19.5V9.75l5.25-3 5.25 3v9.75"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.75 19.5v-4.5h4.5v4.5"
                                        />
                                    </svg>
                                )}
                            </div>

                            {/* Title */}
                            <h3
                                className="
                                    relative
                                    text-xl
                                    font-bold
                                    text-white
                                    transition-colors
                                    duration-300
                                    group-hover:text-[#ff014f]
                                "
                            >
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="
                                    relative
                                    mt-4
                                    text-sm
                                    leading-7
                                    text-gray-400
                                    transition-colors
                                    duration-300
                                    group-hover:text-gray-300
                                "
                            >
                                {service.description}
                            </p>

                            {/* Bottom Glow */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -bottom-20
                                    -right-20
                                    h-40
                                    w-40
                                    rounded-full
                                    bg-[#ff014f]/10
                                    opacity-0
                                    blur-3xl
                                    transition-opacity
                                    duration-500
                                    group-hover:opacity-100
                                "
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services;

