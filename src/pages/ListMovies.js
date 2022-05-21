import React, { useEffect ,useState} from 'react'
import {Link} from "react-router-dom"
import ChangeLanguage from '../components/ChangeLanguage/ChangeLanguage';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavourite ,removeFavourite } from './../store/actions/favourities';
import { getMoviesList } from './../store/actions/movies';
function ListMovies() {
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();
  const [pageNum,setPageNum] = useState(1)

  useEffect(() => {
    dispatch(getMoviesList(pageNum));
  }, []);

   async function changeList (pageNum){
    dispatch(getMoviesList(pageNum));
    setPageNum(pageNum);
  };


  //   //check page number
    function checkPageNumber ()
    {
      if(pageNum>1)
      {
        changeList(pageNum-1)
      }else{
        changeList(pageNum+1)

      }
    }

    //favourites
     const favourites = useSelector((state) => state.favourites.favourites);
 //check favourite function
 function checkFavourite(movie)
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
  localStorage.setItem("trueObjFlag",objFlag)
  dispatch(removeFavourite(movie.id))
}else{
  localStorage.setItem("trueObjFlag",objFlag)
  dispatch(addToFavourite(movie))
}
}

const flag =  () =>
{
   if(localStorage.getItem("trueObjFlag")==true)
   {
     console.log("true")
     return true
   }else if(localStorage.getItem("trueObjFlag")==false){
    console.log("false")

    return false
   }
}
 
  return (
    <div className='container row mx-auto'>
       <ChangeLanguage/>
    <h2 className='text-center text-danger my-5'> Movies List</h2>
           { movies.map((movie)=>{
          return <div className='col-md-3 my-1 text-center' key={movie.id}>
                 <img src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} style={{"height":"300px","width":"100%"}} className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title">{movie.original_title}</h5>
                   <span id='star' className='fa-solid fa-star fa-xl my-4  pointer' style={{color: flag ? '#ccc':'yellow'}} role="button" onClick={(e)=>{checkFavourite(movie)}}></span><br/>
                   <Link to={`/details/${movie.id}`} className="btn btn-danger  my-2">Details</Link>
                 </div>
                 </div>
   })}
   <div className='d-flex  justify-content-center mt-2'>
  <ul className="pagination">
    <li className="page-item"><a className="page-link text-danger" style={{"cursor":"pointer"}} onClick={()=>checkPageNumber()}>Previous</a></li>
    <li className="page-item"><a className="page-link" style={{"cursor":"pointer"}} onClick={()=>changeList(pageNum+1)}>Next</a></li>
  </ul>
</div>
</div>
   )
   
}

export default ListMovies;