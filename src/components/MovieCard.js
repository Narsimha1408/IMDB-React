import { Link } from "react-router-dom";
import "./movie-card.css"
import React from 'react';
// import MovieList from "./MovieList"
const MovieCard=({movie, updatedWatchList, moviesInWatchList})=>{

    const isMovieAdded=moviesInWatchList.find((watchListmovie) => watchListmovie == movie.id)
    const OnaddingWatchList=(e)=>{
        const newMovieId=e.target.dataset.id
        if(moviesInWatchList.includes(newMovieId)){
            let newWatchList=moviesInWatchList.filter((movieId)=> movieId != newMovieId)
            updatedWatchList(newWatchList)
        }
        else{
            updatedWatchList((previousList)=>{
                return [...previousList,newMovieId]
            })
        }

    }


    return (
        <div className="movie-card">
            <div>
                <Link to={`./movie-detail/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title}`}/>
                <h4>{movie.title}</h4>
                </Link>
                <button data-id={movie.id} onClick={OnaddingWatchList}>
                    {isMovieAdded? "Remove from watch list" : "Add to watch list"}
                </button>
            </div>

        </div>
    )
}

export default MovieCard