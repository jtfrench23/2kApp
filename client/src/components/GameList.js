import React, {useState, useEffect} from 'react'
import axios from 'axios';
const GameList = (props) => {
    const {games, setGames} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/games")
    	.then((res)=>{
	    console.log(res.data);
            setPeople(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <div>
            {
                games.map((game, index)=>{
                    // gamertag: { type: String },win: {type:Boolean},points: {type: Number},assists: {type: Number},steals: {type: Number},rebounds: {type: Number},turnovers: {type: Number},fouls: {type: Number}
                return <p key={index}>{game.gamertag}, {game.win}, {game.point}, {game.assists}, {game.steal}, {game.rebounds}, {game.turnovers}, {game.fouls}</p>
                })
            }
        </div>
    )
}
export default GameList;

