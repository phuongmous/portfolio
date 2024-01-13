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
import pythonLogo from '../img/python.png';
import herokuLogo from '../img/heroku.png';
import githubLogo from '../img/github.png';
export default function Skills () {
    return (
        <div className="h-screen">
            <div className="text-4xl font-bold text-center my-8 uppercase">Tech Skills</div>
            <div className="flex flex-wrap gap-8 m-[10rem] p-6 justify-center rounded-lg bg-gray-100 bg-opacity-70 shadow-md">
                <img src={javascriptLogo} alt="JavaScript Logo" className="h-[4rem] w-auto" />
                <img src={htmlLogo} alt="HTML Logo" className="h-[4rem] w-auto" />
                <img src={cssLogo} alt="CSS Logo" className="h-[4rem] w-auto" />
                <img src={mongodbLogo} alt="MongoDB Logo" className="h-[4rem] w-auto" />
                <img src={expressLogo} alt="Express Logo" className="h-[4rem] w-auto rounded-md" />
                <img src={nodejsLogo} alt="Node.js Logo" className="h-[4rem] w-auto" />
                <img src={reactLogo} alt="React Logo" className="h-[4rem] w-auto" />
                <img src={bootstrapLogo} alt="Bootstrap Logo" className="h-[4rem] w-auto" />
                <img src={tailwindLogo} alt="Tailwind Logo" className="h-[4rem] w-auto" />
                <img src={muiLogo} alt="Mui Logo" className="h-[4rem] w-auto" />
                <img src={postgresqlLogo} alt="Postgresql Logo" className="h-[4rem] w-auto" />
                <img src={pythonLogo} alt="Python Logo" className="h-[4rem] w-auto" />
                <img src={herokuLogo} alt="Python Logo" className="h-[4rem] w-auto" />
                <img src={githubLogo} alt="Python Logo" className="h-[4rem] w-auto" />
            </div>
        </div>
    );
}