import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MovieDetail, MovieDetailsDataObject } from '../../api/model/MovieDetailsDataObject'
import { ApiResponse, loading } from '../../api/network/ApiResponse'
import { MOVIE } from '../store/constants'

interface MovieSliceInterface {
  movieApiResponse: ApiResponse<MovieDetailsDataObject>,
  initialStateValue: MovieDetail[],
  viewedMovieDetails?: MovieDetail,
  
};

// Define the initial state using that type
const initialState: MovieSliceInterface = {
  movieApiResponse: loading(),
  initialStateValue: []
};

export const movieSlice = createSlice({
  name: MOVIE,
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<MovieDetail>) => {
      state.initialStateValue = [...state.initialStateValue, action.payload];
    },
    addOneMovie: (state, action: PayloadAction<MovieDetail>) => {
      state.viewedMovieDetails = action.payload;
    },
    addMovieData: (state, action: PayloadAction<ApiResponse<MovieDetailsDataObject>>) => {
      state.movieApiResponse = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, addOneMovie, addMovieData } = movieSlice.actions;

export const selectedMovies = (state: any) => state.MOVIE.initialStateValue;
export const selectOneMovie = (state: any) => state.MOVIE.viewedMovieDetails;
export const selectMovieList = (state: any) => state.MOVIE.movieApiResponse;



export default movieSlice.reducer