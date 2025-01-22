import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
const Headers=()=>{
    return (
        <div className="headers">
            <Link to="/"> Movie List </Link>
            {/* <Link to="/movie-detail"> Movie Detail </Link> */}
            <Link to="/add-movie"> Add Movie </Link>
            <Link to="/favourites">Favourite movies</Link>
            
            
        </div>
    )
}
export default Headers;