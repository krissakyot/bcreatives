import aboutProf from "../assets/Group 15.png";
import { CgFigma } from "react-icons/cg";

const About = () => {
  return (
    <section className="about flex flex-col gap-[10rem] items-center sm:gap-[10rem]" id="about">
      <div className="about-intro w-[100%] flex flex-col text-center font-inter font-bold text-[1.5rem] sm:text-[3rem] sm:leading-[3rem]">
        <p><span className="text-black">I am </span><span className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent">ui/ux designer</span></p>
        <div className="relative w-[100%] self-center font-inter font-bold">
          <p className="p1 absolute w-[100%]"><span className="text-black">creating </span><span className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent">website</span></p> 
          <p className="p2 absolute w-[100%]"><span className="text-black">creating </span><span className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent">mobile application</span></p> 
          <p className="p3 absolute w-[100%]"><span className="text-black">creating </span><span className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent">web application</span></p>
        </div>
        <p className="mt-[3rem] text-black">in support of your image.</p>
      </div>
      <div>
        <img src={aboutProf} className="sm:w-[800px]" alt="" />
      </div>
      <div className="flex flex-col gap-[3rem] md:flex-row">
        <div className="flex flex-col items-start md:w-[30%]">
          <h1 className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent text-[1.8rem] font-inter font-semibold">SOFTWARE</h1>
          <div className="flex items-center gap-[1rem]">
            <CgFigma className="text-[2rem] text-[#31422F]" />
            <p className="text-[#31422F] font-inter font-regular">Figma</p>
          </div>
        </div>
        <div className="flex flex-col items-start md:w-[30%] text-[#31422F]">
          <h1 className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent text-[1.8rem] font-inter font-semibold">EDUCATION</h1>
          <div className="font-inter font-regular">
            <h2 className="font-inter font-bold">2020-2022:</h2>
            <p>Information and Communications Technology (ICT)</p>
            <p>&nbsp;• Iloilo National Highschool</p>
            <p>Information Technology (IT)</p>
            <p>&nbsp;• Western institute of Technology</p>
          </div>
        </div>
        <div className="flex flex-col items-start md:w-[30%] text-[#31422F]">
          <h1 className="bg-gradient-to-r from-[#31422F] to-[#91C28B] bg-clip-text text-transparent text-[1.8rem] font-inter font-semibold">EXPERIENCE</h1>
          <h2 className="font-inter font-bold">2022-2024:</h2>
          <div className="font-inter font-regular">
            <p>Freelance UI/UX Designer</p>
            <ul>
              <li>&nbsp;• Designed user interfaces for mobile and web applications, focusing on enhancing usability and accessibility.</li>
              <li>&nbsp;• Conducted user research and usability testing to inform design decisions, improving overall user experience.</li>
              <li>&nbsp;• Created wireframes, prototypes, and user flows using Figma, translating user needs into intuitive and visually engaging interfaces.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
