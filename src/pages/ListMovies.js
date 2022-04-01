import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import ChangeLanguage from '../components/ChangeLanguage/ChangeLanguage';
import { axiosInstance } from './../Network/axiosConfg';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavourite ,removeFavourite } from './../store/actions/favourities';
function ListMovies() {
  // const history = useHistory() if i want to redirect to a component
  // history.push("/")

  // const location = useHistory() 
  const[movies,setMovies] = useState([])
  useEffect(()=>{
   axiosInstance.get(`/popular?api_key=2447d1a3aaaefe278e2af1c1d23ecb3d`).then((result)=>setMovies(result.data.results)).catch((error)=>{console.log(error)})
 },[])
console.log(movies)
 const favourites = useSelector((state) => state.favourites.favourites);

 const dispatch = useDispatch();

 //check favourite function
 function checkFavourite(movie,e)
 {
  const objFlag = favourites.some(element=>{
    if(element.id === movie.id)
    {
       return true;
      
    }else{
      return false
    }
})
 
if(objFlag)
{
  e.target.style.color="#ccc"
  dispatch(removeFavourite(movie.id))
}else{
  e.target.style.color="yellow !important"
  dispatch(addToFavourite(movie))
}
}

  return (
    <div className='container row mx-auto justify-content-center'>
       <ChangeLanguage/>
    <h2 className='text-center text-danger my-5'> Movies List</h2>
           { movies.map((movie)=>{
          return <div className='col-md-3 my-1 text-center' key={movie.id}>
                 <img src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} style={{"height":"300px","width":"100%"}} className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title">{movie.original_title}</h5>
                   <span id='star' className='fa-solid fa-star fa-xl my-4  pointer' style={{"color":"#ccc"}}  role="button" onClick={(e)=>{checkFavourite(movie,e);}}></span><br/>
                   <Link to={`/details/${movie.id}`} className="btn btn-danger  my-2">Details</Link>

                 </div>
                 </div>
   })}
</div>
   )
   
}

export default ListMovies;