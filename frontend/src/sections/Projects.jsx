
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
            <div className="pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-[#ff014f]/5 blur-3xl" />

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
                <div className="mt-16 space-y-12">

                    {projects.map((project, index) => (
                        <article
                            key={`${project.title}-${index}`}
                            className="
                                group
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/[0.07]
                                bg-[#292b30]
                                shadow-[0_15px_50px_rgba(0,0,0,0.15)]
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-[#ff014f]/30
                                hover:shadow-[0_25px_70px_rgba(0,0,0,0.30)]
                            "
                        >
                            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

                                {/* =========================
                                    PROJECT PREVIEW
                                ========================== */}
                                <div className="relative overflow-hidden bg-[#242529]">

                                    <div className="relative aspect-[16/10] h-full min-h-[300px] overflow-hidden lg:min-h-[440px]">

                                        {/* Browser Top Bar */}
                                        <div className="absolute left-0 right-0 top-0 z-20 flex h-10 items-center gap-1.5 border-b border-white/[0.08] bg-[#18191c]/90 px-4 backdrop-blur-md">
                                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                                            <div className="ml-3 h-5 flex-1 rounded-md border border-white/[0.06] bg-white/[0.03]" />
                                        </div>

                                        {/* Image */}
                                        <img
                                            src={project.image}
                                            alt={`${project.title} project preview`}
                                            className="
                                                h-full
                                                w-full
                                                object-cover
                                                pt-10
                                                transition-transform
                                                duration-700
                                                ease-out
                                                group-hover:scale-105
                                            "
                                        />

                                        {/* Overlay */}
                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                bg-gradient-to-t
                                                from-[#1f2024]
                                                via-transparent
                                                to-transparent
                                                opacity-80
                                            "
                                        />

                                        {/* Project Number */}
                                        <div className="absolute left-6 top-16">
                                            <span
                                                className="
                                                    rounded-full
                                                    border
                                                    border-white/10
                                                    bg-[#1f2024]/80
                                                    px-4
                                                    py-2
                                                    text-xs
                                                    font-bold
                                                    tracking-[2px]
                                                    text-white
                                                    backdrop-blur-md
                                                "
                                            >
                                                PROJECT {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        {/* Image Hover Actions */}
                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                flex
                                                items-center
                                                justify-center
                                                bg-[#1f2024]/50
                                                opacity-0
                                                backdrop-blur-[2px]
                                                transition-all
                                                duration-500
                                                group-hover:opacity-100
                                            "
                                        >
                                            <div className="flex flex-wrap justify-center gap-3 px-5">

                                                {project.liveDemo && (
                                                    <a
                                                        href={project.liveDemo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="
                                                            rounded-xl
                                                            bg-[#ff014f]
                                                            px-5
                                                            py-3
                                                            text-sm
                                                            font-semibold
                                                            text-white
                                                            shadow-lg
                                                            transition-all
                                                            hover:bg-[#e60046]
                                                        "
                                                    >
                                                        View Live ↗
                                                    </a>
                                                )}

                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="
                                                            rounded-xl
                                                            border
                                                            border-white/20
                                                            bg-[#1f2024]/80
                                                            px-5
                                                            py-3
                                                            text-sm
                                                            font-semibold
                                                            text-white
                                                            backdrop-blur-md
                                                            transition-all
                                                            hover:border-[#ff014f]/50
                                                        "
                                                    >
                                                        GitHub ↗
                                                    </a>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* =========================
                                    PROJECT INFORMATION
                                ========================== */}
                                <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-12">

                                    {/* Background Number */}
                                    <span
                                        className="
                                            pointer-events-none
                                            absolute
                                            right-6
                                            top-2
                                            select-none
                                            text-[120px]
                                            font-black
                                            leading-none
                                            text-white/[0.025]
                                        "
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="relative">

                                        {/* Label */}
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
                                                Featured Project
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="
                                                mt-4
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

                                        {/* Technologies */}
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

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-3">

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
                                                    GitHub
                                                    <span>↗</span>
                                                </a>
                                            )}

                                            {/* Video */}
                                            {project.video && (
                                                <a
                                                    href={project.video}
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
                                                    Watch Video
                                                    <span>↗</span>
                                                </a>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div
                                className="
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

