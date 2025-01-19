import React from 'react';
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Heading from "./Heading.js"
import MovieList from "./MovieList.js"
import MovieDetail from "./MovieDetail.js"
import AddMovie from "./AddMovie.js"
import Headers from "./Headers"

// const router = createBrowserRouter([
//     {
//         path:"/",
//         element:(
//             <>
//                 <Headers/>
//                 <MovieList/>
//             </>
//         )
//     },
//     {
//         path:"/movie-detail/:movieId",
//         element:(
//             <>
//                  <Headers/>
//                  <MovieDetail/>
//             </>
//         )
//     },
//     {
//         path:"/add-movie",
//         element:(
//             <>
//                  <Headers/>
//                  <AddMovie/>
//             </>
//         )
//     }
// ])


// const MovieApp=()=>{
//     return (
//         <RouterProvider router={router}/>
    
//     )
// }

const MovieApp=()=>{
    return (
        <>
        
        <BrowserRouter>
            <Headers/>
            <Routes>
                <Route path="/" element={<MovieList/>}/>
                <Route path="/movie-detail/:movieId" element={<MovieDetail/>}/>
                <Route path="/movie-detail/:movieId" element={<AddMovie/>}/>
                
            </Routes>
        
        </BrowserRouter>
        
        </>
    )
}

export default MovieApp