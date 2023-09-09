import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import coding from '../../../assets/coding.json';
import Typical from "react-typical";

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    
    return (
        <div className="mt-5">
            <div className="flex flex-col md:flex-row-reverse w-full items-center justify-around space-y-8">
                <div data-aos="fade-left">
                    <Lottie animationData={coding} loop={true} className="ml-auto w-full" ></Lottie>
                </div>
                <div className="space-y-3" data-aos="fade-right">
                    <h1 className="text-center font-bold text-">
                        <span className="md:text-3xl text-2xl">Hi, Im Ariaan Ahmed</span>
                        <br />
                    </h1>
                    <h2 className="text-center font-bold md:text-5xl text-3xl">MERN Stack Developer</h2>
                    <p className="text-center">I am curious about <Typical 
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'C++', 2000,
                            'JavaScript', 2000,
                            'React', 2000,
                            'MongoDB', 2000,
                            'Tailwind', 2000,
                            'ExpressJS', 2000,
                            'Firebase', 2000,
                            'JWT', 2000,
                            'NodeJS', 2000,
                        ]}
                    >React</Typical>
                    </p>
                    <div className="text-center space-x-2 flex-col items-center md:flex-row space-y-4">
                        <Link to="/about" className="btn bg-warning btn-outline border-0 text-black text-center"> About me </Link> 
                        <Link to="/projects" className="btn btn-light btn-outline text-center"> Project </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;