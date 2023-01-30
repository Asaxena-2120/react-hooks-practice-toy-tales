import React, { useState,useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then((resp)=>resp.json())
    .then((data)=>setToys(data))
  },[])
  
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewtoy(new_toy){
    console.log(new_toy)
    setToys([...toys,new_toy])
  }

  function onLikeClick(likeToy){
    console.log(likeToy)
    
    console.log("like increased")
    
    
    fetch(`http://localhost:3001/toys/${likeToy.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",

      },
      body:JSON.stringify({
        
        likes:likeToy.likes+1,
      })
    })
    .then((resp)=>resp.json())
    .then((data)=>{
      const updatedToys = toys.map((toy) =>
      toy.id === data.id ? data : toy
    );
    setToys(updatedToys);
    })
  }
  function onDonateClick(deletedToy){
    console.log("reached here on App", deletedToy)
    //Delete the toy from server
    fetch(`http://localhost:3001/toys/${deletedToy.id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
      }
      
    })
    
    //Delete the toy from DOM
    const updatedToys = toys.filter((toy)=>toy.id!==deletedToy.id)
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={handleNewtoy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleLike={onLikeClick} handleDonate={onDonateClick}/>
    </>
  );
}

export default App;
