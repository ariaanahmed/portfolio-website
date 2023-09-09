import Aos from 'aos';
import { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <section className='contact-section mt-8 mb-8' data-aos="fade-right">
            <div className='container'>
                <div className='section-title'>
                    <h2 className='capitalize text-center font-semibold text-3xl'>Contact me</h2>
                </div>

                <form action="https://formspree.io/f/mrgwkvkp" method="POST" className='w-11/12 md:w-full mx-auto mt-8'>
                    <input type="text" placeholder='Enter your name' name='Name' className='w-full h-10 px-3 border border-slate-400 mb-2 text-lg rounded-md' required />
                    <input type="email" placeholder='Enter your email' name='Email' className='w-full h-10 px-3 border border-slate-400 mb-2 text-lg rounded-md' required />
                    <textarea cols="30" rows="10" className='w-full px-3 border border-slate-400 mb-3 text-lg resize-none rounded-md' placeholder='Message' name='Message' required></textarea>
                    <input type="submit" name='sumbit' value="Send" className='btn btn-warning w-full px-3 mb-2 rounded-md' />
                </form>
            </div>
        </section>
    );
};

export default Contact;