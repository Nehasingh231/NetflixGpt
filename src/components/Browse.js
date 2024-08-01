import React, { useEffect } from 'react';
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import addNowPlayingMovies from "../utils/movieSlice"

const Browse = () => {
   const dispatch = useDispatch();

   const getNowPlayingMovies = async () => {
          const data = await fetch(
          'https://api.themoviedb.org/3/movie/changes?page=1',
            API_OPTIONS
          );
           const json = await data.json();
           console.log(json.results);
           dispatch(addNowPlayingMovies(json.results));
   };

   useEffect(() => {
      getNowPlayingMovies();
   }, []) 

  return (
    <div>
     <Header/>
    </div>
  )
}

export default Browse    


export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVTAR = "https://avatars.githubusercontent.com/u/168772245?v=4";

export const BACKGROUNd_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg";