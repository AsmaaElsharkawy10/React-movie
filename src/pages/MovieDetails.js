import React from 'react'
import { useParams  } from 'react-router-dom'
import { useEffect ,useState } from 'react'
import axios from 'axios'
function MovieDetails() {
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=2447d1a3aaaefe278e2af1c1d23ecb3d`).then((result)=>setDetails(result.data)).catch((error)=>{console.log(error)})
  },[])

  const[details ,setDetails] = useState({})
  console.log(details)
 const params =  useParams()
  return (
    <div className='d-flex justify-content-center'>
    <div className='text-center' style={{"height":"200px" , "width":"50%"}}>
      <h2 className='text -danger'> {details.original_title}</h2>
                 <img src= {`https://image.tmdb.org/t/p/original/${details.poster_path}`} style={{"width":"80%" , "height":"500px" , "borderRadius":"50%"}} className="text-center" alt="..."/>
                 <div>  <p className="card-text my-3">{details.overview}</p></div>
                <span className='fs-2 '>Votes : </span> <span className='text -danger'> {details.vote_count}</span>


    </div>
                      
</div>
  )
}

export default MovieDetails