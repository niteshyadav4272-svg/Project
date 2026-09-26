const Footer = () => {
    const year = new Date().getFullYear();

    const footerLinks = [
        { name: "Home", link: "#home" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Experience", link: "#experience" },
        { name: "Education", link: "#education" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#18191c]">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ff014f]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Main Footer */}
                <div className="flex flex-col gap-10 py-12 md:flex-row md:items-center md:justify-between">

                    {/* Brand */}
                    <div className="max-w-sm">

                        <a
                            href="#home"
                            className="group inline-flex items-center gap-2"
                        >
                            <span className="text-2xl font-black tracking-tight text-white">
                                Nitesh
                            </span>

                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-[#ff014f]
                                    shadow-[0_0_12px_rgba(255,1,79,0.7)]
                                    transition-transform
                                    duration-300
                                    group-hover:scale-150
                                "
                            />
                        </a>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            Full Stack Developer building modern,
                            scalable and user-focused web applications.
                        </p>

                        {/* Availability */}
                        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-[#292b30] px-3 py-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                            </span>

                            <span className="text-xs font-medium text-gray-400">
                                Available for opportunities
                            </span>
                        </div>

                    </div>

                    {/* Navigation */}
                    <div>

                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[3px] text-[#ff014f]">
                            Explore
                        </p>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">

                            {footerLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-gray-500
                                        transition-all
                                        duration-300
                                        hover:translate-x-1
                                        hover:text-white
                                    "
                                >
                                    <span className="h-px w-0 bg-[#ff014f] transition-all duration-300 group-hover:w-3" />

                                    {item.name}
                                </a>
                            ))}

                        </div>

                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col gap-5 border-t border-white/[0.06] py-6 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs text-gray-600">
                        © {year}{" "}
                        <span className="text-gray-400">
                            Nitesh Yadav
                        </span>
                        . All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">

                        {/* GitHub */}
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/[0.07]
                                bg-[#292b30]
                                text-xs
                                font-bold
                                text-gray-400
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-[#ff014f]/40
                                hover:bg-[#ff014f]/10
                                hover:text-[#ff014f]
                            "
                        >
                            GH
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/[0.07]
                                bg-[#292b30]
                                text-xs
                                font-bold
                                text-gray-400
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-[#ff014f]/40
                                hover:bg-[#ff014f]/10
                                hover:text-[#ff014f]
                            "
                        >
                            in
                        </a>

                        {/* Back To Top */}
                        <a
                            href="#home"
                            aria-label="Back to top"
                            className="
                                ml-1
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                bg-[#ff014f]
                                text-sm
                                font-bold
                                text-white
                                shadow-[0_0_20px_rgba(255,1,79,0.18)]
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-[0_0_25px_rgba(255,1,79,0.35)]
                            "
                        >
                            ↑
                        </a>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;