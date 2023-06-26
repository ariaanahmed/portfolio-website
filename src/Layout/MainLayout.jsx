import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;