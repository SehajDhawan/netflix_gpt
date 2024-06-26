import { createSlice } from "@reduxjs/toolkit";
import usePopularMovie from "../hooks/usePopularMovie";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovie=action.payload;
        },
        addPopularMovie :(state,action)=>{
            state.usePopularMovies=action.payload;
        },
        addtrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
});

export const {addNowPlayingMovies,addtrailerVideo,addPopularMovie}=moviesSlice.actions;
export default moviesSlice.reducer;