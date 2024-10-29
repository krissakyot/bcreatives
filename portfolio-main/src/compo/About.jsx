import aboutProf from "../assets/Group 15.png"
import { CgFigma } from "react-icons/cg";

const About = () => {
  return (
    <section className="about flex flex-col gap-[3rem] items-center sm:gap-[5rem]" id="about">
        <div className="about-intro w-[100%] flex flex-col text-center font-semibold text-[1.5rem] sm:text-[3rem]
        sm:leading-[3.5rem]">
            <p>I am a UI/UX Designer</p>
            <p>creating websites</p>
            <p>in support of your image</p>
        </div>
        <div>
            <img src={aboutProf} className="sm:w-[520px]" alt="" />
        </div>
        <div className="flex flex-col gap-[3rem] md:flex-row">
            <div className="flex flex-col items-start md:w-[30%]">
                <h1 className="text-[1.2rem] font-semibold">SOFTWARE</h1>
                <div className="flex items-center gap-[1rem]">
                <CgFigma className="text-[2rem] text-[#174f26]" /><p>Figma</p>
                </div>
            </div>
            <div className="flex flex-col items-start md:w-[30%]">
                <h1 className="text-[1.2rem] font-semibold">EDUCATION</h1>
                <h2 className="font-semibold">2020-2022</h2>
                <p>Information and Communications</p>
                <p>Technology (ICT)</p>
                <p>&nbsp; • Iloilo National Highschool</p>
            </div>
            <div className="flex flex-col items-start md:w-[30%]">
                <h1 className="text-[1.2rem] font-semibold">EXPERIENCE</h1>
                <h2 className="font-semibold">2022-2024</h2>
                <p>Freelance UI/UX Designer</p>
                <ul>
                    <li>&nbsp;• Designed user interfaces for mobile and web applications, focusing on enhancing usability and accessiblity.</li>
                    <li>&nbsp;• Conducted user research and usability testing to inform design decisions, imporving overall user experince.</li>
                    <li>&nbsp;• Created wireframes, prototypes, and user flows using Figma, translating user needs into intuitive and visually engaging interfaces.</li>
                </ul>
            </div>
        </div>
    </section>
  )
};

export default About;
