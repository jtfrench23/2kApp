import React, { useState } from 'react'
import axios from 'axios';
import {
    Paper,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    InputLabel,
    OutlinedInput,
    Button
} from '@mui/material';
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
    const styles = {
    paper: {
        width: "15rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    },
    RadioGroup: {
        width: "100%",
        marginBottom: "1rem"
    }
}
    return (
        <Paper elevation={3} style={styles.paper}>
            <form onSubmit={onSubmitHandler}>
                <h2>Add Game Stats</h2>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Gamertag</InputLabel>
                    <OutlinedInput type="text" onChange = {(e)=>setGamerTag(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <FormLabel id="winSelect">Win/Loss</FormLabel>
                    <RadioGroup
                        defaultValue = {true}
                        name="radio-buttons-group"
                        onChange = {(e)=>setWin(e.target.value)}
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Win" />
                        <FormControlLabel value={false} control={<Radio />} label="Loss" />
                    </RadioGroup>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Points</InputLabel>
                    <OutlinedInput type="text" onChange = {(e)=>setPoints(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Assists</InputLabel>
                    <OutlinedInput type="text" onChange = {(e)=>setAssists(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Steals</InputLabel>
                    <OutlinedInput type="text" onChange = {(e)=>setSteals(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Rebounds</InputLabel>
                    <OutlinedInput type="text" onChange = {(e)=>setRebounds(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Blocks</InputLabel>
                    <OutlinedInput type="text" onChange = {(e)=>setBlocks(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Turnovers</InputLabel>
                    <OutlinedInput type="text" onChange = {(e)=>setTurnovers(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Fouls</InputLabel>
                    <OutlinedInput type="text" onChange = {(e)=>setFouls(e.target.value)}/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Paper>
    )
}
export default GameForm;



