import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"


function ListMovies() {
  // const history = useHistory() if i want to redirect to a component
  // history.push("/")

  // const location = useHistory() 
  const[movies,setMovies] = useState([])
  useEffect(()=>{
   axios.get("https://api.themoviedb.org/3/movie/popular?api_key=2447d1a3aaaefe278e2af1c1d23ecb3d").then((result)=>setMovies(result.data.results)).catch((error)=>{console.log(error)})
 },[])
  console.log(movies)
  return (
    <div className='container'>
    <h2 className='text-center text-danget my-3'> Movies List</h2>
    <div className="row row-cols-md-3 g-2">
           { movies.map((movie)=>{
          return <div className="col" key={movie.id}>
          <div className="card h-75" >
                 <img src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="card-img-top h-50" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title">{movie.original_title}</h5>
                   <p className="card-text">{movie.overview}</p>
                   <Link to={`/details/${movie.id}`} class="btn btn-primary">Details</Link>
                 </div>
               </div>
               </div>
   })}
</div>
 </div>
   )
   
}

export default ListMovies;