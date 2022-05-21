import { axiosInstance } from "./../../Network/axiosConfg";
import { GET_MOVIES_LIST } from "./types";

export const getMoviesList = (pageNum=1) => (dispatch) => {
  return axiosInstance
    .get(`/popular?api_key=2447d1a3aaaefe278e2af1c1d23ecb3d`,{params:{page:pageNum}})
    .then((result) =>
      dispatch({
        type: GET_MOVIES_LIST,
        payload: result.data.results,
        
      })
    )
    .catch((err) => console.log(err));
};
