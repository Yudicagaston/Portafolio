
const PortCard = ({ detail }) => {
    return (
        <div className=" p-4 mx-10 rounded-3xl border-blue-500 border mt-10" >

            <div className=" md:w-80  lg:w-96" >
                <div className="md:w-80 md:h-80 lg:w-96 lg:h-96 ">
                    <a href={detail.link} target="_blank" >
                        <img src={detail.img} alt={detail.title} className="w-full h-full " />
                    </a>
                </div>
                <div >
                    <h2 className=" m-2 text-xl lg:text-2xl font-bold">{detail.title}</h2>
                    <p>{detail.data}</p>
                    <h3 className="font-bold ">DEVTOOLS USED</h3>
                    <ul>{detail.devtools.map((item) => (<li key={item} className=" text-sm lg:text-base">{item}</li>))}</ul>
                </div>
            </div>
        </div>
    )
}
export default PortCard