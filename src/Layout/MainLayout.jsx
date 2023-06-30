import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { ClipLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [loading]);

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
          <Footer />
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
