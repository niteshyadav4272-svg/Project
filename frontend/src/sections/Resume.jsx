import SectionTitle from "../Component/SectionTitle";

const Resume = () => {
    return (
        <section
            id="resume"
            className="relative overflow-hidden bg-[#1f2024] px-6 py-24 sm:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#ff014f]/5 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#ff014f]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <SectionTitle
                    subtitle="My Resume"
                    title="Professional Resume"
                />

                {/* Resume Card */}
                <div
                    className="
                        mx-auto
                        mt-14
                        max-w-5xl
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/[0.07]
                        bg-[#292b30]
                        shadow-[0_20px_70px_rgba(0,0,0,0.20)]
                    "
                >
                    <div className="grid lg:grid-cols-[1fr_0.8fr]">

                        {/* Content */}
                        <div className="p-8 sm:p-10 lg:p-14">

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[3px]
                                    text-[#ff014f]
                                "
                            >
                                Full Stack Developer
                            </span>

                            <h3
                                className="
                                    mt-4
                                    text-3xl
                                    font-bold
                                    tracking-tight
                                    text-white
                                    sm:text-4xl
                                "
                            >
                                Nitesh Yadav
                            </h3>

                            <p
                                className="
                                    mt-5
                                    max-w-2xl
                                    text-sm
                                    leading-7
                                    text-gray-400
                                    sm:text-base
                                "
                            >
                                Full Stack Developer experienced in building
                                modern web applications using React.js,
                                Node.js, Express.js, MongoDB and cloud
                                technologies.
                            </p>

                            {/* Highlights */}
                            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

                                <div className="rounded-xl border border-white/[0.06] bg-[#1f2024] p-4">
                                    <p className="text-xs uppercase tracking-wider text-gray-500">
                                        Role
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-white">
                                        Full Stack
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/[0.06] bg-[#1f2024] p-4">
                                    <p className="text-xs uppercase tracking-wider text-gray-500">
                                        Stack
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-white">
                                        MERN
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/[0.06] bg-[#1f2024] p-4">
                                    <p className="text-xs uppercase tracking-wider text-gray-500">
                                        Location
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-white">
                                        India
                                    </p>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="mt-9 flex flex-wrap gap-3">

                                <a
                                    href='/resume.pdf'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        bg-[#ff014f]
                                        px-6
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
                                    View Resume
                                    <span>↗</span>
                                </a>

                                <a
                                    href='/resume.pdf'
                                    download="Nitesh-Yadav-Resume.pdf"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-[#1f2024]
                                        px-6
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
                                    Download Resume
                                    <span>↓</span>
                                </a>

                            </div>
                        </div>

                        {/* Resume Visual */}
                        <div
                            className="
                                relative
                                flex
                                min-h-[300px]
                                items-center
                                justify-center
                                overflow-hidden
                                bg-[#242529]
                                p-8
                                lg:min-h-full
                            "
                        >
                            <div
                                className="
                                    absolute
                                    h-56
                                    w-56
                                    rounded-full
                                    bg-[#ff014f]/10
                                    blur-3xl
                                "
                            />

                            <div
                                className="
                                    relative
                                    w-full
                                    max-w-[280px]
                                    rotate-[-4deg]
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-[#1f2024]
                                    p-6
                                    shadow-2xl
                                    transition-transform
                                    duration-500
                                    hover:rotate-0
                                "
                            >
                                <div className="h-2 w-20 rounded-full bg-[#ff014f]" />

                                <div className="mt-5 h-3 w-32 rounded bg-white/10" />
                                <div className="mt-2 h-2 w-24 rounded bg-white/5" />

                                <div className="mt-7 space-y-2">
                                    <div className="h-2 w-full rounded bg-white/5" />
                                    <div className="h-2 w-11/12 rounded bg-white/5" />
                                    <div className="h-2 w-4/5 rounded bg-white/5" />
                                </div>

                                <div className="mt-7 grid grid-cols-2 gap-3">
                                    <div className="h-16 rounded-lg bg-white/[0.03]" />
                                    <div className="h-16 rounded-lg bg-white/[0.03]" />
                                </div>

                                <div className="mt-5 h-2 w-2/3 rounded bg-white/5" />
                            </div>

                            <span
                                className="
                                    absolute
                                    bottom-6
                                    right-6
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[2px]
                                    text-gray-600
                                "
                            >
                                Resume
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;