import React from "react";
import {useState} from "react";

export default function PuppyForm(){
    const[pupName,setPupName] = useState("");
    const[pupBreed,setPupBreed] = useState("");
    const[pupField,setPupField] = useState("");
    const[error,setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                'https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({name:pupName,breed:pupBreed,field:pupField,id:Math.floor(Math.random() * 1000),imageUrl:`https://upload.wikimedia.org/wikipedia/commons/d/df/Doge_homemade_meme.jpg`}),
                }
              );
              const result = await response.json();
              console.log(result);
          } catch (error) {
            setError(error.message);
          }
    }

    return (<>
    <form>
    <label>
        Name:
        <input value={pupName} onChange={(event) => {
             setPupName(event.target.value);
        }}/>
    </label>

    <label>
        Breed:
        <input value={pupBreed} onChange={(event) => {
             setPupBreed(event.target.value);
        }}/>
    </label>
    <label>
        Status:
        <input value={pupField} onChange={(event) => {
             setPupField(event.target.value);
        }}/>
    </label>

    <button onClick={handleSubmit}>Add Puppy</button>
</form>
    </>) 
}