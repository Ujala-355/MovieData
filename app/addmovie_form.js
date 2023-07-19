const AddmovieForm=()=>{
    return(
        <>
        <div className="addmovie_Container">
            <div className="addmovierow1">
                <p className="addText1">Fill this form to add Movie</p>
            </div>
            <div className="movie_input">
                <div className="inputText">
                    <p className="Text1">Name of Movie</p>
                </div>
                    <input className="input1" type="text" placeholder="Enter a movie name" required></input>
           </div>
           <div className="movie_input">
                <div className="inputText">
                    <p className="Text1">Year of Release</p>
                </div>
                    <input className="input1" type="text" placeholder="Enter a movie name" required></input>
                    <img className="Select_icon" src="Polygon 3.svg"/>
           </div>
        </div>
        </>
    )
}
export default AddmovieForm; 
