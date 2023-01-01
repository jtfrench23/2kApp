import React, { useState } from 'react'
import axios from 'axios';
import GameForm from '../components/GameForm';
import GameList from '../components/GameList';
const Main = (props) => {
    
    const [games, setGames] = useState([]);
    
    return (
        <div>
    	/* PersonForm and Person List can both utilize the getter and setter established in their parent component: */
           <GameForm games={games} setGames={setGames} />
            <hr/>
           <GameList games={games} setGames={setGames} />
        </div>
    )
}
export default Main;