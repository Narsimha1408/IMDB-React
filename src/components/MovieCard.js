import { Link } from "react-router-dom";
import "./movie-card.css"
import React from 'react';
// import MovieList from "./MovieList"
const MovieCard=({movie, updatedWatchList})=>{


    const OnaddingWatchList=(e)=>{
        const newMovieId=e.target.dataset.id
        updatedWatchList((previousList)=>{
            return [...previousList,newMovieId]
        })

    }


    return (
        <div className="movie-card">
            <div>
                <Link to={`./movie-detail/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title}`}/>
                <h4>{movie.title}</h4>
                </Link>
                <button data-id={movie.id} onClick={OnaddingWatchList}>Add</button>
            </div>

        </div>
    )
}

export default MovieCard