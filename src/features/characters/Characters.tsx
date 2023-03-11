import React, {useEffect, useState} from 'react';
import BarLoader from "react-spinners/ScaleLoader";
import MortyList from "../../components/morty/MortyList";
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {
    fetchCharactersThunk,
    selectCharacters
} from './charactersSlice';
import {add} from './../favourites/favouritesSlice';
import {Character} from "../../app/character";
import styles from "./Characters.module.css";

export default function Characters() {
    const dispatch = useAppDispatch();
    const {page: currentPage, status, characters} = useAppSelector(selectCharacters);
    const [page, setPage] = useState(currentPage);

    window.addEventListener("scroll", () => {
        if (window.scrollY + document.body.offsetHeight >= document.body.scrollHeight - 200) {
            if (status !== "loading") {
                setPage(currentPage + 1);
            }
        }
    })

    useEffect(() => {
        dispatch(fetchCharactersThunk(page));
    }, [page]);

    return (
        <>
            {status === "loading" &&
            <div className={styles.Character__LoaderContainer}>
              <BarLoader color="#36d7b7"/>
            </div>
            }

            <MortyList characters={characters} onButtonClick={(character: Character) => dispatch(add(character))}/>
        </>
    );
}