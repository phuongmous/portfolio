import React, { useState } from 'react';
import Project from './Project';
import cakeholicImage from '../img/cakeholic.png';
import booksnapImage from '../img/booksnap.png';
import homedekorImage from '../img/homedekor.png';
import memorygameImage from '../img/memorygame.png';
import mongodbLogo from '../img/mongodb.png';
import expressLogo from '../img/express.png';
import reactLogo from '../img/react.png';
import nodejsLogo from '../img/nodejs.png';
import tailwindLogo from '../img/tailwind.png';
import muiLogo from '../img/mui.png';
import postgresqlLogo from '../img/postgresql.png';
import javascriptLogo from '../img/javascript.png';
import htmlLogo from '../img/html.png';
import cssLogo from '../img/css.png';
import bootstrapLogo from '../img/bootstrap.png';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
const projectsData = [
    {
        image: cakeholicImage,
        githubLink: 'https://github.com/phuongmous/cakeholic',
        deployedLink: 'https://cakeholic-5bde23339f90.herokuapp.com/',
        name: 'Cakeholic',
        description: 'Cakeholic is an e-commerce website that sells cakes. Shopping cart updates in real-time. Users can log in to add items to their cart and keep track of their purchase history.',
        techStacks: [mongodbLogo, expressLogo, reactLogo, nodejsLogo, tailwindLogo]
    },
    {
        image: booksnapImage,
        githubLink: 'https://github.com/JennyZhong2022/BookSnap',
        deployedLink: 'https://booksnap-ecea12c610c0.herokuapp.com/',
        name: 'BookSnap',
        description: 'BookSnap is a group project. This web application allows users to search books using the Google Books API. Users can search for books, add them to their collection, and manage their reading list.',
        techStacks: [mongodbLogo, expressLogo, reactLogo, nodejsLogo, postgresqlLogo, muiLogo]
    },
    {
        image: homedekorImage,
        githubLink: 'https://github.com/phuongmous/HomeDekor',
        deployedLink: 'https://homedekor-d33828309ba0.herokuapp.com/',
        name: 'Homedekor',
        description: "Need some decoration ideas for your home? Try out Homedekor, this web application allows users to not only discover home decoration ideas but create their own account, post their own ideas, add ideas to their favorite list and interact with others by commenting on their posts. Cloudinary was used to upload user's photos.",
        techStacks: [mongodbLogo, expressLogo, nodejsLogo, bootstrapLogo]
    },
    {
        image: memorygameImage,
        githubLink: 'https://github.com/phuongmous/memory-game',
        deployedLink: 'https://phuongmous.github.io/memory-game/',
        name: 'Memory Game',
        description: 'This is a memory card game that challenges your memory skills by requiring you to match pairs of cards with the same images before time runs out.',
        techStacks: [javascriptLogo, htmlLogo, cssLogo]
    },
]
export default function Projects () {
    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
    };

    const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    };

    return (
        <div className="h-screen mx-8">
          <div className="text-4xl font-bold text-center my-8">MY PROJECTS</div>
          <div className="flex items-center justify-center m-[10rem]">
            <button onClick={prevProject} className="text-4xl mr-4"><MdArrowBackIos /></button>
            <Project {...projectsData[currentProject]} />
            <button onClick={nextProject} className="text-4xl ml-4"><MdArrowForwardIos /></button>
          </div>
        </div>
    );
}