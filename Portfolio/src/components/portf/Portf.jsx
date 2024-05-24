import { port } from "../curriculum/Data"
import PortCard from "./PortCard"
const Portf = () => {
    return (
        <div>

            <section id="portfolio">


                <div>
                    <h1 className="text-3xl lg:text-5xl font-bold text-center mt-9 bg-gray-900  p-2">PORTFOLIO</h1>
                </div>
            </section>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center">
                {port.map((item) => (
                    <PortCard key={item.title} detail={item} />
                ))}

            </div>

        </div>
    )
}
export default Portf