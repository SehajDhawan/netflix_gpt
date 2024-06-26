import { API_OPTIONS } from '../utils/constant'
import {addPopularMovie} from '../utils/movieSlice'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'


const usePopularMovie=()=>{
    const Dispatch=useDispatch();
  const getPopularMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);

    const json=await data.json();
    console.log(json);
    Dispatch(addPopularMovie(json.results));
  };

  useEffect(()=>{
    getPopularMovies();
  },[]) 
}

 export default usePopularMovie;
 