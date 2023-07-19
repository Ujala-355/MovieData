const Rating=({handleLike,handleDislike,voteCount})=>{
        return(
            <>
                <img src="Icon - Like@2x.png" alt="like" className="like_icon" onClick={handleLike}/> 
                <div className="rating">
                    {voteCount}
                </div> 
                <img src="Icon - Like.png" alt="dislike" className="dislike_icon" onClick={handleDislike}/> 
            </>
        );
};
export default Rating;

