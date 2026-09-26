import SectionTitle from "../Component/SectionTitle";
import portfolioData from "../data/portfolioData";

const About = () => {
    const { personal } = portfolioData;

    return (
        <section
            id="about"
            className="bg-[#1f2024] px-6 py-24"
        >
            <div className="mx-auto max-w-7xl">
                <SectionTitle
                    subtitle="About Me"
                    title="About Me"
                />

                <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            I'm {personal.name}
                        </h3>

                        <p className="mt-4 leading-8 text-gray-400">
                            {personal.description}
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <p className="text-sm text-gray-500">
                                Name
                            </p>
                            <p className="mt-1 text-white">
                                {personal.name}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Role
                            </p>
                            <p className="mt-1 text-white">
                                {personal.role}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Location
                            </p>
                            <p className="mt-1 text-white">
                                {personal.location}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Email
                            </p>
                            <p className="mt-1 text-white">
                                {personal.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;