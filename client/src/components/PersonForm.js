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
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Gamertag</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange = {(e)=>setGamerTag(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default PersonForm;



