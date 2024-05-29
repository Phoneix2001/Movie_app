import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../slice/movieSlice';
import movieDetailReducer from '../slice/movieDetailSlice';
import createSagaMiddleware from 'redux-saga';
import SagaData from '../saga/saga';


const sagaMiddleware = createSagaMiddleware();

const middlewares: any[] = [
 sagaMiddleware
];

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }
const reducerValue = {
  MOVIE: movieReducer,
  MOVIE_DETAILS_PAGE_SLICE: movieDetailReducer
};

const store = configureStore({
  reducer: reducerValue,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares)
});

sagaMiddleware.run(SagaData);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;


// configureStore({reducer : {
//   movie : movieReducer
// },devTools:true});

