const INTIAL_VALUE ={
    favourites:[]
}

export default  function favouriteReducer (state=INTIAL_VALUE , {type,payload})
{

    switch(type)
   {
       case 'ADD_FVOURITE':
        return { ...state,
                    favourites: [...state.favourites, payload.movie]
             };

       case 'REMOVE_FAVOURITE':
           return{
            ...state,
            favourites:state.favourites.filter((movie)=> movie.id !== payload.id)
           }

        default :
            return  state ;

              
   }
}