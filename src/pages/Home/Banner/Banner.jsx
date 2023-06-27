import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import coding from '../../../assets/coding.json';

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-center" >
                <div className="py-2 pl-10">
                    <div className="flex flex-col md:flex-row-reverse w-full items-center justify-around space-y-8">
                        <div>
                            <Lottie animationData={coding} loop={true}  className="ml-auto w-full" style={{width: '32rem'}}></Lottie>
                        </div>
                        <div className="w-full space-y-3">
                            <h1 className="text-center font-bold text-">
                                <span className="md:text-3xl text-2xl">Ariaan Ahmed</span>
                                <br />
                            </h1>
                            <div className="text-center font-bold md:text-5xl text-3xl">MERN Stack Developer</div>

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