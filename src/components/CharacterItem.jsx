import { useEffect, useState } from "react"

export default function CharacterItem(props){
    // const [newFavoriteChar, setNewFavoriteChar] = useState('')
    const [favoritesChars, setFavoritesChars] = useState(() => {
        const storagedFavorites = localStorage.getItem(
            '@RickAndMorty:favoritesChars',
        )

        if(storagedFavorites) {
            return JSON.parse(storagedFavorites)
        }

        return[]
    })

    useEffect(() => {
        localStorage.setItem(
            '@RickAndMorty:favoritesChars',
            JSON.stringify(favoritesChars)
        )
    }, [favoritesChars])

    function handleAddToFavoriteCharacters(event){
        // ANalisar essa entrada
        console.log(event)

        // Salvando somente um no localstorage
        const newFavoriteChar = event
        setFavoritesChars(...favoritesChars, newFavoriteChar)

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
                value={props.chars.name}
                onClick={e => handleAddToFavoriteCharacters(e.target.value)}
            >
                Adcionar a favorito
            </button>
        </div>
    )
}