"use client"
import React, { useState, useEffect } from 'react';
const Movie_row = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357');
        const data = await response.json();
        const topFiveMovies = data.results.slice(0,2);
        setData(topFiveMovies);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div >
      {data.length > 0 ? (
        data.map((movie) => (
          <div key={movie.id} className="row4">
            <div className="col row4_col1">
                <img className="poster-path" src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            </div>
            <div className="col row4_col2">
                    <p className="Text col2text1">{movie.title}</p>
                    <span className="Text col2text2">{movie.release_date}</span>
                    <h3>Description</h3>
                 <div className="col2text">
                    <p className="col2text3">{movie.overview}</p>
                </div>
            </div>
          </div>
          
        ))
      ) : ( 
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Movie_row;
