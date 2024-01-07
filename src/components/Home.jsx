import React, { useState, useEffect } from 'react';
import { GiPositionMarker } from "react-icons/gi";
import homeImage from "../../public/img/home-img.png";

export default function Home () {
    const textToType = 'PHUONG VU';
    const [currentPosition, setCurrentPosition] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentPosition((prevPosition) => prevPosition + 1);
        }, 150);
        // Clear the interval when the component unmounts or when the typing is complete
        return () => {
          clearInterval(intervalId);
        };
    }, []); // The dependency array should be empty to run the effect only once
      // Display only the characters that have been typed so far
    const typedText = textToType.slice(0, currentPosition);

    return (
        <div className="bg-gray-100 px-5 py-[8rem] ">
            <div className="container mx-auto flex-col md:flex justify-center items-center">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="text-center md:text-left md:mr-10">
                        <h4 className="text-sm my-3 font-semibold text-gray-600">Hello World! I am</h4>
                        <h1 className="text-3xl my-4 font-bold text-gray-900">{typedText}</h1>
                        <h5 className="text-lg my-4 font-medium text-gray-700">JUNIOR SOFTWARE ENGINEER</h5>
                        <div className="flex my-4 mx-[6.5rem] md:mx-0 items-center text-gray-500">
                            <GiPositionMarker className="md:mr-2" />
                            <h5>Sydney, Australia</h5>
                        </div>
                    </div>
                        <div className="flex-shrink-0 my-4 mx-[6rem] md:mx-0">
                        <img src={homeImage} alt="Home Image" className="md:w-60 md:h-60 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );  
}