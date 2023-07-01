export const getStaticProps=async()=>{
    const res=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&");
    const data=await res.json();
    return(
        props:{
            data,
        }
    )
}
const Movie_row=({data})=>{
    return(
        <>
            <div className="row4">
                {data.map((curElem)=>{
                    return(
                        <div key={curElem.id}>
                            <h3>{curElem.id}</h3>
                            <h3>{curElem.title}</h3>
                        </div>
                })}
            </div>
            
        </>
    )
}
export default Movie_row;
