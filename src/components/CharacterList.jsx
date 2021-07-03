import React, { useState } from "react";
import axios from "axios";

import CharacterItem from "./CharacterItem";

import { Img, Form, Title, Characters, Error } from '../styles/characterList';
import logoImg from '../assets/logo.svg';


export default function CharacterList() {

    const [characters, setCharacters] = useState([]);
    const [newChar, setNewChar] = useState('');
    const [inputError, setInputError] = useState('');

    const apiSearched = `https://rickandmortyapi.com/api/character/?name=${newChar}`

    function handleAddCharacter(event){
        event.preventDefault();
        // console.log(newChar)

        if (!newChar) {
            setInputError('Digite um nome de personagem válido');

            return;
        }

        
        axios
            .get(apiSearched)
            .then(response => {
                setCharacters(response.data.results)
            })       

        setNewChar('')
        setInputError('');
    }

  return (
    <>
        <Img src={logoImg} alt="Rick and Morty" />
        <Title>Explore os personagens da série</Title>

        <Form onSubmit={handleAddCharacter}>
            <input
                value={newChar}
                onChange={e => setNewChar(e.target.value)}
                placeholder="Digite o nome do personagem"
                />
            <button type="submit">Pesquisar</button>
        </Form>

        {inputError && <Error>{inputError}</Error>}

        <Characters>
                {characters.map((chars, id) => {
                    return <CharacterItem key={id} chars={chars} />
                })}
        </Characters>
    </>
  );
}