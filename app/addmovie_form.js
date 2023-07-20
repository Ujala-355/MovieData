const AddmovieForm=()=>{
    return(
        <>
        <div className="addmovie_Container">
            <div className="addmovierow1">
                <p className="addText1">Fill this form to add Movie</p>
            </div>
            <div className="addmovierow2">
                <img className="multiply_icon" src="Frame 96.svg" alt="img"/>
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
           
           <div className="addmovierow3">
               <div className="inputText">
                    <p className="Text1">Movie Duration</p>
               </div>
               <input className="col input_Hours" type="text" placeholder="Enter a Hours" required></input>
               <p className="col Text1 hours">Hours</p>
               <input className="col input_Hours input_min" type="text" placeholder="Enter a Min" required></input>
               <p className="col Text1 hours">Min</p>
           </div>
           
           <div className="genre_box1">
               <p className="Text1">Movie Genre</p>
           </div>
           <div className="genre_box2">
               <p className="genre_text">Select all that is applicabale</p>
           </div>
           <div className="check_box">
                <label className="container">
                    <input type="checkbox" className="checkbox"/>
                    <span className="checkmark_text">Drama</span>
                </label>
                
                <label className="container">
                    <input type="checkbox" className="checkbox"/>
                    <span className="checkmark_text">Biography</span>
                </label>
                
                <label className="container">
                    <input type="checkbox" className="checkbox"/>
                    <span className="checkmark_text">Romance</span>
                </label>
                
                <label className="container">
                    <input type="checkbox" className="checkbox" />
                    <span className="checkmark_text">Comedy</span>
                </label>
                
                <label className="container">
                    <input type="checkbox" className="checkbox"/>
                    <span className="checkmark_text">Adventure</span>
                </label>
                
                <label className="container">
                    <input type="checkbox" className="checkbox"/>
                    <span className="checkmark_text">Family</span>
                </label>
                
                <label className="container">
                    <input type="checkbox" className="checkbox"/>
                    <span className="checkmark_text">Documentary</span>
                </label>
           </div>
           <div className="des_box">
                <p className="Text1">Description</p>
           </div>
           <input className="input_Dis" type="text" required></input>
           <div className="uptext">
                <p className="Text1">Upload Image of Movie</p>
           </div>
           <div className="upBox">
                <div className="upBoxtext">
                    <p className="Text1">Upload</p>
                </div>
           </div>
           <div className="addbox">
                <div className="addtext">
                    <p className="Text1 addtext1">Add Movie</p>
                </div>
           </div>
        </div>
        </>
    )
}
export default AddmovieForm; 
