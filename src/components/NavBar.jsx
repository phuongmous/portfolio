import React, { useEffect, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import pvLogo from "../img/pv-logo.png"

export default function NavBar ({setNavHeight, navHeight, scrollTo}) {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    const elementRef = useRef(null);
    useEffect(() => {
    if (elementRef.current) {
      setNavHeight(elementRef.current.offsetHeight) - navHeight;
    }
  }, [setNavHeight]);
    return (
        <nav ref={elementRef} className="sticky top-0 bg-gray-800 p-4 md:p-2 text-white">
            <div className="container mx-auto my-3 md:flex md:my-0 justify-between items-center">
                <div className="flex justify-center">
                    <img src={pvLogo} className="cursor-pointer md:ml-4 h-10 md:h-20 md:w-auto" onClick={scrollToTop} />
                </div>
                <div className="flex justify-center m-4 space-x-7 md:space-x-14">
                    <div className="cursor-pointer" onClick={scrollToTop}>Home</div>
                    <div className="cursor-pointer" onClick={() => scrollTo("aboutSection")}>About</div>
                    <div className="cursor-pointer" onClick={() => scrollTo("projectsSection")}>Projects</div>
                    <div className="cursor-pointer" onClick={() => scrollTo("skillsSection")}>Skills</div>
                    <div className="cursor-pointer" onClick={() => scrollTo("contactSection")}>Contact</div>
                </div>
                <div className="flex mx-[9.2rem] space-x-7 items-center md:space-x-7 md:mr-4">
                    <BsLinkedin />
                    <SiGmail />
                    <BsGithub />
                </div>
            </div>
        </nav>
    );
}