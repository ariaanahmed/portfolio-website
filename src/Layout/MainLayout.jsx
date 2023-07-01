import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { ClipLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowUp } from 'react-icons/fa';

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [loading]);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const BackToTopContent = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setBackToTopButton(true);
        } else {
          setBackToTopButton(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
            }}
          >
            <ClipLoader size={30} color={'#F37A24'} loading={loading} />
          </div>
        ) : (
          <>
            <Navbar />
            <Outlet />
            {backToTopButton && (
              <button className=' py-2 px-2 border capitalize flex items-center justify-center fixed z-30 bottom-20 md:bottom-14 right-0 gap-3 btn-outline' onClick={backToTop}> <FaArrowUp /> </button>
            )}
            <Footer />
            <ToastContainer />
          </>
        )}
      </div>
    );
  };

  return <BackToTopContent />;
};

export default MainLayout;
