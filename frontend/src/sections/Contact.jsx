import { useState } from "react";
import SectionTitle from "../Component/SectionTitle";
import api from "../services/api";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState({
        loading: false,
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const showToast = (type, message) => {
        setStatus({
            loading: false,
            type,
            message,
        });

        setTimeout(() => {
            setStatus({
                loading: false,
                type: "",
                message: "",
            });
        }, 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus({
            loading: true,
            type: "",
            message: "",
        });

        try {
            await api.post("/messages", formData);

            setFormData({
                name: "",
                email: "",
                message: "",
            });

            showToast(
                "success",
                "Thanks for reaching out! I’ll get back to you shortly."
            );
        } catch (error) {
            console.error("Failed to send message:", error);

            showToast(
                "error",
                "Something went wrong. Please try again."
            );
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#1f2024] px-6 py-24"
        >
            <div className="mx-auto max-w-3xl">

                <SectionTitle
                    subtitle="Contact"
                    title="Let's Work Together"
                />

                <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-6 text-gray-400 sm:text-base">
                    Have an opportunity, hiring requirement, or just want
                    to connect? Feel free to reach out.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="
                        relative
                        mt-12
                        space-y-6
                        rounded-2xl
                        border
                        border-white/[0.06]
                        bg-[#292b30]
                        p-6
                        shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                        md:p-8
                    "
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="
                            w-full
                            rounded-xl
                            border
                            border-white/[0.08]
                            bg-[#1f2024]
                            px-4
                            py-3.5
                            text-white
                            placeholder:text-gray-500
                            outline-none
                            transition
                            focus:border-[#ff014f]/60
                            focus:ring-1
                            focus:ring-[#ff014f]/30
                        "
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email Address"
                        required
                        className="
                            w-full
                            rounded-xl
                            border
                            border-white/[0.08]
                            bg-[#1f2024]
                            px-4
                            py-3.5
                            text-white
                            placeholder:text-gray-500
                            outline-none
                            transition
                            focus:border-[#ff014f]/60
                            focus:ring-1
                            focus:ring-[#ff014f]/30
                        "
                    />

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        rows="5"
                        required
                        className="
                            w-full
                            resize-none
                            rounded-xl
                            border
                            border-white/[0.08]
                            bg-[#1f2024]
                            px-4
                            py-3.5
                            text-white
                            placeholder:text-gray-500
                            outline-none
                            transition
                            focus:border-[#ff014f]/60
                            focus:ring-1
                            focus:ring-[#ff014f]/30
                        "
                    />

                    <button
                        type="submit"
                        disabled={status.loading}
                        className="
                            w-full
                            rounded-xl
                            bg-[#ff014f]
                            px-6
                            py-3.5
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:shadow-[0_10px_30px_rgba(255,1,79,0.25)]
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    >
                        {status.loading
                            ? "Sending..."
                            : "Send Inquiry"}
                    </button>
                </form>
            </div>

            {/* Toast */}
            {status.message && (
                <div
                    className="
                        fixed
                        left-1/2
                        top-1/2
                        z-[100]
                        w-[calc(100%-40px)]
                        max-w-md
                        -translate-x-1/2
                        -translate-y-1/2
                    "
                >
                    <div
                        className={`
                            rounded-2xl
                            border
                            bg-[#292b30]
                            px-6
                            py-5
                            text-center
                            shadow-[0_25px_80px_rgba(0,0,0,0.5)]
                            backdrop-blur-xl
                            ${
                                status.type === "success"
                                    ? "border-green-500/20"
                                    : "border-red-500/20"
                            }
                        `}
                    >
                        <div
                            className={`
                                mx-auto
                                mb-3
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                text-lg
                                ${
                                    status.type === "success"
                                        ? "bg-green-500/10 text-green-400"
                                        : "bg-red-500/10 text-red-400"
                                }
                            `}
                        >
                            {status.type === "success" ? "✓" : "!"}
                        </div>

                        <p className="text-sm font-medium leading-6 text-white">
                            {status.message}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;