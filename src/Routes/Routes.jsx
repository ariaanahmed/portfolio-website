import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Footer from "../pages/Shared/Footer/Footer";
import Resume from "../pages/Resume/Resume";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: '/footer',
                element: <Footer/>
            },
            {
                path: '/resume',
                element: <Resume/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },
            {
                path: '/skills',
                element: <Skills/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    },
]);