
import { TypeAnimation } from "react-type-animation";
import Button from "../Component/Button";
import SocialLinks from "../Component/SocialLinks";
import portfolioData from "../data/portfolioData";
import profileImage from "../assets/images/photo2.png";

const Hero = () => {
    const { personal } = portfolioData;

    return (
        <section
            id="home"
            className="min-h-screen bg-[#1f2024] px-6 pt-28 sm:pt-32"
        >
            <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
                <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row lg:gap-8">

                    {/* Left Content */}
                    <div className="w-full text-center lg:w-[58%] lg:text-left">

                        {/* Small Intro */}
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-[#ff014f] sm:text-sm">
                            Welcome to my portfolio
                        </p>

                        {/* Main Heading */}
                        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
                            Hi, I am{" "}
                            <span className="text-[#ff014f]">
                                {personal.name}
                            </span>
                        </h1>

                        {/* Animated Role */}
                        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:justify-start">

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

                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg lg:mx-0">
                            {personal.description}
                        </p>

                        {/* CTA + Social */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 lg:justify-start">

                            <Button>
                                Hire Me
                            </Button>

                            <SocialLinks />

                        </div>
                    </div>

                    {/* Right Profile Image */}
                    <div className="flex w-full items-end justify-center lg:w-[42%] lg:justify-end">

                        <img
                            src={profileImage}
                            alt="Nitesh Yadav - Full Stack Developer"
                            className="
                                h-[350px]
                                w-auto
                                object-contain
                                sm:h-[430px]
                                md:h-[500px]
                                lg:h-[560px]
                                xl:h-[620px]
                            "
                        />

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

