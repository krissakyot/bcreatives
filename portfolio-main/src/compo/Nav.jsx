import bolak from "../assets/LOGO.png"

const Nav = () => {
    return(
        <nav className="navbar p-[1rem] flex justify-between fixed w-[100%] top-0 sm:px-[2rem] lg:px-[4rem] lg:py-[1.5rem] z-[99]">
            <img src={bolak} alt=""/>
            <ul className="flex items-center gap-[1rem] text-[.6rem] font-semibold sm:text-[1rem] sm:gap-[4rem]">
               <a href="#about"><li className="cursor-pointer">About Me</li> </a>
               <a href="#website"><li className="cursor-pointer">Website</li> </a>
               <a href="#mobile"><li className="cursor-pointer">Mobile App</li> </a>
               <a href="#contact"><li className="cursor-pointer">Contact</li></a> 
            </ul>
        </nav>
    );

}

export default Nav