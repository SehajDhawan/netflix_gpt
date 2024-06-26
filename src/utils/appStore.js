import {configureStore} from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";
import movieSlice from "./movieSlice";
import moviesReducer from './movieSlice'
const appStore = configureStore(
    {
        reducer:{
            user:useReducer,
            movies:moviesReducer,
        },
    }
);

export default appStore;
