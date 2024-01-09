import React, { useEffect, useRef } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";


export default function NavBar ({setNavHeight}) {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    const elementRef = useRef(null);

    useEffect(() => {
    setNavHeight(elementRef.current.offsetHeight);
  }, []);
    return (
        <nav ref={elementRef} className="sticky top-0 bg-gray-800 p-4 md:p-2 text-white">
            <div className="container mx-auto my-3 md:flex md:my-0 justify-between items-center">
                <div className="cursor-pointer md:ml-4" onClick={scrollToTop}>Logo</div>
                <div className="flex mx-10 my-4 space-x-7 md:space-x-14">
                    <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">Home</ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">About</ScrollLink>
                    <ScrollLink to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</ScrollLink>
                    <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</ScrollLink>
                </div>
                <div className="flex mx-[9.2rem] space-x-2 md:space-x-7 md:mr-4">
                    <BsLinkedin />
                    <SiGmail />
                    <BsGithub />
                </div>
            </div>
        </nav>
    );
}