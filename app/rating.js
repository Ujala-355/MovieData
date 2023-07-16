const Rating=({handleLike,handleDislike,voteCount})=>{
        return(
            <div>
                <img src="Icon - Like@2x.png" alt="like" className="like_icon" onClick={handleLike}/>
                <span className="rating">{{voteCount}}</span>
                <img src="Icon - Like.png" alt="dislike" className="dislike_icon" onClick={handleDislike}/> 
            </div>
        );
};
export default Rating;
