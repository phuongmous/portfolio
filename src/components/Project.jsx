export default function Project({ image, githubLink, deployedLink, name, description, techStacks }) {
    return (
      <div className="p-4 bg-blue-100 rounded-md shadow-md">
            <div className="flex">
                <div className="basis-1/2 flex-col m-4">
                    <img src={image} alt={name} className="w-[28rem] h-[28rem] object-center rounded-md" />
                    <div className="flex space-x-4 justify-center mt-4">
                    {deployedLink && (
                        <a href={deployedLink} className="bg-white px-3 m-3 text-xl rounded-md hover:bg-black hover:text-white transition-transform duration-300 ease-in-out hover:scale-95">
                        Live Demo
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink} className="bg-black text-white px-3 m-3 text-xl rounded-md hover:bg-white hover:text-black transition-transform duration-300 ease-in-out hover:scale-95">
                        Source Code
                        </a>
                    )}
                    </div>
                </div>
                <div className="basis-1/2 flex-col">
                <h3 className="text-3xl font-bold m-4">{name}</h3>
                <p className="text-justify my-8 mx-2">{description}</p>
                <div className="flex flex-wrap space-x-2 my-3 items-center justify-center w-fit px-2 py-1 rounded-lg bg-gray-100 bg-opacity-70 shadow-md">
                {techStacks.map((logoPath, index) => (
                    <img key={index} src={logoPath} alt={`Tech Stack ${index + 1}`} className="h-10 w-15 m-1 p-1 rounded" />
                ))}
                </div>
                </div>
            </div>
      </div>
    );
  }