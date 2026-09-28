import Navbar from "../Component/Navbar";

import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import Resume from "../sections/Resume";
import WhatsAppButton from "../Component/WhatsAppButton";
import ResumePopup from "../Component/ResumePopup";


import Footer from "../Component/Footer";

const Home = () => {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Projects />
                <Skills />
                <Services />
                <Experience />
                <Education />
                <Resume />
                <Contact />
            </main>

            <Footer />
            <ResumePopup />
             <WhatsAppButton />
        </>
    );
};

export default Home;