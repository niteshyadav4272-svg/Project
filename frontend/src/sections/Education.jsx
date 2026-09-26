import SectionTitle from "../Component/SectionTitle";
import portfolioData from "../data/portfolioData";

const Education = () => {
    const education = portfolioData.education?.[0];

    if (!education) return null;

    return (
        <section
            id="education"
            className="relative overflow-hidden bg-[#1f2024] px-6 py-24 sm:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ff014f]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <SectionTitle
                    subtitle="My Education"
                    title="Academic Background"
                />

                {/* Education Card */}
                <div className="mx-auto mt-14 max-w-5xl">

                    <div
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white/[0.07]
                            bg-[#292b30]
                            shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                            transition-all
                            duration-500
                            hover:-translate-y-1
                            hover:border-[#ff014f]/30
                            hover:shadow-[0_25px_70px_rgba(0,0,0,0.28)]
                        "
                    >

                        {/* Pink Accent */}
                        <div
                            className="
                                absolute
                                left-0
                                top-0
                                h-full
                                w-1
                                bg-gradient-to-b
                                from-[#ff014f]
                                via-[#ff014f]/60
                                to-transparent
                            "
                        />

                        {/* Decorative Number */}
                        <span
                            className="
                                pointer-events-none
                                absolute
                                -right-3
                                -top-8
                                select-none
                                text-[150px]
                                font-black
                                leading-none
                                text-white/[0.025]
                                transition-all
                                duration-500
                                group-hover:text-[#ff014f]/[0.04]
                            "
                        >
                            01
                        </span>

                        <div className="relative p-7 sm:p-9 lg:p-10">

                            {/* Top Label */}
                            <div className="flex items-center justify-between">

                                <span
                                    className="
                                        text-[11px]
                                        font-semibold
                                        uppercase
                                        tracking-[3px]
                                        text-[#ff014f]
                                    "
                                >
                                    Education
                                </span>

                                <span
                                    className="
                                        rounded-full
                                        border
                                        border-[#ff014f]/20
                                        bg-[#ff014f]/10
                                        px-3
                                        py-1.5
                                        text-xs
                                        font-semibold
                                        text-[#ff014f]
                                    "
                                >
                                    2022 — 2026
                                </span>

                            </div>

                            {/* Main Content */}
                            <div className="mt-8 flex flex-col gap-7 md:flex-row md:items-center">

                                {/* Degree Icon */}
                                <div
                                    className="
                                        flex
                                        h-20
                                        w-20
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        border
                                        border-[#ff014f]/20
                                        bg-[#1f2024]
                                        text-2xl
                                        font-black
                                        text-[#ff014f]
                                        shadow-[0_0_30px_rgba(255,1,79,0.08)]
                                        transition-all
                                        duration-500
                                        group-hover:border-[#ff014f]/40
                                        group-hover:shadow-[0_0_35px_rgba(255,1,79,0.15)]
                                    "
                                >
                                    B.T
                                </div>

                                <div className="min-w-0">

                                    {/* Degree */}
                                    <h3
                                        className="
                                            text-4xl
                                            font-black
                                            tracking-tight
                                            text-white
                                            sm:text-5xl
                                        "
                                    >
                                        {education.degree}
                                    </h3>

                                    {/* Institute */}
                                    <h4
                                        className="
                                            mt-2
                                            text-xl
                                            font-bold
                                            leading-snug
                                            text-white
                                            sm:text-2xl
                                        "
                                    >
                                        {education.institute}
                                    </h4>

                                    {/* Short Name */}
                                    <p className="mt-1 text-sm font-medium text-[#ff014f]">
                                        {education.shortInstitute}
                                    </p>

                                </div>

                            </div>

                            {/* Divider */}
                            <div className="my-8 h-px bg-white/[0.06]" />

                            {/* Bottom Information */}
                            <div className="grid gap-5 sm:grid-cols-2">

                                {/* Duration */}
                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-white/[0.06]
                                        bg-[#1f2024]
                                        p-4
                                    "
                                >
                                    <p
                                        className="
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[2px]
                                            text-gray-500
                                        "
                                    >
                                        Duration
                                    </p>

                                    <p className="mt-2 text-sm font-semibold text-white">
                                        {education.startYear} –{" "}
                                        {education.endYear}
                                    </p>
                                </div>

                                {/* Location */}
                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-white/[0.06]
                                        bg-[#1f2024]
                                        p-4
                                    "
                                >
                                    <p
                                        className="
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[2px]
                                            text-gray-500
                                        "
                                    >
                                        Location
                                    </p>

                                    <p className="mt-2 text-sm font-semibold text-white">
                                        {education.location}
                                    </p>
                                </div>

                            </div>

                            {/* Description */}
                            {education.description && (
                                <p
                                    className="
                                        mt-6
                                        max-w-3xl
                                        text-sm
                                        leading-7
                                        text-gray-400
                                    "
                                >
                                    {education.description}
                                </p>
                            )}

                        </div>

                        {/* Bottom Accent */}
                        <div
                            className="
                                absolute
                                bottom-0
                                left-1/2
                                h-px
                                w-0
                                -translate-x-1/2
                                bg-[#ff014f]
                                transition-all
                                duration-500
                                group-hover:w-1/2
                            "
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Education;