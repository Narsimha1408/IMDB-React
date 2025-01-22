import MovieCard from "./MovieCard.js";
import Heading from "./Heading.js"
import { use, useEffect, useState, useMemo } from "react";
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
    const [moviesInWatchList, updateWatchList]=useState(()=>{
        const favouriteMoviesData=localStorage.getItem("watchlist") || [];
        return JSON.parse(favouriteMoviesData)
    })

    //momoizing the computation value to avoid re rendering except for new movies renders on the page
    const popularMovieCount=useMemo(()=>movie.filter((eachMovie)=>{
        // console.log("computed")
        return eachMovie.popularity>1000
    }),[movie])

    //console.log(movie)
    useEffect(()=>{
        fetchMovies(1)
    },[])
    
    
    return (
        <>
        <Heading></Heading>
        <h3>WatchList : {moviesInWatchList.length}</h3>
        <p>Popular Movies ({">"}1000) : {popularMovieCount.length}</p>
        <div className="movie-list">
            {movie.map((eachMovie)=>
            (
                    <MovieCard movie={eachMovie} updatedWatchList={updateWatchList} moviesInWatchList={moviesInWatchList}></MovieCard>
            )
            )} 
        </div>
        <PageNation onPageChange={fetchMovies}></PageNation>
        </>

    )
}

export default MovieList