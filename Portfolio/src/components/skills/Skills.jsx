import { useState } from "react";
import options from "./skillsOption";
import SkillsCard from "./SkillsCard";

import SkillsData from "./SkillsData";
const Skills = () => {
    // Divide el arreglo en dos partes
    const middleIndex = Math.ceil(options.length / 2);
    const firstHalf = options.slice(0, middleIndex);
    const secondHalf = options.slice(middleIndex);
    const [selectSkill, setSelectSkill] = useState(options[0])
    const handleSelect = (data) => {
        setSelectSkill(data)
    }
    return (
        <section id="skills" >
            <div >
                <h2 className="text-3xl lg:text-5xl font-bold text-center bg-gray-900 p-2">SKILLS</h2>
                <div className="flex flex-wrap mt-9 justify-center">

                    <div className="lg:w-1/2 ">
                        <div className="text-center max-w-2xl min-w-80 mx-3 gap-5 flex flex-wrap justify-center items-center">

                            <div className="w-full flex justify-center gap-5 mt-5">
                                {firstHalf.map((item) => (
                                    <SkillsCard
                                        key={item.title}
                                        title={item.title}
                                        onClick={() => { handleSelect(item) }}
                                        isActive={selectSkill.title === item.title}
                                    />
                                ))}
                            </div>

                            <div className="w-full flex justify-center gap-5">
                                {secondHalf.map((item) => (
                                    <SkillsCard
                                        key={item.title}
                                        title={item.title}
                                        onClick={() => { handleSelect(item) }}
                                        isActive={selectSkill.title === item.title}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 items-center">
                        <SkillsData title={selectSkill.title} skills={selectSkill.stats} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;