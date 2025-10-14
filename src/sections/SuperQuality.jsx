import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
    return (
        <section id="about-us" className="flex justify-between max-lg:flex-col gap-5 w-full max-container">
            <div className="flex flex-1 flex-col justify-start lg:max-w-lg">
                <h2 className="font-bold text-4xl font-palanquin capitalize">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
                <p className="mt-6 info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                <p className=" mt-6 mb-12 info-text">Our dedication to detail and excellence ensures your satisfaction</p>
                <div>
                    <Button label={'View details'} className="mt-7 " />
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <img src={shoe8} alt="shoe8" className="object-contain" width={570} height={522} />
            </div>
        </section>
    )
}

export default SuperQuality
