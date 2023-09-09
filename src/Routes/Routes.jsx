import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Footer from "../pages/Shared/Footer/Footer";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/footer',
                element: <Footer />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);