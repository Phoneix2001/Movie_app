import { MovieDetailsDataObject } from "../api/model/MovieDetailsDataObject";
import { ApiResponse } from "../api/network/ApiResponse";
import  movieListGet  from "../api/repository/MoviesListRepository";
import { addMovieData } from "../redux/slice/movieSlice";
import { AppDispatch } from "../redux/store/store";

export const movieDetailsGet = async (dispatch : AppDispatch) =>  {
  let movieListGetData: ApiResponse<MovieDetailsDataObject> = await movieListGet();
  dispatch(addMovieData(movieListGetData));
};