const Card  = (data) => {
    console.log(data)
    return (

        <div className="bg-withe cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/50rounded-lg text-black text-xs m-2 px-3 py-05">
                {""}
                Platos de comida{""}
                </span>
                <img src={data.data.photo} alt="" />
                <div className="absolute top-0 right-0 flex justify-center bg-white w-6 h-6 rounded-full m-2 p-1"> +               
                </div>
            </figure>
            <p className="flex justify-center">
                <span className="text-sm font-light">{data.data.name}</span>
                <span className="text-lg font-medium">{data.data.price}</span>
            </p>
        </div>
    );
};

export default Card;