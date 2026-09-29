import { useRef, useState } from "react";
import SectionTitle from "../Component/SectionTitle";
import portfolioData from "../data/portfolioData";

const Projects = () => {
    const projects = portfolioData.projects || [];

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#1f2024] px-5 py-20 sm:px-8 lg:px-12"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-[#ff014f]/10 blur-[120px]" />
            <div className="pointer-events-none absolute right-[-120px] top-[45%] h-80 w-80 rounded-full bg-[#ff014f]/10 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section Heading */}
                <SectionTitle
                    subtitle="My Work"
                    title="Projects I've Built"
                />

                <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-gray-400 sm:text-base">
                    Real-world applications I've worked on using modern
                    frontend, backend, database and cloud technologies.
                </p>

                {/* Projects Grid */}
                <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id || index}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    const previewRef = useRef(null);
    const imageRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false);
    const [scrollDistance, setScrollDistance] = useState(0);

    const calculateScrollDistance = () => {
        const preview = previewRef.current;
        const image = imageRef.current;

        if (!preview || !image) return;

        const containerWidth = preview.clientWidth;

        const imageHeight =
            (image.naturalHeight / image.naturalWidth) * containerWidth;

        const availableHeight = preview.clientHeight - 36;

        const distance = Math.max(
            0,
            imageHeight - availableHeight
        );

        setScrollDistance(distance);
    };

    const handleMouseEnter = () => {
        calculateScrollDistance();
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <article
            className="
                group relative overflow-hidden rounded-2xl
                border border-white/10
                bg-[#181a1e]
                transition-all duration-500
                hover:-translate-y-2
                hover:border-[#ff014f]/50
                hover:shadow-[0_20px_70px_rgba(255,1,79,0.14)]
            "
        >
            {/* Project Number */}
            <div className="absolute right-5 top-5 z-30">
                <span
                    className="
                        flex h-9 w-9 items-center justify-center
                        rounded-full border border-white/10
                        bg-black/50 text-xs font-semibold
                        text-gray-300 backdrop-blur-md
                    "
                >
                    {String(index + 1).padStart(2, "0")}
                </span>
            </div>

            {/* Preview */}
            <div className="p-4 sm:p-5">
                <div
                    ref={previewRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="
                        relative h-[240px]
                        overflow-hidden rounded-xl
                        border border-white/10
                        bg-[#0b0d0e]
                        sm:h-[280px]
                    "
                >
                    {/* Browser Header */}
                    <div
                        className="
                            absolute left-0 right-0 top-0 z-20
                            flex h-9 items-center gap-1.5
                            border-b border-white/10
                            bg-[#101214]/95 px-4
                            backdrop-blur-md
                        "
                    >
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                        <div
                            className="
                                ml-3 flex h-5 flex-1 items-center
                                rounded-md bg-white/5 px-3
                                text-[9px] text-gray-500
                            "
                        >
                            {project.title}
                        </div>
                    </div>

                    {/* FULL PAGE IMAGE */}
                    <div
                        className="absolute left-0 right-0 top-9"
                        style={{
                            transform: isHovered
                                ? `translateY(-${scrollDistance}px)`
                                : "translateY(0px)",

                            transition: isHovered
                                ? "transform 8s ease-in-out"
                                : "transform 0.6s ease-out",
                        }}
                    >
                        <img
                            ref={imageRef}
                            src={project.image}
                            alt={`${project.title} preview`}
                            onLoad={calculateScrollDistance}
                            className="block h-auto w-full select-none"
                            draggable="false"
                        />
                    </div>

                    {/* Bottom Gradient */}
                    <div
                        className="
                            pointer-events-none absolute
                            bottom-0 left-0 right-0 z-20
                            h-24
                            bg-gradient-to-t
                            from-black/80
                            to-transparent
                        "
                    />

                    {/* Hover Indicator */}
                    <div
                        className="
                            pointer-events-none absolute
                            bottom-4 left-4 z-30
                            flex items-center gap-2
                            rounded-full
                            border border-white/10
                            bg-black/70
                            px-4 py-2
                            text-xs font-medium
                            text-white
                            backdrop-blur-md
                            transition-all duration-300
                            group-hover:bg-[#ff014f]
                        "
                    >
                        <span
                            className="
                                h-1.5 w-1.5 rounded-full
                                bg-[#ff014f]
                                group-hover:bg-white
                            "
                        />

                        {isHovered
                            ? "Scrolling preview..."
                            : "Hover to preview"}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-5 pb-6 sm:px-6 sm:pb-7">

                {/* Label */}
                <div className="mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff014f]" />

                    <span
                        className="
                            text-[11px] font-semibold
                            uppercase tracking-[0.2em]
                            text-[#ff014f]
                        "
                    >
                        {project.label}
                    </span>
                </div>

                {/* Title */}
                <h3
                    className="
                        text-2xl font-bold tracking-tight
                        text-white
                        transition-colors duration-300
                        group-hover:text-[#ff014f]
                    "
                >
                    {project.title}
                </h3>

                {/* Description */}
                <p
                    className="
                        mt-3 text-sm leading-6
                        text-gray-400 sm:text-[15px]
                    "
                >
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5">
                    <p
                        className="
                            mb-2 text-[10px]
                            font-semibold uppercase
                            tracking-[0.18em]
                            text-gray-500
                        "
                    >
                        Tech Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies?.map(
                            (technology, techIndex) => (
                                <span
                                    key={`${technology}-${techIndex}`}
                                    className="
                                        rounded-lg
                                        border border-[#ff014f]/20
                                        bg-[#ff014f]/5
                                        px-3 py-1.5
                                        text-xs font-medium
                                        text-gray-300
                                        transition-all duration-300
                                        hover:border-[#ff014f]/60
                                        hover:bg-[#ff014f]/15
                                        hover:text-white
                                        hover:shadow-[0_0_18px_rgba(255,1,79,0.2)]
                                    "
                                >
                                    {technology}
                                </span>
                            )
                        )}
                    </div>
                </div>

                {/* My Contribution */}
                {project.workedOn?.length > 0 && (
                    <div className="mt-6 border-t border-white/10 pt-5">
                        <div className="mb-3 flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-white">
                                My Contribution
                            </h4>

                            <span
                                className="
                                    text-[10px] uppercase
                                    tracking-widest
                                    text-gray-600
                                "
                            >
                                Development
                            </span>
                        </div>

                        <div className="space-y-2.5">
                            {project.workedOn.map(
                                (work, workIndex) => (
                                    <div
                                        key={workIndex}
                                        className="
                                            flex items-start gap-3
                                            text-sm leading-5
                                            text-gray-400
                                        "
                                    >
                                        <span
                                            className="
                                                mt-2 h-1.5 w-1.5
                                                shrink-0 rounded-full
                                                bg-[#ff014f]
                                                shadow-[0_0_8px_rgba(255,1,79,0.6)]
                                            "
                                        />

                                        <span>{work}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )}

                {/* Live Demo */}
                <div className="mt-6">
                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex items-center gap-2
                            rounded-full
                            bg-[#ff014f]
                            px-5 py-2.5
                            text-sm font-semibold
                            text-white
                            shadow-[0_8px_25px_rgba(255,1,79,0.25)]
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:bg-[#ff1760]
                            hover:shadow-[0_12px_35px_rgba(255,1,79,0.4)]
                        "
                    >
                        Live Demo

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                        >
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default Projects;