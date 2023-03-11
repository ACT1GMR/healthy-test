import {CharacterLocation, } from "rickmortyapi";

export interface Character {
    id: number,
    name: string,
    image: string,
    status: 'Alive' | 'Dead' | 'unknown',
    location: CharacterLocation,
    species: string
}

export interface FavouriteCharacter extends Character {
    favDate: number
}