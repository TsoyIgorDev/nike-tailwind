import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full sm:w-full">
            <img src={imgURL} alt={name} className="sm:w-[280px] sm:h-[280px] max-sm:w-[450px] max-sm:h-[450px] mx-auto" />
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24} />
                <p className="font-montserrat text-xl text-slate-gray leading-normal">(4.5)</p>
            </div>
            <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal">{name}</h3>
            <p className="mt-2 font-montserrat font-semibold text-coral-red text-2xl leading-normal">{price}</p>
        </div>

    )
}

export default PopularProductCard