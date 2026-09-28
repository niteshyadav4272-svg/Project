import portfolioData from "../data/portfolioData";
import SectionTitle from "../Component/SectionTitle";

const Projects = () => {
    const projects = portfolioData.projects || [];

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#1f2024] px-6 py-24 sm:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#ff014f]/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#ff014f]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <SectionTitle
                    subtitle="My Work"
                    title="Featured Projects"
                />

                <p className="mx-auto mt-7 max-w-3xl text-center text-base leading-7 text-gray-400 sm:text-lg">
                    A collection of full-stack applications built with modern
                    technologies, scalable backend architecture and responsive
                    user interfaces.
                </p>

                {/* Projects */}
                <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-2">

                    {projects.map((project, index) => (
                        <article
                            key={`${project.title}-${index}`}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/[0.07]
                                bg-[#292b30]
                                p-7
                                shadow-[0_15px_50px_rgba(0,0,0,0.15)]
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:border-[#ff014f]/30
                                hover:shadow-[0_25px_70px_rgba(0,0,0,0.30)]
                                sm:p-9
                            "
                        >
                            {/* Top Accent */}
                            <div
                                className="
                                    absolute
                                    left-0
                                    top-0
                                    h-[2px]
                                    w-0
                                    bg-[#ff014f]
                                    transition-all
                                    duration-700
                                    group-hover:w-full
                                "
                            />

                            {/* Background Number */}
                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    right-5
                                    top-2
                                    select-none
                                    text-[110px]
                                    font-black
                                    leading-none
                                    text-white/[0.025]
                                    transition-colors
                                    duration-500
                                    group-hover:text-[#ff014f]/[0.06]
                                "
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className="relative">

                                {/* Project Label */}
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#ff014f]" />

                                    <span
                                        className="
                                            text-xs
                                            font-semibold
                                            uppercase
                                            tracking-[3px]
                                            text-[#ff014f]
                                        "
                                    >
                                        Project {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3
                                    className="
                                        mt-5
                                        text-3xl
                                        font-bold
                                        tracking-tight
                                        text-white
                                        transition-colors
                                        duration-300
                                        group-hover:text-[#ff014f]
                                        sm:text-4xl
                                    "
                                >
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                                        mt-5
                                        max-w-xl
                                        text-sm
                                        leading-7
                                        text-gray-400
                                        sm:text-base
                                    "
                                >
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                {project.technologies?.length > 0 && (
                                    <div className="mt-7">
                                        <p
                                            className="
                                                mb-3
                                                text-xs
                                                font-semibold
                                                uppercase
                                                tracking-[2px]
                                                text-gray-500
                                            "
                                        >
                                            Tech Stack
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map(
                                                (technology) => (
                                                    <span
                                                        key={technology}
                                                        className="
                                                            rounded-lg
                                                            border
                                                            border-white/[0.08]
                                                            bg-[#1f2024]
                                                            px-3
                                                            py-2
                                                            text-xs
                                                            font-medium
                                                            text-gray-300
                                                            transition-all
                                                            duration-300
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

                                {/* Divider */}
                                <div className="my-8 h-px bg-white/[0.06]" />

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3">

                                    {/* GitHub */}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                inline-flex
                                                items-center
                                                gap-2
                                                rounded-xl
                                                border
                                                border-white/10
                                                bg-[#1f2024]
                                                px-5
                                                py-3
                                                text-sm
                                                font-semibold
                                                text-gray-200
                                                transition-all
                                                duration-300
                                                hover:-translate-y-0.5
                                                hover:border-[#ff014f]/40
                                                hover:bg-[#ff014f]/10
                                                hover:text-white
                                            "
                                        >
                                            <i className="ri-github-fill text-lg" />
                                            View GitHub
                                            <span>↗</span>
                                        </a>
                                    )}

                                    {/* Live Demo */}
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                inline-flex
                                                items-center
                                                gap-2
                                                rounded-xl
                                                bg-[#ff014f]
                                                px-5
                                                py-3
                                                text-sm
                                                font-semibold
                                                text-white
                                                transition-all
                                                duration-300
                                                hover:-translate-y-0.5
                                                hover:bg-[#e60046]
                                                hover:shadow-[0_12px_30px_rgba(255,1,79,0.25)]
                                            "
                                        >
                                            Live Demo
                                            <span>↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-[2px]
                                    w-0
                                    bg-[#ff014f]
                                    transition-all
                                    duration-700
                                    group-hover:w-full
                                "
                            />
                        </article>
                    ))}

                </div>

                {/* Empty State */}
                {projects.length === 0 && (
                    <div
                        className="
                            mt-14
                            rounded-2xl
                            border
                            border-white/[0.06]
                            bg-[#292b30]
                            px-6
                            py-16
                            text-center
                        "
                    >
                        <p className="text-gray-400">
                            Projects will be added soon.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;