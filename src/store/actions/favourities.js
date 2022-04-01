export const addToFavourite = (movie)=>
{
    return{
        type: "ADD_FVOURITE",
        payload:{movie}
    }
}

export const removeFavourite = (id) => ({
    type: "REMOVE_FAVOURITE",
    payload: {
        id,
    },
  });
  