import MovieCard from "./MovieCard.js";
import Heading from "./Heading.js"
import { use, useEffect, useState } from "react";
import "./movie-list.css"
import React from 'react';
import PageNation from "./PageNation.js"


const MovieList = () =>{
    
    const fetchMovies=(pageNumber)=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8354900fa8128c3718d78af6c4422d08&page=${pageNumber}`)
                .then(res=>res.json())
                .then(data=>setMovie(data.results));
    }

    const [movie, setMovie]=useState([])
    const [moviesInWatchList, updateWatchList]=useState([])
    //console.log(movie)
    useEffect(()=>{
        fetchMovies(1)
    },[])
    
    
    return (
        <>
        <Heading></Heading>
        <h3>WatchList : {moviesInWatchList.length}</h3>
        <div className="movie-list">
            {movie.map((eachMovie)=>
            (
                    <MovieCard movie={eachMovie} updatedWatchList={updateWatchList}></MovieCard>
            )
            )} 
        </div>
        <PageNation onPageChange={fetchMovies}></PageNation>
        </>

    )
}

export default MovieList