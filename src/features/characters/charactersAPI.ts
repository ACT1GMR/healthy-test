import {getCharacters} from 'rickmortyapi';
import {Character} from "../../app/character";
import {Character as RickyMortyCharacter} from "rickmortyapi";

export interface FetchCharacterPagination {
    page: number
}

export async function fetchCharacters(pagination: FetchCharacterPagination = {page: 1}): Promise<Character[] | undefined> {
    const characters = await getCharacters(pagination);
    return characters.data.results?.map(({id, name, image, status, location, species}: RickyMortyCharacter): Character => {
        return {id, name, image, status, location, species};
    });
}