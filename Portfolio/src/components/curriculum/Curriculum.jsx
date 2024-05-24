import CurriculumCard from "./CurriculumCard"
import { workExperience, education } from "./Data"
import React, { useRef } from "react";
import Slider from "react-slick";
const Curriculum = () => {
    const sliderRefEducation = useRef();
    const sliderRefExperience = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

    }
    const slideLeftEducation = () => {
        sliderRefEducation.current.slickPrev()
    }
    const slideRightEducation = () => {
        sliderRefEducation.current.slickNext()
    }
    const slideLeftExperience = () => {
        sliderRefExperience.current.slickPrev()
    }
    const slideRightExperience = () => {
        sliderRefExperience.current.slickNext()
    }
    return (
        <div >

            <section id='curriculum'>
                <h2 className="text-3xl lg:text-5xl font-bold text-center mt-9 bg-gray-900 p-2">CURRICULUM</h2>
                <div className="flex flex-col items-center ">

                    <div className=" max-w-screen-xl items-center justify-center">
                        <h2 className=" text-center text-2xl lg:text-3xl font-bold m-4 mt-8 ">EDUCATION</h2>

                        <div className="relative">
                            <div className="flex items-center justify-center w-10 h-10 absolute  z-10 lg:left-20 top-1/2 hover:opacity-65">
                                <button onClick={slideLeftEducation} >
                                    <img src="/img/prevbutton.png" alt="" className=" opacity-80" />
                                </button>
                            </div>
                            <div >
                                <button onClick={slideRightEducation} className="flex items-center justify-center w-10 h-10 absolute lg:right-20 z-10 top-1/2 hover:opacity-65">
                                    <img src="/img/nextbutton.png" alt="" className=" opacity-80" />
                                </button>
                            </div>

                            <Slider ref={sliderRefEducation} {...settings}>

                                {education.map((item) => (
                                    <CurriculumCard key={item.title} detail={item} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className=" max-w-screen-xl ">
                        <h2 className="text-center text-2xl lg:text-3xl font-bold m-4 mt-8">EXPERIENCE</h2>
                        <div className="relative" >
                            <div >
                                <button onClick={slideLeftExperience} className=" md:hidden lg:flex items-center justify-center w-10 h-10 absolute z-10 lg:left-20 top-1/2 hover:opacity-65">

                                    <img src="/img/prevbutton.png" alt="" className=" opacity-80" />
                                </button>
                            </div>
                            <div >
                                <button onClick={slideRightExperience} className="flex items-center justify-center w-10 h-10 absolute z-10 lg:right-20 top-1/2  hover:opacity-65">
                                    <img src="/img/nextbutton.png" alt="" className=" opacity-80" />
                                </button>
                            </div>
                            <Slider ref={sliderRefExperience} {...settings} >
                                {workExperience.map((item) => (
                                    <CurriculumCard key={item.title} detail={item} className=" " />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Curriculum