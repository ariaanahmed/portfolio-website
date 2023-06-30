import moment from "moment/moment";

const Footer = () => {
    return (
        <div className="mt-auto">
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <p>Copyright © 2022 - {moment().format("YYYY")} | All right reserved by Ariaan Ahmed</p>
            </footer>
        </div>
    );
};

export default Footer;