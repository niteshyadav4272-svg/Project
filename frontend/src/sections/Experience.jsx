import SectionTitle from "../Component/SectionTitle";
import portfolioData from "../data/portfolioData";

const Experience = () => {
    const experiences = portfolioData.experience || [];

    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-[#1f2024] px-6 py-24 sm:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#ff014f]/5 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#ff014f]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <SectionTitle
                    subtitle="My Experience"
                    title="Professional Journey"
                />

                {/* Experience Cards */}
                <div className="mt-12 space-y-6">

                    {experiences.map((experience, index) => (

                        <div
                            key={`${experience.company}-${index}`}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/[0.06]
                                bg-[#292b30]
                                p-6
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-[#ff014f]/25
                                hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)]
                                sm:p-7
                            "
                        >

                            {/* Left Accent */}
                            <div
                                className="
                                    absolute
                                    left-0
                                    top-0
                                    h-full
                                    w-[2px]
                                    bg-[#ff014f]
                                    opacity-60
                                    transition-all
                                    duration-300
                                    group-hover:w-[3px]
                                    group-hover:opacity-100
                                "
                            />

                            {/* Header */}
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                                <div>

                                    <span
                                        className="
                                            text-[11px]
                                            font-semibold
                                            uppercase
                                            tracking-[2px]
                                            text-[#ff014f]
                                        "
                                    >
                                        {experience.company}
                                    </span>

                                    <h3
                                        className="
                                            mt-1.5
                                            text-xl
                                            font-bold
                                            tracking-tight
                                            text-white
                                            sm:text-2xl
                                        "
                                    >
                                        {experience.role}
                                    </h3>

                                    {experience.location && (
                                        <p className="mt-1 text-sm text-gray-500">
                                            {experience.location}
                                        </p>
                                    )}

                                </div>

                                {/* Date */}
                                <div className="shrink-0">

                                    <p className="text-sm font-medium text-gray-300">
                                        {experience.startDate} –{" "}
                                        {experience.endDate}
                                    </p>

                                    {experience.duration && (
                                        <p className="mt-1 text-right text-xs text-[#ff014f]">
                                            {experience.duration}
                                        </p>
                                    )}

                                </div>

                            </div>

                            {/* Description */}
                            <p
                                className="
                                    mt-5
                                    max-w-4xl
                                    text-sm
                                    leading-6
                                    text-gray-400
                                "
                            >
                                {experience.description}
                            </p>

                            {/* Technologies */}
                            {experience.technologies?.length > 0 && (
                                <div className="mt-5">

                                    <p
                                        className="
                                            mb-3
                                            text-[11px]
                                            font-semibold
                                            uppercase
                                            tracking-[2px]
                                            text-gray-500
                                        "
                                    >
                                        Technologies
                                    </p>

                                    <div className="flex flex-wrap gap-2">

                                        {experience.technologies.map(
                                            (technology) => (
                                                <span
                                                    key={technology}
                                                    className="
                                                        rounded-md
                                                        border
                                                        border-white/[0.07]
                                                        bg-[#1f2024]
                                                        px-3
                                                        py-1.5
                                                        text-xs
                                                        font-medium
                                                        text-gray-300
                                                        transition-all
                                                        duration-200
                                                        hover:border-[#ff014f]/40
                                                        hover:bg-[#ff014f]/10
                                                        hover:text-white
                                                    "
                                                >
                                                    {technology}
                                                </span>
                                            )
                                        )}

                                    </div>

                                </div>
                            )}

                            {/* Responsibilities */}
                            {experience.responsibilities?.length > 0 && (
                                <div className="mt-6">

                                    <p
                                        className="
                                            mb-3
                                            text-[11px]
                                            font-semibold
                                            uppercase
                                            tracking-[2px]
                                            text-gray-500
                                        "
                                    >
                                        Key Responsibilities
                                    </p>

                                    <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">

                                        {experience.responsibilities.map(
                                            (item, responsibilityIndex) => (
                                                <div
                                                    key={responsibilityIndex}
                                                    className="
                                                        flex
                                                        items-start
                                                        gap-2.5
                                                        py-1
                                                    "
                                                >
                                                    <span className="mt-1 text-xs text-[#ff014f]">
                                                        ◆
                                                    </span>

                                                    <p
                                                        className="
                                                            text-sm
                                                            leading-6
                                                            text-gray-400
                                                        "
                                                    >
                                                        {item}
                                                    </p>

                                                </div>
                                            )
                                        )}

                                    </div>

                                </div>
                            )}

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Experience;