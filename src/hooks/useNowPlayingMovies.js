import { API_OPTIONS } from '../utils/constant'
// follow best folder structure, why the slices of store are in utils folder not in store/moviesslice , store/userslice
import {addNowPlayingMovies} from '../utils/movieSlice'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'


const useNowPlayingMovies=()=>{
    const Dispatch=useDispatch();
  const getNowPlayingMovies=async()=>{
    try {
      //  why not using env, make it habit from the starting of the project
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
  
      const json=await data.json();
      console.log("Nowe playing movies result", json);
      Dispatch(addNowPlayingMovies(json.results));
      
    } catch (error) {
      console.log("Error at Now playing movies", error)
    }
  };

  // take care of useEffect dependency

  useEffect(()=>{
    getNowPlayingMovies();
  },[]) 
}

 export default useNowPlayingMovies;
 