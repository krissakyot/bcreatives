import bolak from "../assets/LOGO.png"

const Nav = () => {
    return(
        <nav className="navbar p-[1rem] flex justify-between fixed w-[100%] top-0 sm:px-[2rem] lg:px-[4rem] lg:py-[1.5rem] z-[99] ">
            <img src={bolak} alt=""/>
            <ul className="flex items-center gap-[1rem] text-[.6rem] font-inter sm:text-[1rem] sm:gap-[4rem]">
               <a href="#home"><li className="text-[#31422F] cursor-pointer font-inter font-regular">Home</li> </a>
               <a href="#about"><li className="text-[#31422F] cursor-pointer font-inter font-regular">About me</li> </a>
               <a href="#website"><li className="text-[#31422F] cursor-pointer font-inter font-regular">Website</li> </a>
               <a href="#mobile"><li className="text-[#31422F] cursor-pointer font-inter font-regular">Mobile App</li> </a>
               <a href="#contact"><li className="text-[#31422F] cursor-pointer font-inter font-regular">Contact</li></a> 
            </ul>
        </nav>
    );

}

export default Nav