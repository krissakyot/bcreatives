import aboutProf from "../assets/Group 15.png"
import { CgFigma } from "react-icons/cg";

const About = () => {
  return (
    <section className="about flex flex-col gap-[3rem] items-center sm:gap-[5rem]" id="about">
        <div className="about-intro w-[100%] flex flex-col text-center font-sat font-bold text-[1.5rem] sm:text-[3rem]
        sm:leading-[3.5rem]">
           <p><span className="text-black">I am </span><span className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent">ui/ux designer</span></p>
           <p><span className="text-black">creating </span><span className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent">website</span></p>
           <p><span className="text-black">in support of your image.</span></p>
        </div>
        <div>
            <img src={aboutProf} className="sm:w-[800px]" alt="" />
        </div>
        <div className="flex flex-col gap-[3rem] md:flex-row">
            <div className="flex flex-col items-start md:w-[30%]">
                <h1 className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent text-[1.7rem] font-sat font-semibold">SOFTWARE</h1>
                <div className="flex items-center gap-[1rem]">
                <CgFigma className="text-[2rem] text-[#174f26]" /><p>Figma</p>
                </div>
            </div>
            <div className="flex flex-col items-start md:w-[30%]">
                <h1 className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent text-[1.7rem] font-sat font-semibold">EDUCATION</h1>
                <h2 className="text-[#31422F] font-bold">2020-2022</h2>
                <p><span className="text-[#31422F]">Information and Communications</span></p>
                <p><span className="text-[#31422F]">Technology (ICT)</span></p>
                <p><span className="text-[#31422F]">&nbsp;• Iloilo National Highschool</span></p>
                <p><span className="text-[#31422F]">Information Technology (IT)</span></p>
                <p><span className="text-[#31422F]">&nbsp;• Western institute of Technology</span></p>
            </div>
            <div className="flex flex-col items-start md:w-[30%]">
                <h1 className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent text-[1.7rem] font-sat font-semibold">EXPERIENCE</h1>
                <h2 className="text-[#31422F] font-bold">2022-2024</h2>
                <p><span className="text-[#31422F]">Freelance UI/UX Designer</span></p>
                <ul>
                    <li><span className="text-[#31422F]">&nbsp;• Designed user interfaces for mobile and web applications, focusing on enhancing usability and accessiblity.</span></li>
                    <li><span className="text-[#31422F]">&nbsp;• Conducted user research and usability testing to inform design decisions, imporving overall user experince.</span></li>
                    <li><span className="text-[#31422F]">&nbsp;• Created wireframes, prototypes, and user flows using Figma, translating user needs into intuitive and visually engaging interfaces.</span></li>
                </ul>
            </div>
        </div>
    </section>
  )
};

export default About;
