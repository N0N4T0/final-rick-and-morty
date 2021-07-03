export default function CharacterItem(props){
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
            <a href="www.g">Adcionar favorito</a>
        </div>
    )
}