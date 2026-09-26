import Navbar from "../Component/Navbar";

import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import Resume from "../sections/Resume";


import Footer from "../Component/Footer";

const Home = () => {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Services />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Resume />
                <Contact />
            </main>

            <Footer />
        </>
    );
};

export default Home;