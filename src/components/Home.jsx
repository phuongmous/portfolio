import React, { useState, useEffect } from 'react';
import { GiPositionMarker } from "react-icons/gi";
import homeImage from "../img/home-img.png";

export default function Home ({scrollTo}) {
    const textToType = 'PHUONG VU';
    const [currentPosition, setCurrentPosition] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentPosition((prevPosition) => prevPosition + 1);
        }, 250);
        // Clear the interval when the component unmounts or when the typing is complete
        return () => {
          clearInterval(intervalId);
        };
    }, []); // The dependency array should be empty to run the effect only once
      // Display only the characters that have been typed so far
    const typedText = textToType.slice(0, currentPosition);
    const handleScrollToSection = () => {
        scrollTo('aboutSection');
    };

    return (
        <div className="home-section h-screen bg-gray-100 px-5 py-[3rem] md:py-[9rem] ">
            <div className="home-container mx-auto my-12 flex-col md:flex justify-center items-center">
                <div className="home-info flex flex-col md:flex-row items-center">
                    <div className="text-center space-y-10 md:text-left md:mr-10">
                        <h4 className="text-md my-3 font-semibold text-gray-600">Hey there! I'm</h4>
                        <h1 className="text-4xl my-4 font-bold text-gray-900">{typedText}</h1>
                        <h5 className="text-lg my-4 font-medium text-gray-700">JUNIOR SOFTWARE ENGINEER</h5>
                        <div className="flex my-4 mx-[6.5rem] md:mx-0 items-center text-gray-500">
                            <GiPositionMarker className="md:mr-2" />
                            <h5>Sydney, Australia</h5>
                        </div>
                    </div>
                        <div className="flex-shrink-0 my-4 mx-[6rem] md:mx-0">
                        <img src={homeImage} alt="Home Image" className="md:w-60 md:h-60" />
                    </div>
                </div>
                <div className="about-button my-[5rem] md:mt-[15rem]">
                        <button 
                        className="bg-blue-100 text-black py-2 px-4 rounded focus:outline-none animate-bounce" 
                        onClick={handleScrollToSection}
                        >
                        About Me ▽
                        </button>
                </div>
            </div>
        </div>
    );  
}