import Me from "../../components/me";
import AboutMe from "../../components/aboutMe";
import MyServices from "../../components/myServices";
import MyProjects from "../../components/myProjects";
import MySkills from "../../components/mySkills";
import LastestBlogs from "../../components/latestBlogs";
import MySocials from "../../components/mySocials";
import ContactForm from "../../components/contactForm";

function Home() {
    return (
        <>
            <Me />
            <AboutMe />
            <MyServices />
            <MyProjects />
            <MySkills />
            <LastestBlogs />
            <MySocials />
            <ContactForm />
        </>
    );
}

export default Home;
