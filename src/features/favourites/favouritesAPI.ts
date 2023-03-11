import {MORTY_FAV_LIST} from "../../app/storageKey";
import {FavouriteCharacter, Character} from "../../app/character";

export function fetchCharacters(): Array<FavouriteCharacter> | null {
    const list = localStorage.getItem(MORTY_FAV_LIST);
    if (list) {
        const list = JSON.parse(localStorage.getItem(MORTY_FAV_LIST) || "{}");
        return Array?.from(list);
    }
    return null;
}

export function isInTheList(id: number): number {
    const currentList = fetchCharacters();
    if (currentList) {
        return currentList.findIndex(char => id === char.id);
    }
    return -1
}

export function addToCharacters(character: Character): FavouriteCharacter | null {
    if (isInTheList(character.id) === -1) {
        const list = [...fetchCharacters() || []];
        const newChar = {...character, favDate: Date.now()};
        list.push(newChar);
        localStorage.setItem(MORTY_FAV_LIST, JSON.stringify(list));
        return newChar;
    }
    return null;
}

export function removeFromCharacters(character: Character): void {
    const index = isInTheList(character.id);
    if (index !== -1) {
        const list = [...fetchCharacters() || []];
        list.splice(index, 1);
        if (list.length) {
            localStorage.setItem(MORTY_FAV_LIST, JSON.stringify(list));
        } else {
            localStorage.removeItem(MORTY_FAV_LIST);
        }
    }
}