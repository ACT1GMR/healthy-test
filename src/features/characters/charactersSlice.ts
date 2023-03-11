import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {fetchCharacters} from './charactersAPI';
import {Character} from "../../app/character";

export interface CharactersState {
    characters: Array<Character>;
    page: number,
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CharactersState = {
    characters: [],
    page: 1,
    status: 'idle',
};

export const fetchCharactersThunk = createAsyncThunk(
    'characters/fetchCharacters',
    async (page: number = 1) => {
        return await fetchCharacters({page});
    }
);

export const counterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharactersThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCharactersThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload) {
                    state.page = action.meta.arg || 1;
                    state.characters = state.characters.concat(action.payload);
                }
            })
            .addCase(fetchCharactersThunk.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const selectCharacters = (state: RootState) => state.characters;

export default counterSlice.reducer;