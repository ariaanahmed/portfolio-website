import { Link } from 'react-router-dom';
import carStoreProjectImg from '../../assets/projects/car_store .png'

const Projects = () => {
    return (
        <div className='px-2'>

            <h1 className='capitalize text-center font-bold text-3xl'>Projects By me</h1>

            <div className="card w-96 bg-base-100 shadow-xl mt-10 border">
                <figure className="px-10 pt-10">
                    <div className="overflow-y-scroll h-60 border-black">
                        <img src={carStoreProjectImg} alt="car-store" />
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">The Car Store</h2>
                        <p><small className='font-medium'>Technology used</small></p>
                    <ul className='flex gap-3 font-medium'>
                        <li>React</li>
                        <li>Tailwind</li>
                        <li>MongoDB</li>
                        <li>ExpressJS</li>
                    </ul>
                    <div className="card-actions items-center text-center">
                        <Link className="btn btn-warning">Live Demo</Link>
                        <Link className="btn btn-light btn-outline">Repository</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Projects;
