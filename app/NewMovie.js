const NewMovie=({onClick})=>{
    return(
        <div className="col row7"  onClick={onClick}>
            <div className="col row7_box1">
                 <span className="row7_text1">New Movie</span>
            </div>
            <div className="col row7_img">
                <img className="aadimg" src="Frame 96.svg" alt="++"/>
            </div>
        </div>
    );
};
export default NewMovie;
