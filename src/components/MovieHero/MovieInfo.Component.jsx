import React, { useState } from 'react'

const MovieInfo = ({ movie }) => {

    const [isOpen, setIsOpen] = useState(false);// pop up ke liye, for buying and price
    const [price, setPrice] = useState(0);

    const genres = movie.genres?.map(({ name }) => name).join(", ") // question mark operator will firstly check if genres variable actually exists, and if it does, then only it will act 

    const rentMovie = () => {
        setIsOpen(true);
        setPrice(149)
    }

    const buyMovie = () => {
        setIsOpen(true);
        setPrice(599)
    }

    return (// setIsopen se isOpen variable ko set krte hn fir isOpen me dalte hn , aur ye sab payment model ke props hn  
        <>
            {/* <PaymentModel setIsOpen= {setIsOpen} isOpen = {isOpen} price={price}/>  */}
            <div className="flex flex-col gap-8">
                <h1 className='text-white text-5xl font-bold'>
                    {movie.original_title}
                    </h1>
                <div className="flex flex-col gap-2 text-white">
                    <h4>4k rating</h4>
                    <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
                    <h4>
                        {movie.runtime} min | {genres}
                    </h4>
                </div>
                <div className="flex items-center gap-3 w-full">
                <button className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg'>
                    Rent ₹149
                </button>
                <button className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
                    Buy ₹599
                </button>
            </div>
            </div>
        </>
    )
}

export default MovieInfo;