import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./movie-detail.css"
const MovieDetail=()=>{
    const params=useParams()
    //getting the query parameter from the url
    const [movieDetail, setMovieDetail]=useState({})
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=8354900fa8128c3718d78af6c4422d08`)
        .then((res)=>res.json())
        .then((data)=>setMovieDetail(data))

    },[])
    


    return ( 
        <div className="movie-detail">
            <h1>{movieDetail.original_title}</h1>
            <img src={`https://image.tmdb.org/t/p/w200${movieDetail.poster_path}`} alt={`${movieDetail.title}`}/>
            <p className='movie-description'>{movieDetail.overview}</p>
        </div>
    )
}

export default MovieDetail;