import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import coding from '../../../assets/coding.json';
import Typical from "react-typical";

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div /* data-aos="fade-up" data-aos-anchor-placement="center-center"  */>
                <div>
                    <div className="flex flex-col md:flex-row-reverse w-full items-center justify-around space-y-8">
                        <div>
                            <Lottie animationData={coding} loop={true}  className="ml-auto w-full" /* style={{width: '31rem'}} */ ></Lottie>
                        </div>
                        <div className="space-y-3">
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
                                <Link className="btn btn-warning text-center"> Project </Link>
                                <Link className="btn btn-light btn-outline text-center"> Resume </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;