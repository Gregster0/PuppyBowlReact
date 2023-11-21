import React from "react";
import {useState} from "react";

export default function PuppySingle(pup,setSelPup){
    return( <section key={pup.id}>
        <img src={pup.imageUrl} alt={pup.breed}/>
        <h2>{pup.name}</h2>
        <h2>Breed: {pup.breed}</h2>
        <h2>Status: {pup.status}</h2>
        <button onClick={(event)=>{
            setSelPup(pup);
        }}>More Info!</button>
    </section>)
}