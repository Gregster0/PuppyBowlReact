import React from "react";
import {useState, useEffect } from "react";
import PuppySingle from "./PuppySingle.jsx";

export default function PuppyMain({setSelPup}){
    const[puppyDB,setPuppyDB] = useState([]);

    useEffect(() => {
        async function fetchPuppies() {
          try {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players")
            const puppyData = await response.json()
            setPuppyDB(puppyData.data.players);
          } catch (error) {
            console.error(error);
          }
        }
        console.log(setSelPup)
        fetchPuppies()
      }, []);
    return <>{puppyDB.map((pup)=>{
        return PuppySingle(pup,setSelPup);
    })}</>
}