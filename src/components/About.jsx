
import aboutMeImage1 from '../img/about-me1.jpg';
import aboutMeImage2 from '../img/about-me2.jpg';
import aboutMeImage3 from '../img/about-me3.jpg';
import aboutMeImage4 from '../img/about-me4.jpg';
import aboutMeImage5 from '../img/about-me5.png';

export default function About ({ scrollTo }) {
    const handleScrollToSection = () => {
        scrollTo('projectsSection');
    };
    return (
        <div id="aboutSection" className="about-section h-screen flex flex-col m-8 pt-8 md:flex-row md:m-12 md:pt-0 md:space-x-12 text-pretty">
            <div className="about-container md:basis-3/5 flex-1 md:mx-4">
                <div className="py-2 font-bold md:text-xl text-left">________________</div>
                <div className="text-xl font-bold md:text-4xl text-left">About</div>
                <div className="text-xl font-bold md:text-4xl text-left">Me</div>
                <div className="flex flex-col md:flex-row">
                    <div className="basis-2/4 md:mt-14">
                        <p className="mt-2 text-right md:my-6">I 
                        <span className="uppercase text-md font-bold"> love </span> 
                        creating meaningful apps
                        </p>
                        <img src={aboutMeImage1} alt="About Me Image 1" className="w-full h-auto basis-2/4 rounded mt-2 shadow-md"/>
                        <p className="my-2 md:my-4 text-left text-sm">
                        I'm a 
                        <span className="uppercase text-sm font-bold"> fast </span>
                        learner & have a 
                        <span className="uppercase text-xl font-bold"> can-do </span>
                        attitude
                        </p>
                    </div>
                    <div className="basis-2/4">
                        <img src={aboutMeImage2} alt="About Me Image 2" className="w-full h-full basis-2/4 rounded mb-4 md:mx-6 shadow-md"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                        <div className="basis-2/4">
                            <img src={aboutMeImage3} alt="About Me Image 3" className="w-full h-5/6 basis-2/4 rounded shadow-md"/>
                        </div>
                        <div className="basis-2/4">
                            <p className="my-4 md:my-6 text-right">
                            I'm a 
                            <span className="uppercase text-sm font-bold"> problem solver </span>
                            who pay 
                            <span className="uppercase text-xl font-bold"> attention </span>
                            to details
                            </p>
                            <img src={aboutMeImage4} alt="About Me Image 4" className="w-full h-auto basis-2/4 rounded md:mt-2 md:mx-6 shadow-md"/>
                            <p className="my-2 md:ml-6 md:mt-4 text-left text-sm">
                            I'm a great 
                            <span className="uppercase text-md font-bold"> team player </span>
                            </p>
                        </div>
                </div>
            </div>
            <div className="about-container md:basis-2/5 flex-1 md:mx-4 md:my-[2rem]">
                    <div className="text-sm md:text-xl text-justify bg-contain bg-center bg-no-repeat shadow-md" style={{ backgroundImage: `url(${aboutMeImage5})`}}>
                        <div className="bg-pink-100 bg-opacity-60 px-4 py-4 md:py-8 md:px-10 rounded">
                            <p className="text-gray-800 pb-4">
                            <span className="text-md font-bold">Hi, my name is Phuong</span>. I'm a junior software engineer who is driven by the belief that technology can bring positive change to our life.
                            </p>
                            <p className="text-gray-800 pb-4">
                            <span className="text-md font-bold">I have recently completed General Assembly’s Software Engineering Immersive</span>, a 500+ hour bootcamp where I have built experience with both frontend and backend technologies. Learning how to build apps is the most amazing thing that I have ever done. 
                            </p>
                            <p className="text-gray-800 pb-4">
                                Through my customer service experience, <span className="text-md font-bold">I bring strong attention to detail and critical thinking with a user-centric approach to problem-solving</span>. Working in a tech company creating meaningful products is always my passion and fulfillment. 
                            </p>
                            <p className="text-gray-800 pb-4">  
                                When I’m not coding, you’ll catch me in the kitchen experimenting with recipes. 
                                I’m also a travel enthusiast, always seeking new adventures, and I love expressing myself through painting and taking photos.
                            </p>
                        </div>
                    </div>
                    <div className="my-12 md:my-[6rem]">
                        <button 
                        className="bg-blue-100 text-black py-2 px-4 rounded focus:outline-none animate-bounce"
                        onClick={handleScrollToSection}
                        >
                        My Projects ▽
                        </button>
                    </div>
            </div>
        </div>
    );
}