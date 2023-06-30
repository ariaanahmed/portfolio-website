import About from "../../About/About";
import Projects from "../../Projects/Projects";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Projects/>
            <Skills/>
        </div>
    );
};

export default Home;