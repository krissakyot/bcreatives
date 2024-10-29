import mobile from "../assets/MOCKUP2.png"
import mobile2 from "../assets/MOCKUPS.png"
import { FaEye } from "react-icons/fa";

const Mobile = () => {
  return (
    <section className="mobile mt-[3rem] flex flex-col items-center px-0 w-full" id="mobile">
        <h1 className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent text-[2rem] font sat-semibold md:self-start md:text-[3rem] px-[1rem] sm:px-[4rem]">Mobile Applications</h1>
        <div className="relative mt-[3rem]">
            <a href="https://www.figma.com/proto/NWCAHpg8fzHx1gjEUy2LAj/Untitled?node-id=19-6&node-type=canvas&t=CeA1QIezQMNE3JQO-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&disable-default-keyboard-nav=1"><button className="absolute md:top-[20%] md:left-[15%] flex gap-[.5rem] items-center border-[2px] border-[solid] border-[#31422F] rounded-[20px] p-[.3rem] text-[.5rem] md:text-[.7rem] text-[#31422F]"><FaEye className="md:text-[1.2rem]" /> VIEW PROTOYPE</button></a>
            <img src={mobile} alt="" />
        </div>
        <p className="mt-[5rem] md:mt-0 md:w-[70%] md:text-center px-[1rem] sm:px-[4rem] text-[#31422F]"><strong>Ride Swift Mobile App: </strong> A user-friendly, intuitive ride-hailing app designed to offer seamless transportation experiences. It provides users with real-time tracking of their rides, allowing them to view their current location and estimated time of arrival directly on a map.</p>
        <div className="flex flex-col my-[5rem]">
            <h3 className="text-center mb-[2rem] md:text-[2.5rem] text-[#31422F]">UI DESIGN</h3>
            <img src={mobile2} alt="" />
        </div>
    </section>
  )
};

export default Mobile;