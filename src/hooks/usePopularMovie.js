import { API_OPTIONS } from '../utils/constant'
import {addPopularMovie} from '../utils/movieSlice'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Note: always catch the error
// sugggested way => create a useFetch hook for fetching the data from the api
const usePopularMovie=()=>{
    const Dispatch=useDispatch();
  const getPopularMovies=async()=>{
    try {
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      const json=await data.json();
      console.log(json);
      Dispatch(addPopularMovie(json.results));
      
    } catch (error) {
      console.log("Error at Popular movies", error)
    }

  };

  useEffect(()=>{
    getPopularMovies();
  },[]) 
}

 export default usePopularMovie;
 