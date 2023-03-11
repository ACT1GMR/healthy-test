import Characters from '../characters/Characters';
import Favourites from '../favourites/Favourites';
import Gap from "../../components/Gap";
import styles from "./Home.module.css"

export default function Home() {
    return <>
        <div className={styles.Home__FavouritesContainer}>
            <Gap xy={20}><h2>Last Added favourites</h2></Gap>
            <Favourites isHomePage={true}/>
        </div>

        <Gap xy={20}><h2>Characters</h2></Gap>
        <div className={styles.Home__CharactersContainer}>
            <Characters/>
        </div>
    </>;
}