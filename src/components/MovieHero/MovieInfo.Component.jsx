import React, { useContext } from 'react'
import PaymentModel from '../PaymentModel/Payment.Component';
import {MovieContext} from '../../context/Movie.context';

const MovieInfo = ({ movie }) => {

    const {price, setIsOpen, isOpen , rentMovie, buyMovie} = useContext(MovieContext)
    const genres = movie.genres?.map(({ name }) => name).join(", ") // question mark operator will firstly check if genres variable actually exists, and if it does, then only it will act 



    return (// setIsopen se isOpen variable ko set krte hn fir isOpen me dalte hn , aur ye sab payment model ke props hn, which tells us if the pop up is open or not 
        <>
            <PaymentModel setIsOpen= {setIsOpen} isOpen = {isOpen} price={price}/> 
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
                <button onClick={rentMovie} className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg'>
                    Rent ₹149
                </button>
                <button onClick={buyMovie} className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
                    Buy ₹599
                </button>
            </div>
            </div>
        </>
    )
}

export default MovieInfo;