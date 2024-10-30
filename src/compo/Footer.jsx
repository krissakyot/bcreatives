import cont from "../assets/CONTACT.png"
import { FaGithub } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#31422F]" id="contact">
        <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:order-2 text-[#fff] text-center text-[1.5rem] px-[1rem] font-inter font-regular">
            <p className="md:text-[3.5rem]">Do you have any project ideas in mind?</p>
            <p className="md:text-[3.5rem]">Let’s discuss it!</p>
            <p className="md:text-[1.5rem] font-inter font-light">You can reach me through the contact down below.</p>
        </div>
        <img src={cont} alt="" className="md:order-1 w-[20]"/>
        </div>
        <div className="bg-[#fff] flex flex-col items-center px-[1rem] md:flex-row md:justify-between md:p-[.5rem] text-[#31422F]">
            <a href="https://github.com/bcreatives"><div className="flex items-center gap-[.5rem]"><FaGithub />github.com/bcreatives</div></a>
            <a href="https://www.behance.net/krissatamesis"><div className="flex items-center gap-[.5rem]"><FaBehanceSquare />behance.net/bcreatives</div></a>
            <a href=""><div className="flex items-center gap-[.5rem]"><FaPhoneAlt />+639949547246</div></a>
            <a href="https://b.creatives@gmail.com"><div className="flex items-center gap-[.5rem]"><MdEmail />b.creatives@gmail.com</div></a>
        </div>
    </footer>
  )
};

export default Footer;
