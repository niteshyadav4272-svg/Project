
const WhatsAppButton = () => {
    const phoneNumber = "8808891857";

    const message =
        "Hi Nitesh, I came across your portfolio and I’m interested in hiring you. Please share your resume and relevant details.";

    const whatsappUrl = `https://wa.me/${8808891857}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact me on WhatsApp"
            className="
                group
                fixed
                bottom-6
                right-6
                z-[100]
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#25D366]
                text-white
                shadow-[0_8px_25px_rgba(37,211,102,0.35)]
                transition-all
                duration-300
                hover:scale-110
                hover:shadow-[0_10px_35px_rgba(37,211,102,0.55)]
                active:scale-95
                sm:bottom-7
                sm:right-7
            "
        >
            {/* Attention Ring */}
            <span
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    border-2
                    border-[#25D366]
                    animate-[whatsappRing_2s_ease-out_infinite]
                "
            />

            {/* Second Ring */}
            <span
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-[#25D366]/60
                    animate-[whatsappRing_2s_ease-out_infinite]
                    [animation-delay:1s]
                "
            />

            {/* WhatsApp Icon */}
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="
                    relative
                    z-10
                    h-7
                    w-7
                    animate-[whatsappIcon_2.5s_ease-in-out_infinite]
                "
                aria-hidden="true"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />

                <path d="M12.004 2.003a9.87 9.87 0 0 0-8.473 15.008L2 22l5.157-1.504A9.87 9.87 0 1 0 12.004 2.003zm0 17.992a8.11 8.11 0 0 1-4.13-1.13l-.296-.176-3.063.893.917-2.985-.193-.306a8.117 8.117 0 1 1 6.765 3.704z" />
            </svg>

            {/* Tooltip */}
            <span
                className="
                    pointer-events-none
                    absolute
                    right-16
                    whitespace-nowrap
                    rounded-lg
                    bg-[#292b30]
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    text-white
                    opacity-0
                    shadow-xl
                    transition-all
                    duration-300
                    group-hover:right-[4.5rem]
                    group-hover:opacity-100
                "
            >
                Let's connect on WhatsApp
            </span>

            {/* Animations */}
            <style>
                {`
                    @keyframes whatsappRing {
                        0% {
                            transform: scale(1);
                            opacity: 0.7;
                        }

                        70% {
                            transform: scale(1.45);
                            opacity: 0;
                        }

                        100% {
                            transform: scale(1.45);
                            opacity: 0;
                        }
                    }

                    @keyframes whatsappIcon {
                        0%,
                        70%,
                        100% {
                            transform: scale(1);
                        }

                        75% {
                            transform: scale(1.12);
                        }

                        80% {
                            transform: scale(0.96);
                        }

                        85% {
                            transform: scale(1.08);
                        }

                        90% {
                            transform: scale(1);
                        }
                    }
                `}
            </style>
        </a>
    );
};

export default WhatsAppButton;

