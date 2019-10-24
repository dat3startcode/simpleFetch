
import React, { useState, useEffect } from "react";

export default function SearchResults() {
  const [data, setData] = useState({ x: "" });
  const [id, setId] = useState(1);

   useEffect(() => {
    function fetchSwapi() {
      fetch('https://jsonplaceholder.typicode.com/users?id='+id)
      .then(res=>res.json())
      .then(data =>  {
          if(data.length > 0){
              setData(data[0]);
          }})
      .catch(err => console.log("Ups"+err))
    }
    fetchSwapi();
  },[id]);

  return (
    <>
      <input value={id} onChange={e => setId(e.target.value)} />
     
      <p> Name: {data.name} /</p>
     
    </>
  );
}

