import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFavourite } from '../store/actions/favourities';
function Favourites() {
  const favourites = useSelector((state) => state.favourites.favourites);  
  const dispatch = useDispatch()
   console.log(favourites)
  return (
    <div className='container my-4 row justify-content-center'> 
      {favourites.map((movie)=>
      {
        return <div className='col-md-4 my-1 text-center' key={movie.id}>
        <img src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} style={{"height":"400px","width":"100%"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className=''>{movie.overview}</p>
          <button className='btn btn-danger' onClick={()=>dispatch(removeFavourite(movie.id))}>Remove</button>
        </div>
        </div>
      }
      )}
    </div>
  )
}

export default Favourites