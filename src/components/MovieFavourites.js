import React, { useEffect, useState } from "react";
const MovieFavourites=()=>{
    let genreids = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Sci-Fi",
        10770: "TV",
        53: "Thriller",
        10752: "War",
        37: "Western",
    };
    
    const [favouriteMoviesList,setFavouriteMovies]=useState([])
    const [filteredFavourites,setFilteredFavourites]=useState([])
    const [genres,setGenres]=useState([])
    const [selectedGenreId,setSelectedGenreId]=useState("")

    useEffect(()=>{
        const favouriteMoviesData=JSON.parse(localStorage.getItem("watchlist")) || [];
        const genresData=favouriteMoviesData.map((data)=>{
            return data.genre_ids[0]
        })
        // here getting the unique geners from the array using the set and converting
        // back to the array and setting the state 
        setGenres(Array.from(new Set(genresData)))
        //console.log(Array.from(new Set(genresData)))
        setFavouriteMovies(favouriteMoviesData)
    },[])

    const handleGenreSelection=(e)=>{
        const id=e.target.dataset.id
        setSelectedGenreId(id)
    }

    //only when genreSelection or favMovieList changes, then only this hook will run
    //filer was done to copied list(setFilteredFavourites) using original favouriteMoviesList in order to prevent data loss
    useEffect(()=>{
        setFilteredFavourites(()=>{
            return favouriteMoviesList.filter((movie)=>!selectedGenreId || movie.genre_ids[0] == selectedGenreId)
        })
    }, [selectedGenreId, favouriteMoviesList])

    //movie search
    const handleMovieSearch=(e)=>{
        const searchedMovieVal=e.target.value
        setFilteredFavourites(()=>{
            return favouriteMoviesList.filter((movie)=> movie.title.toLowerCase().includes(searchedMovieVal.toLowerCase()))
        })

    }
    //sorting wrt popularity
    const handlePopularitySorting=(e)=>{
        const sortingType=e.target.dataset.type
        setFilteredFavourites(()=>{
            if(!sortingType){
                return favouriteMoviesList
            }
            return [...favouriteMoviesList].sort((movie1,movie2)=>{
                //checking if we clicked on ASC or DES 
                return sortingType == "ASC" ? movie1.popularity - movie2.popularity : movie2.popularity - movie1.popularity
            }
          )
        })
    }

    //deleting the movie and setting the local storage
    const handleMovieDeletion = (movieId) => (e) => {
        setFavouriteMovies((prevFav)=>{
            const movieIdx=prevFav.findIndex(fav => fav.id == movieId);
            const finalFav=[...favouriteMoviesList]
            finalFav.splice(movieIdx,1);
            localStorage.setItem("watchlist",JSON.stringify(finalFav))
            return finalFav
        })
    }


    return(
        <div>
            <h1>Favourite Movies</h1>
            <div className="favourite-wrapper">
                <div className="section-left">
                    <div className="genre-wrapper">
                        {/* checking if the any genre is selected else all genres will be highlighted */}
                        <div data-id="" className={`genre ${selectedGenreId == "" ? "selected" : ""}`} onClick={handleGenreSelection}>All genres</div>
                        {
                            genres.map(genreId=>(
                                <div data-id={genreId} className={`genre ${selectedGenreId == genreId ? "selected" : ""}`} onClick={handleGenreSelection}>{genreids[genreId]}</div>
                            ))
                        }

                    </div>

                </div>
                <div className="section-right">
                    <input type="text" placeholder="search Movie..." onChange={handleMovieSearch}/>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>
                                    <span onClick={handlePopularitySorting} data-type="">Popularity</span> 
                                    <span onClick={handlePopularitySorting} data-type="ASC">^</span> 
                                    <span onClick={handlePopularitySorting} data-type="DEC">v</span>
                                </th>
                                <th>Rating</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredFavourites.map((favouriteMovie)=>
                                <tr>
                                    <td><img src={`https://image.tmdb.org/t/p/w200${favouriteMovie.poster_path}`} style={{"width":"70px"}}/></td>
                                    <td>{favouriteMovie.title}</td>
                                    <td>{genreids[favouriteMovie.genre_ids[0]]}</td>
                                    <td>{favouriteMovie.popularity}</td>
                                    <td>{favouriteMovie.vote_average}</td>
                                    <td><button onClick={handleMovieDeletion(favouriteMovie.id)}>Delete</button></td>
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