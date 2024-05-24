import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Card = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center  mx-4 lg:mx-10 ">
            <div className="lg:w-1/2 mx-4 lg:mx-10 mb-6 lg:mb-0 ">
                <section id="card">

                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white mt-0 lg:mt-0">
                        "Great things are not done by impulse, but by a series of small things brought together." - Vincent van Gogh
                    </h2>
                </section>
                <p className="text-lg lg:text-xl font-thin">Full Stack Developer, Evolving into polished and visually captivating web solutions.</p>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:mt-0">
                <div >
                    <img className=" w-96 rounded-3xl mt-0" src="/img/gaston.png" alt="Gastón Yudica" />
                </div>

                <div className="flex space-x-4 justify-center mt-3">
                    <a href='https://www.linkedin.com/in/gast%C3%B3n-yudica-408289292/' target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-5xl lg:text-6xl text-white hover:text-blue-700" />
                    </a>
                    <a href='https://github.com/Yudicagaston' target="_blank" rel="noopener noreferrer">
                        <SiGithub className="text-5xl lg:text-6xl text-white hover:text-green-900" />
                    </a>
                    <a href={`mailto:gastonyudicaz@gmail.com`}>
                        <MdEmail className="text-5xl lg:text-6xl text-white hover:text-red-700" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;