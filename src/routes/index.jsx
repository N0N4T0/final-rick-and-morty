import React from 'react';

import { Switch, Route } from 'react-router-dom';

import CharacterList from '../components/CharacterList';
import FavoritesCharacters from '../components/FavoritesCharacters';


const Routes= () => (
    <Switch>
        <Route path="/" exact component={CharacterList} />;
        <Route path="/favorites" component={FavoritesCharacters} />
    </Switch>
);

export default Routes;
