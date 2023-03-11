import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../features/characters/charactersSlice';
import favouritesSlice from '../features/favourites/favouritesSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    favourites: favouritesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;