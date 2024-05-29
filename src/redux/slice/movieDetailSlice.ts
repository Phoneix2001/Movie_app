import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MovieDetail, MovieDetailsDataObject } from '../../api/model/MovieDetailsDataObject'
import { ApiResponse, loading } from '../../api/network/ApiResponse'
import { MOVIE_DETAILS_PAGE_SLICE } from '../store/constants'

interface MovieSliceInterface {
    isTrailerView: boolean
}

// Define the initial state using that type
const initialState: MovieSliceInterface = {
    isTrailerView: false
}

export const movieDetailPageSlice = createSlice({
    name: MOVIE_DETAILS_PAGE_SLICE,
    initialState: initialState,
    reducers: {
        toggleTrailerView: (state) => {
            state.isTrailerView = !state.isTrailerView;
        },
        setTrailerView: (state, payload: PayloadAction<boolean>) => {
            state.isTrailerView = payload.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleTrailerView ,setTrailerView } = movieDetailPageSlice.actions;

export default movieDetailPageSlice.reducer