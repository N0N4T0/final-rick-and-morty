import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FiChevronRight} from 'react-icons/fi'

import axios from "axios";

import CharacterItem from "./CharacterItem";

import { Header, Form, Title, Characters, Error } from '../styles/characterList';
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
        <Header>
            <img src={logoImg} alt="Rick and Morty" />
            <Link to="/favorites">
                <h3>Meus Favoritos</h3>
                <FiChevronRight size={30}/>
            </Link>
        </Header>
        
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