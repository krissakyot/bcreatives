import laptop from "../assets/MOCKUP1.png"
import laptop2 from "../assets/WEBSITE.png"
import { FaEye } from "react-icons/fa";

const Website = () => {
  return (
    <section className="website mt-[3rem] flex flex-col items-center px-0" id="website">
        <h1 className="text-[2rem] font-semibold md:self-start md:text-[3rem] px-[1rem] sm:px-[4rem]">Website</h1>
        <div className="relative mt-[3rem]">
            <a href="https://www.figma.com/proto/OZ6Fx4mN8LIQ5STowEN8zh/portfolio?node-id=1061-39&starting-point-node-id=1061%3A39&scaling=scale-down-width&content-scaling=fixed"><button className="absolute md:top-[25%] md:right-[15%] flex gap-[.5rem] items-center border-[2px] border-[solid] border-[black] rounded-[20px] p-[.3rem] text-[.5rem] md:text-[.7rem]"><FaEye className="md:text-[1.2rem]" /> VIEW PROTOYPE</button></a>
            <img src={laptop} alt="" />
        </div>
        <p className="mt-[5rem] md:mt-0 md:w-[70%] md:text-center px-[1rem] sm:px-[4rem]"><strong>Vincent Paul's Website:</strong> The website offers a clean and professional design, with two distinct themes -light and dark mode- allowing visitors to switch between styles for optional viewing</p>
        <div className="flex flex-col my-[5rem]">
            <h3 className="text-[2rem] text-center mb-[3rem] md:text-[4rem]">UI DESIGN</h3>
            <div className="flex items-center justify-around mb-[1rem] md:text-[1.5rem]">
                <p>Dark Mode</p>
                <p>Light Mode</p>
            </div>
            <img src={laptop2} alt="" />
        </div>
    </section>
  )
};

export default Website;
