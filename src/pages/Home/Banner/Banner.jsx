import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import coding from '../../../assets/coding.json';
import Typical from "react-typical";
import resume from '../../../assets/resume/resume of  arian ahmed.pdf'

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <div className="mt-14">
            <div className="flex flex-col md:flex-row-reverse w-full items-center justify-around space-y-8">
                <div data-aos="fade-left">
                    <Lottie animationData={coding} loop={true} className="ml-auto w-full" /* style={{width: '31rem'}} */ ></Lottie>
                </div>
                <div className="space-y-3" data-aos="fade-right">
                    <h1 className="text-center font-bold text-">
                        <span className="md:text-3xl text-2xl">Hi, Im Ariaan Ahmed</span>
                        <br />
                    </h1>
                    <h2 className="text-center font-bold md:text-5xl text-3xl">MERN Stack Developer</h2>
                    <p className="text-center">I am curious about <Typical
                        className='capitalize'
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'html', 1000,
                            'tailwind', 1000,
                            'javascript', 1000,
                            'bootstrap', 1000,
                            'react', 1000,
                            'expressjs', 1000,
                            'firebase', 1000,
                            'mongodb', 1000,
                            'nodejs', 1000,
                            'jwt', 1000,
                        ]}
                    >React</Typical>
                    </p>
                    <div className="text-center space-x-2 flex-col items-center md:flex-row space-y-4">
                        <a className="btn bg-warning btn-outline border-0 text-black text-center" href={resume} download={resume}> Resume </a>
                        <Link to="/projects" className="btn btn-light btn-outline text-center"> Project </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;