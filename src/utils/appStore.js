import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './movieSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

// Export the configured store as default
export default store;
