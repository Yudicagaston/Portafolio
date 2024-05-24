
const SkillsCard = ({ title, isActive, onClick }) => {
    const classN = `w-1/2 lg:w-1/3 border-blue-700 rounded-custom border-2 p-8 hover:bg-gray-900 active:bg-black hover:text-gray-200 ${isActive ? "bg-black text-gray-200" : ""
        }`
    return (
        <div onClick={() => onClick()} className={classN}>
            <span className="">{title}</span>
        </div>
    )
}
export default SkillsCard