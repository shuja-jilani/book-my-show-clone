import React, { useState, createContext } from "react"

export const MovieContext = createContext(); 

//context means encapsulation , we are actually encapsulating the entire data for
// the movie into the variable , that is the movieContext variable, and we are going to export it

const MovieProvider = ({children}) => {
    
    const [movie, setMovie] = useState({
        id: 0,
        original_title: ""
        , overview:"",
        backdrop_path: "",
        poster_path:"",
        
    });

    const [isOpen, setIsOpen] = useState(false);// pop up ke liye, for buying and price
    const [price, setPrice] = useState(0);

    const rentMovie = () => {
        setIsOpen(true);
        setPrice(149)
    }

    const buyMovie = () => {
        setIsOpen(true);
        setPrice(599)
    }


    return (
    <MovieContext.Provider value={{movie, setMovie, isOpen, setIsOpen, price, setPrice, rentMovie, buyMovie}}>
        {children}
        </MovieContext.Provider>
  );
};

export default MovieProvider