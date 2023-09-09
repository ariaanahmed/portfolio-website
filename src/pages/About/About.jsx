import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdContentCopy } from "react-icons/md";
import ariaan from '../../assets/projects/ariaan_ahmed.JPG'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useEffect, useRef } from 'react';
import copy from 'clipboard-copy';
import Aos from 'aos';

const About = () => {
    const copyRef = useRef(null);

    const handleCopy = () => {
        const textToCopy = copyRef.current.innerText;
        copy(textToCopy);
    };

    const notify = () => {
        toast.success('successfully copied', {
            position: "top-center",
            autoClose: 200,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <div data-aos="fade-right">
            <div className='mx-auto text-center md:w-8/12 mt-8 mb-8'>
                <img src={ariaan} className='w-40 mx-auto rounded-full border' alt="ariaan-img" />
                <h1 className='text-center font-semibold text-3xl px-3 mt-8'>About me</h1>
                <p className='mt-8'>{"I'm"} a passionate MERN stack web developer with expertise in MongoDB, Express.js, React.js, and Node.js. I specialize in crafting immersive web experiences and collaborating with clients to bring their ideas to life. {"Let's"} work together to create remarkable digital solutions.</p>
                <div className='flex justify-center mt-8 gap-7'>
                    <Link title='facebook' to="https://www.facebook.com/iam.ariaanahmed2.0/" target='_blank'>
                        <FaFacebook className='w-7 h-7' />
                    </Link>
                    <Link title='GitHub' to="https://github.com/ariaanahmed" target='_blank'>
                        <FaGithub className='w-7 h-7' />
                    </Link>
                    <Link title='LinkedIn' to="https://www.linkedin.com/in/ariaanahmed/" target='_blank'>
                        <FaLinkedin className='w-7 h-7' />
                    </Link>
                </div>
                <div className='mt-8 flex flex-col md:flex-row justify-center items-center gap-5'>
                    <Link ref={copyRef} onClick={handleCopy}>
                        <span onClick={notify} title='Click to copy' className='border border-slate-500 py-2 px-3 rounded-full'>iam.ariaanahmed@gmail.com <MdContentCopy className='inline' /> </span>
                    </Link>
                    <Link to="/projects" className='border border-slate-500 py-2 px-3 rounded-full'> All my projects</Link>
                </div>
            </div>
        </div>
    );
};

export default About;