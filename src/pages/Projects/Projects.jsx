import { Link } from 'react-router-dom';
import carStoreProjectImg from '../../assets/projects/car_store .png'
import sportclubProjectImg from '../../assets/projects/sport_club.png'
import chefHuntProjectImg from '../../assets/projects/chef-hunt.png'
import { useEffect } from 'react';
import Aos from 'aos';

const Projects = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <div className='mx-auto w-11/12 lg:w-11/12 md:w-10/12 xl:px-24 pb-2 mt-8 mb-8' data-aos="fade-left">
            <h1 className='capitalize text-center font-semibold text-3xl px-3'>Projects By me</h1>
            <div className='px-2 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 justify-between mt-8'>
                {/* project card one */}
                <div className="card w-full md:w-80 bg-base-100 shadow-xl border mx-auto">
                    <figure className="md:pl-4 md:pt-3 rounded-e-lg rounded-s-lg">
                        <div className="overflow-y-scroll h-60 border-black rounded-e-lg rounded-s-lg">
                            <img src={carStoreProjectImg} alt="car-store" className='rounded-e-lg rounded-s-lg w-full' />
                        </div>
                    </figure>
                    <div className="card-body w-full">
                        <h2 className="card-title">The Car Store</h2>
                        <p><small className='font-medium'>Technology used</small></p>
                        <ul className='flex flex-col lg:flex-row items-start gap-3 text-xs font-medium'>
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>MongoDB</li>
                            <li>ExpressJS</li>
                            <li>Firebase</li>
                        </ul>
                        <div className="card-actions flex flex-col md:flex-row items-start md:items-center text-center">
                            <Link to='https://assignment11-8af59.web.app/' target='_blank' className="btn bg-warning btn-outline border-0 text-black">Live Demo</Link>
                            <Link to='https://github.com/ariaanahmed/car-store-client' target='_blank' className="btn btn-light btn-outline">Repository</Link>
                        </div>
                    </div>
                </div>
                {/* project card two */}
                <div className="card w-full md:w-80 bg-base-100 shadow-xl border mx-auto">
                    <figure className="md:pl-4 md:pt-3 rounded-e-lg rounded-s-lg">
                        <div className="overflow-y-scroll h-60 border-black rounded-e-lg rounded-s-lg">
                            <img src={sportclubProjectImg} alt="sport-club" className='rounded-e-lg rounded-s-lg w-full' />
                        </div>
                    </figure>
                    <div className="card-body w-full">
                        <h2 className="card-title">The Sport Club</h2>
                        <p><small className='font-medium'>Technology used</small></p>
                        <ul className='flex flex-col lg:flex-row items-start gap-3 text-xs font-medium'>
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>MongoDB</li>
                            <li>ExpressJS</li>
                            <li>Firebase</li>
                        </ul>
                        <div className="card-actions flex flex-col md:flex-row items-start md:items-center text-center">
                            <Link to='https://assignment12-ad3f5.web.app/' target='_blank' className="btn bg-warning btn-outline border-0 text-black">Live Demo</Link>
                            <Link to='https://github.com/ariaanahmed/sports-camp-client' target='_blank' className="btn btn-light btn-outline">Repository</Link>
                        </div>
                    </div>
                </div>
                {/* project card three */}
                <div className="card w-full md:w-80 bg-base-100 shadow-xl border mx-auto">
                    <figure className="md:pl-4 md:pt-3 rounded-e-lg rounded-s-lg">
                        <div className="overflow-y-scroll h-60 border-black rounded-e-lg rounded-s-lg">
                            <img src={chefHuntProjectImg} alt="chef-hunt" className='rounded-e-lg rounded-s-lg w-full' />
                        </div>
                    </figure>
                    <div className="card-body w-full">
                        <h2 className="card-title">The Chef Hunt</h2>
                        <p><small className='font-medium'>Technology used</small></p>
                        <ul className='flex flex-col lg:flex-row items-start gap-3 text-xs font-medium'>
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>MongoDB</li>
                            <li>ExpressJS</li>
                            <li>Firebase</li>
                        </ul>
                        <div className="card-actions flex flex-col md:flex-row items-start md:items-center text-center">
                            <Link to='https://assignment10-fb91b.web.app/' target='_blank' className="btn bg-warning btn-outline border-0 text-black">Live Demo</Link>
                            <Link to='https://github.com/ariaanahmed/chef-recipe-hunter-client' target='_blank' className="btn btn-light btn-outline">Repository</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
