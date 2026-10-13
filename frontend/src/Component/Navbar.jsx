import { useEffect, useState } from "react";
import profileImage from "../assets/images/photo2.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { name: "Home", link: "#home" },
        { name: "Projects", link: "#projects" },
        { name: "Skills", link: "#skills" },
        { name: "Services", link: "#services" },
        { name: "Experience", link: "#experience" },
        { name: "Education", link: "#education" },
        { name: "Resume", link: "#resume" },
        { name: "Contact", link: "#contact" },
    ];

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.link.substring(1)))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                root: null,
                rootMargin: "-25% 0px -55% 0px",
                threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const handleNavClick = (section) => {
        setActiveSection(section);

        setIsOpen(false);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full px-2 pt-3 sm:px-4 sm:pt-4">
            <div
                className="
                    mx-auto
                    max-w-[1400px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-[#15161b]/90
                    shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                    backdrop-blur-xl
                "
            >
                <div className="flex h-[76px] items-center justify-between px-4 sm:px-6 lg:px-8">

                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={() => handleNavClick("home")}
                        className="group flex shrink-0 items-center gap-3"
                    >
                        <div
                            className="
                                relative
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-full
                                border-2
                                border-[#ff014f]
                                p-[2px]
                                shadow-[0_0_18px_rgba(255,1,79,0.18)]
                                transition
                                duration-300
                                group-hover:scale-105
                                group-hover:shadow-[0_0_25px_rgba(255,1,79,0.35)]
                            "
                        >
                            <img
                                src={profileImage}
                                alt="Nitesh Yadav"
                                className="h-full w-full rounded-full object-cover"
                            />

                            <span
                                className="
                                    absolute
                                    -right-0.5
                                    bottom-0
                                    h-3
                                    w-3
                                    rounded-full
                                    border-2
                                    border-[#15161b]
                                    bg-[#ff014f]
                                "
                            />
                        </div>

                        <span className="text-2xl font-bold tracking-tight text-white sm:text-[28px]">
                            Nitesh<span className="text-[#ff014f]">.</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
                        {navItems.map((item) => {
                            const sectionId = item.link.substring(1);
                            const isActive = activeSection === sectionId;

                            return (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    onClick={() =>
                                        handleNavClick(sectionId)
                                    }
                                    className={`
                                        group
                                        relative
                                        py-2
                                        text-[12px]
                                        font-semibold
                                        uppercase
                                        tracking-[1.1px]
                                        transition-all
                                        duration-300
                                        ${
                                            isActive
                                                ? "text-[#ff014f]"
                                                : "text-gray-300 hover:text-white"
                                        }
                                    `}
                                >
                                    {item.name}

                                    <span
                                        className={`
                                            absolute
                                            -bottom-1
                                            left-1/2
                                            h-[2px]
                                            -translate-x-1/2
                                            rounded-full
                                            bg-[#ff014f]
                                            transition-all
                                            duration-300
                                            ${
                                                isActive
                                                    ? "w-8"
                                                    : "w-0 group-hover:w-6"
                                            }
                                        `}
                                    />
                                </a>
                            );
                        })}
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">

                        {/* Hire Me */}
                        <a
                           href="https://wa.me/918808891857?text=Hi%20Nitesh%2C%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20hiring%20you."
                            target="_blank"
                            className="
                                hidden
                                items-center
                                gap-2
                                rounded-xl
                                bg-gradient-to-r
                                from-[#ff315f]
                                to-[#ff014f]
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                shadow-[0_8px_25px_rgba(255,1,79,0.18)]
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-[0_10px_30px_rgba(255,1,79,0.35)]
                                md:flex
                            "
                        >
                            <span>Hire Me</span>
                            <span className="text-lg">→</span>
                        </a>

                        {/* Mobile Menu */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/10
                                bg-white/[0.03]
                                text-white
                                transition
                                duration-300
                                hover:border-[#ff014f]/40
                                hover:bg-[#ff014f]/10
                                md:flex
                                lg:hidden
                            "
                        >
                            {isOpen ? (
                                <span className="text-2xl leading-none">
                                    ×
                                </span>
                            ) : (
                                <div className="flex flex-col gap-1.5">
                                    <span className="block h-[2px] w-5 rounded-full bg-white" />
                                    <span className="block h-[2px] w-5 rounded-full bg-white" />
                                    <span className="block h-[2px] w-5 rounded-full bg-white" />
                                </div>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`
                        overflow-hidden
                        border-t
                        border-white/[0.06]
                        transition-all
                        duration-300
                        lg:hidden
                        ${
                            isOpen
                                ? "max-h-[600px] opacity-100"
                                : "max-h-0 border-t-0 opacity-0"
                        }
                    `}
                >
                    <nav className="flex flex-col px-5 py-4">
                        {navItems.map((item) => {
                            const sectionId = item.link.substring(1);
                            const isActive =
                                activeSection === sectionId;

                            return (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    onClick={() =>
                                        handleNavClick(sectionId)
                                    }
                                    className={`
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-sm
                                        font-semibold
                                        uppercase
                                        tracking-[1px]
                                        transition
                                        duration-200
                                        ${
                                            isActive
                                                ? "bg-[#ff014f]/10 text-[#ff014f]"
                                                : "text-gray-300 hover:bg-white/[0.04] hover:text-white"
                                        }
                                    `}
                                >
                                    {item.name}
                                </a>
                            );
                        })}

                        <a
                            href="https://wa.me/918808891857?text=Hi%20Nitesh%2C%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20hiring%20you."
                            target="_blank"  
                            className="
                                mt-3
                                flex
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-gradient-to-r
                                from-[#ff315f]
                                to-[#ff014f]
                                px-5
                                py-3.5
                                text-sm
                                font-semibold
                                text-white
                            "
                        >
                            Hire Me
                            <span className="text-lg">→</span>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;