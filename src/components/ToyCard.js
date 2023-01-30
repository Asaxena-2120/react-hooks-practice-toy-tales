import React from "react";

function ToyCard({toy, handleDeleteToy,handleLikeToy}) {
  const {image,likes,name}=toy
  function handleClick(){
    console.log(toy)
    handleDeleteToy(toy)
  }
  function handleLikeClick(){
   
    handleLikeToy(toy)
    
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
