import React from "react";
import { Link } from "react-router-dom";
import {FiChevronLeft} from 'react-icons/fi'

import { Header } from '../styles/characterList';

export default function FavoritesCharacters(){
    return (
       <>
        <Header>
            <Link to="/">
                <FiChevronLeft size={30}/>
                <h3>Volta ao início</h3>
            </Link>
        </Header>
       </>
    )
}
