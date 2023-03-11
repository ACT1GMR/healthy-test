import {ReactElement} from "react";
import classnames from "classnames";
import {Character} from "../../app/character";
import Morty, {GlobalMortyPropType} from "./Morty";
import styles from "./MortyList.module.css";

interface PropType extends GlobalMortyPropType {
    characters: Array<Character>,
    children?: ReactElement,
    columnDirection?: boolean
}

export default function MortyList({characters, onButtonClick, children, isRemoveFromFavourite, columnDirection, imageStyle, noTooltip}: PropType) {
    const classNames = classnames({
        [styles.MortyList]: true,
        [styles["MortyList--ColumnDirection"]]: columnDirection
    });
    return <div className={classNames}>
        {
            characters.map((character, idx) => (
                <Morty noTooltip={noTooltip} key={character.id} imageStyle={imageStyle} isRemoveFromFavourite={isRemoveFromFavourite} character={character} onButtonClick={onButtonClick}/>
            ))
        }
        {children}
    </div>
}