
import React, { useState, useEffect } from "react";

export default function SearchResults() {
  const [todo, setTodo] = useState({ title: "" });
  const [id, setId] = useState(1);

  useEffect(() => {
    function fetchTodo() {
      console.log("Fetching")
      fetch('https://jsonplaceholder.typicode.com/todos/'+id)
      .then(res=>res.json())
      .then(data =>  setTodo(data))  
      .catch(err => console.log("Ups"+err))
    }
    fetchTodo();
  });

  return (
    <>
      <input value={id} onChange={e => setId(e.target.value)} />
     
      <p> Name: {todo.title} /</p>
     
    </>
  );
}

