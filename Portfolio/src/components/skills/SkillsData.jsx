import React from "react"
const SkillsData = ({ title, skills }) => {
    return (
        <div className="border-blue-700 rounded-lg border-2 p-2 max-w-2xl min-w-80 min-h-80 mt-10 md:mt-8 lg:mt-0 mx-5  ">
            <h3 className=" font-bold text-xl ml-4">{title}</h3>
            <hr className="border-b border-blue-700" />
            <div className=" max-w-2xl lg:ml-4">
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_ ${index}`}>
                        <div className="flex  justify-between p-2">
                            <p>{item.skill}</p>
                            <p className=" text-cyan-500 ">{item.percentage}%</p>
                        </div>
                        <div className=" bg-blue-950 rounded">
                            <div className="bg-cyan-500 rounded text-xs leading-none py-1 text-center text-white transition-all" style={{ width: `${item.percentage}%` }}></div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
export default SkillsData