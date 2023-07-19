const NewMovie=({onClick})=>{
    return(
        <>
            <div className="col row7"  onClick={onClick}>
                <div className="col row7_text1">
                    <span>New Movie</span>
                </div>
                <div className="col row7_img">
                    <img className="i" src="Frame 96.svg" alt="++"/>
                </div>
            </div>
        </>
    )
}
export default NewMovie;
