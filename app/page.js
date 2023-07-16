"use client"
import Header from "./header";
import Footer from "./footer";
import Movie_row from './movie_row'; 

import React, {useState, useEffect} from 'react';
const Page=()=>{
    const [data, setData]=useState([]);
    const [voteingCount, setVoteingCount]=useState(0);
    const handleLike=()=>{
            setVoteingCount(voteingCount+1);
        };
        const handleDislike=()=>{
            setVoteingCount(voteingCount-1);
        };
        
    useEffect(() => {
    async function fetchData(){
        try{
            const response=await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357');
            const data=await response.json();
            const topFiveMovies=data.results.slice(5, 15);
            setData(topFiveMovies);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchData();
    },[]);
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
                            handleLike={()=>}
                            handleDislike
                            
                        />
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            <Footer />
        </div>
    );
};

export default Page;

