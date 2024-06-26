import { API_OPTIONS } from '../utils/constant'
import {addNowPlayingMovies} from '../utils/movieSlice'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'


const useNowPlayingMovies=()=>{
    const Dispatch=useDispatch();
  const getNowPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);

    const json=await data.json();
    console.log(json);
    Dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=>{
    getNowPlayingMovies();
  },[]) 
}

 export default useNowPlayingMovies;
 