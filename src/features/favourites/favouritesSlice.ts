import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {addToCharacters, fetchCharacters, removeFromCharacters} from './favouritesAPI';
import {Character, FavouriteCharacter} from "../../app/character";

type PayloadType = { payload: Character }

export interface CounterState {
    characters: Array<FavouriteCharacter> | null;
}

const initialState: CounterState = {
    characters: fetchCharacters()
};

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        add: (state, {payload}: PayloadType) => {
            const newChar = addToCharacters(payload);
            if (newChar) {
                if (state.characters) {
                    state.characters.push(newChar);
                } else {
                    state.characters = [newChar]
                }
            }
        },
        remove: (state, {payload}: PayloadType) => {
            removeFromCharacters(payload);
            const index = state.characters?.findIndex(char => payload.id === char.id);
            if(index !== -1) {
                state.characters?.splice(index || 0, 1);
            }
        }
    }
});

export const {add, remove} = favouritesSlice.actions;
export const selectFavourites = (state: RootState) => state.favourites.characters;
export default favouritesSlice.reducer;