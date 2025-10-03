const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] min-w-full rounded-[20px] px-10 py-16 shadow-3xl">
            <div className="flex justify-center items-center w-11 h-11 bg-coral-red rounded-full">
                <img src={imgURL} alt={label} width={24} height={24} />
            </div>
            <h3 className="text-3xl font-montserrat font-bold leading-normal mt-5">{label}</h3>
            <p className="text-lg font-palanquin leading-norbal break-words text-slate-gray">{subtext}</p>
        </div>
    )
}

export default ServiceCard