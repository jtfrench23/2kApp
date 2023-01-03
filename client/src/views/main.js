import React, { useState } from 'react'
import axios from 'axios';
import GameForm from '../components/GameForm';
import GameList from '../components/GameList';
const Main = (props) => {
    
    const [games, setGames] = useState([]);
    
    return (
        <div>
            <GameForm games={games} setGames={setGames} />
            <hr/>
            <GameList games={games} setGames={setGames} />
        </div>
    )
}
export default Main;