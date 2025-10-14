import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffer = () => {
    return (
        <section className="flex max-lg:flex-col-reverse items-center gap-10 max-container">
            <div className="flex-1">
                <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
            </div>
            <div className="flex flex-1 flex-col justify-start lg:max-w-lg">
                <h2 className="font-bold text-4xl font-palanquin capitalize"><span className="text-coral-red">Special</span> offer</h2>
                <p className="mt-6 info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                <p className=" mt-6 mb-12 info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
                <div>
                    <div className="flex flex-wrap gap-4">
                        <Button label={'Shop now'} iconURL={arrowRight} className="mt-7 " />
                        <Button label={'Learn more'} className="mt-7" borderColor='border-slate-gray' textColor='text-slate-gray' backgroundColor='bg-white' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer