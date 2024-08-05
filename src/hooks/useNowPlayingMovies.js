import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initial state should be true
  const [error, setError] = useState(null);
    useEffect(() => {
        const getNowPlayingMovies = async () => {
          try {
            const response = await fetch(
              "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
              API_OPTIONS
            );
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const json = await response.json();
            setData(json|| []); // Ensure you set the data correctly
            dispatch(addNowPlayingMovies(json));
            console.log(json);
          } catch (error) {
            setError(error.message || 'An error occurred');
          } finally {
            setIsLoading(false); // Correctly set isLoading to false
          }
        };
    
        getNowPlayingMovies();
      }, [dispatch]);
}

   export default useNowPlayingMovies;