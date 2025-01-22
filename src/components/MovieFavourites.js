import React, { useEffect, useState } from "react";
const MovieFavourites=()=>{
    const [favouriteMoviesList,setFavouriteMovies]=useState([])
    useEffect(()=>{
        const favouriteMoviesData=localStorage.getItem("watchlist") || [];
        setFavouriteMovies(JSON.parse(favouriteMoviesData))
    },[])
    
    
    return(
        <div>
            <h1>Favourite Movies</h1>
            <div className="favourite-wrapper">
                <div className="section-left"></div>
                <div className="section-right">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Popularity</th>
                                <th>Rating</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {favouriteMoviesList.map((favouriteMovie)=>
                                <tr>
                                    <td><img src={`https://image.tmdb.org/t/p/w200${favouriteMovie.poster_path}`} style={{"width":"70px"}}/></td>
                                    <td>{favouriteMovie.title}</td>
                                    <td>{favouriteMovie.genre_ids}</td>
                                    <td>{favouriteMovie.popularity}</td>
                                    <td>{favouriteMovie.vote_average}</td>
                                    <td><button>Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    )

}

export default MovieFavourites;