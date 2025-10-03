import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
    return (
        <section className="flex justify-center gap-9 flex-wrap max-container">
            {services.map((service) => (
                <ServiceCard key={service.label} {...service} />
            ))}
        </section>
    )
}

export default Services