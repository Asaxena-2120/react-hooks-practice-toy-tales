import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDonate,handleLike}) {
  function onDonate(toy){
    handleDonate(toy)
  }
  function onLike(toy){
    handleLike(toy)
  }
  /* const toysList = toys.map((toy)=><ToyCard key={toy.name}image={toy.image}
  likes={toy.likes} name={toy.name}/>) */
  const toysList = toys.map((toy)=><ToyCard key={toy.name}
   toy={toy} handleDeleteToy={onDonate} handleLikeToy={onLike}/>)
  return (
    <div id="toy-collection">{toysList}</div>
  );
}

export default ToyContainer;
