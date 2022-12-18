import React, { useState } from 'react'
import axios from 'axios';
const PersonForm = () => {
    //keep track of what is being typed via useState hook
    const [gamertag, setGamerTag] = useState(""); 
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            gamertag
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
            <input type="submit"/>
        </form>
    )
}
export default PersonForm;



