
import SectionTitle from "../Component/SectionTitle";
import portfolioData from "../data/portfolioData";

const Skills = () => {
    const skills = portfolioData.skills;

    const categories = [
        {
            name: "Frontend Engineering",
            number: "01",
            description:
                "Building responsive, modern and production-ready interfaces.",
            skills: skills.filter(
                (skill) => skill.category === "Frontend"
            ),
        },
        {
            name: "Backend Engineering",
            number: "02",
            description:
                "Designing APIs, authentication systems and scalable backend services.",
            skills: skills.filter(
                (skill) => skill.category === "Backend"
            ),
        },
        {
            name: "Database & Data",
            number: "03",
            description:
                "Working with databases, caching, queries and data-driven architectures.",
            skills: skills.filter(
                (skill) => skill.category === "Database"
            ),
        },
        {
            name: "System Design",
            number: "04",
            description:
                "Designing scalable, distributed and reliable application architectures.",
            skills: skills.filter(
                (skill) => skill.category === "System Design"
            ),
        },
        {
            name: "Messaging & Distributed Systems",
            number: "05",
            description:
                "Building asynchronous workflows and event-driven systems.",
            skills: skills.filter(
                (skill) =>
                    skill.category === "Messaging & Distributed Systems"
            ),
        },
        {
            name: "Cloud & DevOps",
            number: "06",
            description:
                "Deploying and operating applications using cloud and container technologies.",
            skills: skills.filter(
                (skill) => skill.category === "Cloud & DevOps"
            ),
        },
    ];

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#1f2024] px-6 py-24 sm:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-[-180px] top-32 h-96 w-96 rounded-full bg-[#ff014f]/5 blur-3xl" />

            <div className="pointer-events-none absolute bottom-20 right-[-180px] h-96 w-96 rounded-full bg-[#ff014f]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <SectionTitle
                    subtitle="My Skills"
                    title="Technical Expertise"
                />

                {/* Intro */}
                <div className="mx-auto mt-8 max-w-3xl text-center">
                    <p className="text-base leading-7 text-gray-400 sm:text-lg">
                        A combination of frontend development, backend
                        engineering, databases, distributed systems and
                        cloud technologies used to build scalable web
                        applications.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2">

                    {categories.map((category) => (

                        <div
                            key={category.name}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/[0.06]
                                bg-[#292b30]
                                p-7
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-[#ff014f]/30
                                hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                                sm:p-8
                            "
                        >

                            {/* Decorative Number */}
                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    right-5
                                    top-1
                                    select-none
                                    text-7xl
                                    font-black
                                    text-white/[0.025]
                                    transition-all
                                    duration-500
                                    group-hover:text-[#ff014f]/10
                                "
                            >
                                {category.number}
                            </span>

                            {/* Accent Line */}
                            <div
                                className="
                                    absolute
                                    left-0
                                    top-0
                                    h-full
                                    w-[2px]
                                    bg-[#ff014f]
                                    opacity-0
                                    transition-opacity
                                    duration-500
                                    group-hover:opacity-100
                                "
                            />

                            {/* Header */}
                            <div className="relative">

                                <span
                                    className="
                                        inline-block
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-[3px]
                                        text-[#ff014f]
                                    "
                                >
                                    Expertise
                                </span>

                                <h3
                                    className="
                                        mt-2
                                        text-2xl
                                        font-bold
                                        tracking-tight
                                        text-white
                                    "
                                >
                                    {category.name}
                                </h3>

                                <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400">
                                    {category.description}
                                </p>

                            </div>

                            {/* Technologies */}
                            <div className="relative mt-7 flex flex-wrap gap-2.5">

                                {category.skills.map((skill) => (

                                    <span
                                        key={skill.name}
                                        className="
                                            rounded-lg
                                            border
                                            border-white/[0.08]
                                            bg-[#1f2024]
                                            px-3.5
                                            py-2
                                            text-sm
                                            font-medium
                                            text-gray-300
                                            transition-all
                                            duration-300
                                            hover:border-[#ff014f]/50
                                            hover:bg-[#ff014f]/10
                                            hover:text-white
                                        "
                                    >
                                        {skill.name}
                                    </span>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

                {/* Bottom Highlight */}
                <div
                    className="
                        mt-8
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#ff014f]/10
                        bg-gradient-to-r
                        from-[#292b30]
                        to-[#242529]
                        p-7
                        sm:p-8
                    "
                >
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                        <div>
                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[3px]
                                    text-[#ff014f]
                                "
                            >
                                Engineering Focus
                            </span>

                            <h3 className="mt-2 text-xl font-bold text-white">
                                Building beyond basic CRUD applications.
                            </h3>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                                Focused on scalable APIs, authentication,
                                caching, asynchronous processing,
                                distributed systems and cloud-based
                                architectures.
                            </p>
                        </div>

                        <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#ff014f]/20 bg-[#ff014f]/10 text-xl text-[#ff014f] md:flex">
                            ✦
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;

