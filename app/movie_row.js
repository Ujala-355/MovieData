"use client"
import DeleteButton from './delete';
import Rating from "./rating"

function Movie_row({ movie, onDelete, handleLike, handleDislike, voteCount }) {
  return (
    <>
      <div className="row4">
        <div className="col row4_col1">
          <img className="poster-path" src={movie.poster_path ? `http://image.tmdb.org/t/p/w500${movie.poster_path}` : ''} />
        </div>
        <div className="col row4_col2">
          <p className="Text col2text1">{movie.title}</p>
          <span className="Text col2text2">{movie.releasedate}</span>
          <h3>Description</h3>
          <div className="col2text">
            <p className="col2text3">{movie.overview}</p>
          </div>
           <>
            <DeleteButton onDelete={onDelete} />
            <Rating handleLike={handleLike} handleDislike={handleDislike} voteCount={voteCount} />
          </>
        </div>
      </div>
      <div className="line1"></div>
    </>
  )
}

export default Movie_row;



