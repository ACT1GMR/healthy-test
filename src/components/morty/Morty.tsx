import classnames from "classnames";
import {Character} from "../../app/character";
import {Tooltip} from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';

import Gap from "../Gap";
import styles from "./Morty.module.css";


export interface GlobalMortyPropType {
    onButtonClick: (character: Character) => void,
    isRemoveFromFavourite?: boolean,
    imageStyle?: object,
    noTooltip?: boolean
}

export interface MortyPropType extends GlobalMortyPropType {
    character: Character
}

export default function Morty({
                                  character,
                                  onButtonClick,
                                  isRemoveFromFavourite,
                                  imageStyle,
                                  noTooltip = false
                              }: MortyPropType) {

    const buttonClassNames = classnames({
        [styles.Morty__Button]: true,
        [styles["Morty__Button--red"]]: isRemoveFromFavourite
    })
    return <div className={styles.Morty}
                data-tooltip-id={`tooltip-${character.id}`}
                data-tooltip-place="top">
        <img className={styles.Morty__Image} alt={character.name} style={imageStyle}
             src={character.image}/>
        <h3 className={styles.Morty__Name}>{character.name}</h3>
        <button className={buttonClassNames}
                onClick={() => onButtonClick(character)}>{isRemoveFromFavourite ? "Remove from favourite" : "Add To favourite"}</button>
        {!noTooltip &&
        <Tooltip id={`tooltip-${character.id}`} render={e => (
            <>
                <p>location: {character.location.name}</p>
                <Gap xy={1}/>
                <p>status: {character.status} - {character.species}</p>
            </>
        )}>
          <button>You can click me!</button>
        </Tooltip>
        }
    </div>
}