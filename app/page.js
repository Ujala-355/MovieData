"use client"
import Header from "./header";
import Movie_row from './movie_row';
import Movie_text from "./movie_text";
import NewMovie from "./NewMovie";
import AddmovieForm from "./addmovie_form";
import Footer from "./footer";

import React, { useState, useEffect } from 'react';
const Page = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm]=useState(false);
  const [voteCount, setVoteCount] = useState({});
  
  const handleButtonClick=()=>{
    setShowForm(true);
  }
  const handleLike=(id)=>{
    const Votes={...voteCount}
    if (Votes[id]===undefined){
        Votes[id]=1
     }
     else {
        Votes[id]+=1
     }
      setVoteCount(Votes);
   };
  const handleDislike=(id)=>{
      const Votes={...voteCount}
      if (Votes[id]===undefined){
        Votes[id]=-1
     }
     else {
        Votes[id]-=1
     }
      setVoteCount(Votes);
  };
  const sortData=data.sort((a,b) => {
    const vote1=voteCount[a.id]||0;
    const vote2=voteCount[b.id]||0;
    return vote2 - vote1 ;
  });
  useEffect(() => {
    async function fetchData(){
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357');
        const data = await response.json();
        const topFiveMovies = data.results.slice(0, 2);
        setData(topFiveMovies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleDeleteMovie = (movieId) => {
    setData((prevData) => prevData.filter((movie) => movie.id !== movieId));
  };

  
  return (
    <div>
      <Header />
      {data.length > 0 ? (
        data.map((movie) => (
          <div key={movie.id}>
            <Movie_row
              movie={movie}
              onDelete={() => handleDeleteMovie(movie.id)}
              handleLike={() => handleLike(movie.id)}
              handleDislike={() => handleDislike(movie.id)}
              voteCount={voteCount[movie.id]}
            />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <Movie_text/>
      {showForm &&< AddmovieForm/>}
      <NewMovie onClick={handleButtonClick}/>
      <Footer />
    </div>
  );
};
export default Page;

