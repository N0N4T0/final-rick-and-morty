import { useState } from "react"

export default function CharacterItem(props){
    const [favoritesChars, setFavoritesChars] = useState([])

    function handleAddToFavoriteCharacters(event){
        const newFavoriteChar = event
        setFavoritesChars([...favoritesChars, newFavoriteChar])
    }

    return(
        <div>
            <img 
            src={props.chars.image} 
            alt={props.chars.name}
            />
            <span>
                <h3>{props.chars.name}</h3>
                <p>{props.chars.gender}</p>
            </span>
            <button 
                value={props.chars.id}
                onClick={e => handleAddToFavoriteCharacters(e.target.value)}
            >
                Adcionar a favorito
            </button>
        </div>
    )
}