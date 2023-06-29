import { useEffect } from 'react';
import './Skills.css';
import Aos from 'aos';

const Skills = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <section className="experience-section" data-aos="fade-right">
            <div className="container">
                <div className='section-title '>
                    <h2 className='capitalize text-center font-bold text-3xl mb-16'>Why choose me</h2>
                </div>

                <div className="experience-items flex items-center justify-center">

                    <div className="experience-item">
                        <div className="experience-info">
                            <p>HTML</p>
                            <p>92%</p>
                        </div>
                        <div className="progress-line" data-percent="92%">
                            <span style={{ width: '92%' }}></span>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-info">
                            <p>CSS</p>
                            <p>90%</p>
                        </div>
                        <div className="progress-line" data-percent="90%">
                            <span style={{ width: '90%' }}></span>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-info">
                            <p>Bootstrap</p>
                            <p>88%</p>
                        </div>
                        <div className="progress-line" data-percent="88%">
                            <span style={{ width: '88%' }}></span>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-info">
                            <p>Tailwind</p>
                            <p>89%</p>
                        </div>
                        <div className="progress-line" data-percent="89%">
                            <span style={{ width: '89%' }}></span>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-info">
                            <p>JavaScript</p>
                            <p>70%</p>
                        </div>
                        <div className="progress-line" data-percent="70%">
                            <span style={{ width: '70%' }}></span>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-info">
                            <p>React</p>
                            <p>73%</p>
                        </div>
                        <div className="progress-line" data-percent="73%">
                            <span style={{ width: '73%' }}></span>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-info">
                            <p>ExpressJS</p>
                            <p>65%</p>
                        </div>
                        <div className="progress-line" data-percent="65%">
                            <span style={{ width: '65%' }}></span>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-info">
                            <p>MongoDB</p>
                            <p>60%</p>
                        </div>
                        <div className="progress-line" data-percent="60%">
                            <span style={{ width: '60%' }}></span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;