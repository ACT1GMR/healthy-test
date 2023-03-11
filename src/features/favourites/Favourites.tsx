import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {
    add,
    remove,
    selectFavourites
} from './favouritesSlice';
import styles from './Favourites.module.css';
import Gap from "../../components/Gap";
import MortyList from "../../components/morty/MortyList";

type FavouritesType = {
    isHomePage: boolean
}

export default function Favourites({isHomePage = false}: FavouritesType) {
    const favourites = useAppSelector(selectFavourites);
    const dispatch = useAppDispatch();
    return (
        <div className={styles.Favourites}>
            {!isHomePage &&
              <Gap xy={20} block style={{textAlign: "left"}}>
                <h2>
                  <Link to=".." className={styles.Favourites__LinkBack}>Back</Link>
                </h2>
              </Gap>
         }

            {favourites && favourites.length ? <>
                    <MortyList characters={isHomePage ? favourites.slice(-3).reverse() : favourites}
                               columnDirection={isHomePage}
                               imageStyle={isHomePage ? {width: "100px", height: "100px"} : {}}
                               noTooltip={isHomePage}
                               isRemoveFromFavourite
                               onButtonClick={(character) => dispatch(remove(character))}>
                        {isHomePage ? <div className={styles.Favourites__LoadMore}><Link to="favourites"
                                                                                         className={styles.Favourites__Link}>Goto
                            Favourite</Link></div> : undefined}
                    </MortyList>
                </>
                :
                <Gap xy={50}><p className={styles.Favourites__NoList}>No fav list</p></Gap>
            }
        </div>
    );
}

