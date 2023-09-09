import moment from "moment/moment";
import { FaRegCopyright } from "react-icons/fa";
// site created in jul 2023
const Footer = () => {
    return (
        <div className="mt-auto">
            <footer className="footer footer-center py-4 bg-base-300 text-base-content">
                <p className="flex justify-center items-center">Copyright<FaRegCopyright className=" " />{moment().format("YYYY")} All Rights Reserved
                </p>
            </footer>
        </div>
    );
};

export default Footer;