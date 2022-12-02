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

    return (
    <MovieContext.Provider value={{movie, setMovie}}>
        {children}
        </MovieContext.Provider>
  );
};

export default MovieProvider