
import { TypeAnimation } from "react-type-animation";
import Button from "../Component/Button";
import portfolioData from "../data/portfolioData";
import profileImage from "../assets/images/photo2.png";

const Hero = () => {
    const { personal } = portfolioData;

    const skills = [
        "Gen AI",
        "JavaScript",
        "React",
        "Tailwind",
        "Next.js",
        "Node.js",
        "Express",
        "CI/CD",
        "MongoDB",
        "PostgreSQL",
        "Prisma ORM",
        "Docker",
        "AWS Cloud",
        "Redis",
        "Kafka",
        "RabbitMQ",
        "BullMQ",
    ];

    // Hire Me → Contact Section
    const handleHireMe = () => {
        const contactSection = document.getElementById("contact");

        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section
            id="home"
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#1f2024]
                px-6
                pt-28
                sm:pt-32
            "
        >
            {/* ================= BACKGROUND GLOW ================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    top-10
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-[#ff014f]/10
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    bottom-0
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-[#ff014f]/5
                    blur-[110px]
                "
            />

            {/* ================= MAIN CONTAINER ================= */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[calc(100vh-7rem)]
                    max-w-7xl
                    items-center
                "
            >
                <div
                    className="
                        flex
                        w-full
                        flex-col
                        items-center
                        justify-between
                        gap-10
                        lg:flex-row
                        lg:gap-8
                    "
                >

                    {/* ================= LEFT CONTENT ================= */}

                    <div className="w-full text-center lg:w-[58%] lg:text-left">

                        {/* Small Intro */}

                        <p
                            className="
                                mb-4
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[4px]
                                text-[#ff014f]
                                sm:text-sm
                            "
                        >
                            Welcome to my portfolio
                        </p>


                        {/* ================= MAIN HEADING ================= */}

                        <h1
                            className="
                                text-4xl
                                font-bold
                                leading-tight
                                text-white
                                sm:text-5xl
                                md:text-6xl
                                xl:text-7xl
                            "
                        >
                            Hi, I am{" "}
                            <span className="text-[#ff014f]">
                                {personal.name}
                            </span>
                        </h1>


                        {/* ================= ANIMATED ROLE ================= */}

                        <div
                            className="
                                mt-4
                                flex
                                flex-wrap
                                items-center
                                justify-center
                                gap-x-3
                                text-3xl
                                font-semibold
                                leading-tight
                                sm:text-4xl
                                md:text-5xl
                                lg:justify-start
                                xl:text-[3.4rem]
                            "
                        >
                            <span className="text-white">
                                a
                            </span>

                            <TypeAnimation
                                sequence={[
                                    "Full Stack Developer",
                                    2200,
                                    "React Developer",
                                    2200,
                                    "Node.js Developer",
                                    2200,
                                    "MERN Stack Developer",
                                    2200,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-[#ff014f]"
                            />
                        </div>


                        {/* ================= EXPERIENCE ================= */}

                        <div className="mt-7 flex justify-center lg:justify-start">

                            <div
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    border
                                    border-[#ff014f]/30
                                    bg-[#292b30]
                                    px-5
                                    py-3
                                    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-[#ff014f]/60
                                    hover:shadow-[0_10px_35px_rgba(255,1,79,0.12)]
                                "
                            >

                                {/* Status Dot */}

                                <span
                                    className="
                                        relative
                                        flex
                                        h-3
                                        w-3
                                        shrink-0
                                    "
                                >
                                    <span
                                        className="
                                            absolute
                                            inline-flex
                                            h-full
                                            w-full
                                            animate-ping
                                            rounded-full
                                            bg-[#ff014f]
                                            opacity-50
                                        "
                                    />

                                    <span
                                        className="
                                            relative
                                            inline-flex
                                            h-3
                                            w-3
                                            rounded-full
                                            bg-[#ff014f]
                                            shadow-[0_0_12px_#ff014f]
                                        "
                                    />
                                </span>


                                {/* Experience Number */}

                                <span
                                    className="
                                        text-xl
                                        font-bold
                                        tracking-wide
                                        text-white
                                        sm:text-2xl
                                    "
                                >
                                    1.5
                                </span>


                                {/* Experience Text */}

                                <span
                                    className="
                                        text-sm
                                        font-medium
                                        uppercase
                                        tracking-[1.5px]
                                        text-gray-400
                                        sm:text-base
                                    "
                                >
                                    Years Experience
                                </span>

                            </div>

                        </div>


                        {/* ================= TECH STACK ================= */}

                        <div className="mx-auto mt-7 max-w-2xl lg:mx-0">

                            {/* Tech Stack Heading */}

                            <div
                                className="
                                    mb-4
                                    flex
                                    items-center
                                    justify-center
                                    gap-3
                                    lg:justify-start
                                "
                            >
                                <span className="h-px w-8 bg-[#ff014f]" />

                                <span
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[3px]
                                        text-gray-400
                                    "
                                >
                                    Tech Stack
                                </span>

                                <span className="h-px w-8 bg-[#ff014f]" />
                            </div>


                            {/* Skills */}

                            <div
                                className="
                                    flex
                                    flex-wrap
                                    justify-center
                                    gap-2
                                    lg:justify-start
                                "
                            >
                                {skills.map((skill, index) => (
                                    <span
                                        key={skill}
                                        className={`
                                            group
                                            relative
                                            cursor-default
                                            overflow-hidden
                                            rounded-lg
                                            border
                                            px-3
                                            py-1.5
                                            text-xs
                                            font-semibold
                                            tracking-wide
                                            transition-all
                                            duration-300
                                            sm:px-3.5
                                            sm:py-2
                                            sm:text-sm

                                            ${
                                                index === 0 ||
                                                index === 2 ||
                                                index === 5 ||
                                                index === 12
                                                    ? "border-[#ff014f]/30 bg-[#ff014f]/10 text-white"
                                                    : "border-white/10 bg-[#292b30]/80 text-gray-300"
                                            }

                                            hover:-translate-y-1
                                            hover:border-[#ff014f]/50
                                            hover:bg-[#ff014f]/10
                                            hover:text-white
                                            hover:shadow-[0_8px_25px_rgba(255,1,79,0.12)]
                                        `}
                                    >

                                        {/* Skill Dot */}

                                        <span
                                            className="
                                                mr-1.5
                                                inline-block
                                                h-1.5
                                                w-1.5
                                                rounded-full
                                                bg-[#ff014f]
                                                align-middle
                                                opacity-70
                                                transition-all
                                                duration-300
                                                group-hover:opacity-100
                                                group-hover:shadow-[0_0_8px_#ff014f]
                                            "
                                        />

                                        {skill}

                                    </span>
                                ))}
                            </div>

                        </div>


                        {/* ================= HIRE ME ================= */}

                        <div
                            className="
                                mt-9
                                flex
                                justify-center
                                lg:justify-start
                            "
                        >

                            {/* 
                                Wrapper handles the click.
                                This means Button.jsx does not need
                                to support onClick props.
                            */}

                            <div
                                onClick={handleHireMe}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(event) => {
                                    if (
                                        event.key === "Enter" ||
                                        event.key === " "
                                    ) {
                                        handleHireMe();
                                    }
                                }}
                                className="
                                    group
                                    cursor-pointer
                                    rounded-md
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                "
                            >

                                <div
                                    className="
                                        relative
                                        animate-[hirePulse_2.5s_ease-in-out_infinite]
                                        rounded-md
                                    "
                                >

                                    <Button>
                                        <span className="flex items-center gap-2">

                                            Hire Me

                                            <span
                                                className="
                                                    inline-block
                                                    transition-transform
                                                    duration-300
                                                    group-hover:translate-x-1
                                                "
                                            >
                                                →
                                            </span>

                                        </span>
                                    </Button>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ================= PROFILE IMAGE ================= */}

                    <div
                        className="
                            flex
                            w-full
                            items-end
                            justify-center
                            lg:w-[42%]
                            lg:justify-end
                        "
                    >

                        <img
                            src={profileImage}
                            alt="Nitesh Yadav - Full Stack Developer"
                            className="
                                h-[350px]
                                w-auto
                                object-contain
                                sm:h-[430px]
                                md:h-[500px]
                                lg:h-[660px]
                                xl:h-[620px]
                            "
                        />

                    </div>

                </div>
            </div>


            {/* ================= HIRE BUTTON ANIMATION ================= */}

            <style>
                {`
                    @keyframes hirePulse {
                        0%,
                        100% {
                            transform: scale(1);
                            filter: drop-shadow(0 0 0px rgba(255, 1, 79, 0));
                        }

                        50% {
                            transform: scale(1.025);
                            filter: drop-shadow(
                                0 0 12px rgba(255, 1, 79, 0.18)
                            );
                        }
                    }
                `}
            </style>

        </section>
    );
};

export default Hero;

