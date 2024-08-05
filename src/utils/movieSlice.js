import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [], // Use an empty array instead of null for better handling
  },
  reducers: {
    // Action to add now playing movies to the state
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload; // Update state with the payload
    },
  },
});

// Export the action creators
export const { addNowPlayingMovies } = movieSlice.actions;

// Export the reducer to be used in the store
export default movieSlice.reducer;
