const CurriculumCard = ({ detail }) => {
    return (
        <div className="p-4 items-center justify-center content-center min-h-96 lg:min-h-72 md:min-h-72 max-w-sm mx-auto border border-blue-500 rounded-xl overflow-hidden md:max-w-3xl lg:max-w-4xl">

            <div className="md:flex ">
                <div className="md:flex-shrink-0  p-4">
                    <img src={detail.img} alt={detail.title} className="h-48 w-full object-cover md:w-48" />
                </div>
                <div className=" ">
                    <h2 className=" text-xl lg:text-2xl font-bold">{detail.title}</h2>

                    <h3 className=" text-xs lg:text-sm bg-blue-600 rounded text-center p-2 inline-block ">{detail.date}</h3>

                    <ul>{detail.data.map((item) => (<li key={item} className=" text-sm lg:text-base">{item}</li>))}</ul>
                </div>
            </div>
        </div>
    )
}
export default CurriculumCard
