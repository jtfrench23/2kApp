import React, { useState } from 'react'
import axios from 'axios';
const GameForm = () => {
    //keep track of what is being typed via useState hook
    const [gamertag, setGamerTag] = useState("");
    const [win, setWin] = useState(true);
    const [points, setPoints] = useState(0);
    const [rebounds, setRebounds] = useState(0);
    const [assists, setAssists] =  useState(0);
    const [steals, setSteals] = useState(0);
    const [blocks, setBlocks] = useState(0);
    const [turnovers, setTurnovers] = useState(0);
    const [fouls, setFouls] = useState(0);
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/game', {
            gamertag,
            win,
            points,
            assists,
            steals,
            blocks,
            rebounds,
            turnovers,
            fouls
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Gamertag</label><br/>
                <input type="text" onChange = {(e)=>setGamerTag(e.target.value)}/>
            </p>
            <p>
                <label>Win</label><br/>
                <input type="bool" onChange = {(e)=>setWin(e.target.value)}/>
            </p>
            <p>
                <label>Points</label><br/>
                <input type="number" onChange = {(e)=>setPoints(e.target.value)}/>
            </p>
            <p>
                <label>Assists</label><br/>
                <input type="number" onChange = {(e)=>setAssists(e.target.value)}/>
            </p>
            <p>
                <label>Steals</label><br/>
                <input type="number" onChange = {(e)=>setSteals(e.target.value)}/>
            </p>
            <p>
                <label>Rebounds</label><br/>
                <input type="number" onChange = {(e)=>setRebounds(e.target.value)}/>
            </p>
            <p>
                <label>Blocks</label><br/>
                <input type="number" onChange = {(e)=>setBlocks(e.target.value)}/>
            </p>
            <p>
                <label>Turnovers</label><br/>
                <input type="number" onChange = {(e)=>setTurnovers(e.target.value)}/>
            </p>
            <p>
                <label>Fouls</label><br/>
                <input type="number" onChange = {(e)=>setFouls(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default GameForm;



