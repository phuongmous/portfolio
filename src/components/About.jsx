import aboutMeImage from '../img/about-me.png';
import aboutMeImage1 from '../img/about-me-1.png';
export default function () {
    return (
        <div id="aboutSection" className="h-screen flex items-center justify-center  bg-blue-100">
            <div className="rounded py-6">
                <div className="text-2xl font-bold my-6 text-center animate-bounce">ABOUT ME</div>
                <div>
                {/* <img src={aboutMeImage1} alt="About Me" style={{ width: '75%', display: 'block', margin: 'auto'}}></img> */}
                </div>
                <div className="mb-4 bg-cover bg-center md:bg-contain bg-no-repeat"  style={{ backgroundImage: `url(${aboutMeImage})` }}>
                    <div className="text-md py-[9rem] px-5 md:mx-5 md:px-[10rem] relative z-10">
                    <p className="text-gray-800 pb-4">
                        Hi, my name is Phuong. I'm a junior software engineer who is driven by the belief that technology can bring positive change to our life.
                    </p>
                    <p className="text-gray-800 pb-4">
                        I have recently completed General Assembly’s Software Engineering Immersive, a 500+ hour bootcamp where I have built experience with both frontend and backend technologies. Learning how to build apps is the most amazing thing that I have ever done. 
                    </p>
                    <p className="text-gray-800 pb-4">
                        Through my customer service experience, I bring strong attention to detail and critical thinking with a user-centric approach to problem-solving. Working in a tech company creating meaningful products is always my passion and fulfillment. 
                    </p>
                    <p className="text-gray-800 pb-4">  
                        When I’m not coding, you’ll catch me in the kitchen experimenting with recipes. 
                        I’m also a travel enthusiast, always seeking new adventures, and I love expressing myself through painting and taking photos.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}