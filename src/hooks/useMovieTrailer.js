import { addtrailerVideo } from '../utils/movieSlice';
import  { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';

const useMovieTrailer=(movieId)=>{
        // fetch trailer video and updating the store with trailer video data

        const dispatch = useDispatch();

        // Fetch trailer
        const getMovieVideo = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
                const json = await response.json();
    
                if (Array.isArray(json.results)) {
                    const filterData = json.results.filter((video) => video.type === "Trailer");
                    const trailer = filterData.length ? filterData[0] : json.results[0];
                    dispatch(addtrailerVideo(trailer));
                } else {
                    console.error("No results found in the API response.");
                }
            } catch (error) {
                console.error("Error fetching movie video:", error);
            }
        };
    
        useEffect(() => {
            getMovieVideo();
        }, [movieId]); // Add movieId to the dependency array

        return getMovieVideo;
}

export default useMovieTrailer;