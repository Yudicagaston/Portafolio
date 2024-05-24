import { MdEmail } from "react-icons/md";
const AboutMe = () => {
    return (
        <section id='about'>
            <div className="mt-5 lg:mt-8 ">
                <div className="">

                    <h1 className="text-3xl lg:text-5xl font-bold text-center bg-gray-900  p-2">ABOUT ME</h1>
                    <p className="text-xl  text-center mx-10 lg:mx-36 mt-2">
                        Hello! 👋👋 I'm Gastón Yudica, a technology enthusiast aged 21. My specialty is Full Stack development, which means I feel comfortable working on all layers of an application, from front-end to back-end.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center ">
                    <div className="lg:w-1/2 text-center mt-2">
                        <h2 className="text-2xl lg:text-3xl font-bold bg-gray-900 rounded-lg md:rounded-none px-4 p-1">PERSONAL INFORMATION</h2>
                        <ul className="text-xl  mt-1 flex flex-col items-center">
                            <li className="flex items-center mb-2"><strong><img src="/img/fecha.png" alt="Logo" className="h-12 mx-2" /></strong> 26/10/2002</li>
                            <li className="flex items-center mb-2"><strong><img src="/img/phone.png" alt="Logo" className="h-12 mx-2" /></strong>(+54) 2614603057</li>
                            <li className="flex items-center mb-2"><strong><MdEmail className="text-5xl mx-2" /></strong> gastonyudicaz@gmail.com</li>
                            <li className="flex items-center mb-2"><strong><img src="/img/Location.png" alt="Logo" className="h-12 mx-2" /></strong> Maipú, Mendoza, Argentina</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 text-center  mt-2">
                        <h2 className="text-2xl lg:text-3xl font-bold bg-gray-900 rounded-lg md:rounded-none px-4 p-1">HOBBIES</h2>
                        <ul className="text-xl mt-1 flex flex-col items-center">
                            <li className="flex items-center mb-2"> <img src="/img/guante.png" alt="Logo" className="h-12 mx-2" />Boxing <img src="/img/guante.png" alt="svg" className="h-12 mx-2" /></li>
                            <li className="flex items-center mb-2"><img src="/img/libro.png" alt="Logo" className="h-12 mx-2" />Books<img src="/img/libro.png" alt="Logo" className="h-12 mx-2" /></li>
                            <li className="flex items-center mb-2"><img src="/img/compu.png" alt="Logo" className="h-12 mx-2" />Computer<img src="/img/compu.png" alt="Logo" className="h-12 mx-2" /></li>
                            <li className="flex items-center mb-2"><img src="/img/videogame.webp" alt="Logo" className="h-12 mx-2" />Video games<img src="/img/videogame.webp" alt="Logo" className="h-12 mx-2" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutMe