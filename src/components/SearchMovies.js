import React from 'react';
import { ALT_API, imageURL } from '../utilities/api';
import { useState } from "react";

 function SearchMovies() {

    const [query, setQuery] = useState('');
    const [movies, SetMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log('submitting');
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${ALT_API}&language=en-US&query=${query}&page=1&include_adult=false`;

    try{
        const res = await fetch(url);
        const data = await res.json();
        SetMovies(data.results);
    }catch(err){
        console.log(err);
    }
    }
  return (

            <>
            <form onSubmit={searchMovies}>
            <label htmlFor='query'>Movie Name</label>
            <input type="text" name="query" placeholder='Search For movies'
                   value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
            {movies.filter(movie => movie.poster_path).map(movie => (
             <div>
                <div>
                    <img  className="movie-card" key={movie.id}src={`${imageURL}${movie.poster_path}`}/>
                </div>
                <div>
                <h3>{movie.title}</h3>
                <p><small>{movie.release_date}</small> </p>
                </div>
                </div>
            ))}
             
       
        </>
  );

};

export default SearchMovies

