import React,{useState} from "react";

function ToyForm({onNewToy}) {
  const [formData, setFormData]=useState({
    name:"",
    image:""
  })
  function handleChange(e){
    console.log(e.target.value)
    setFormData({...formData,
    [e.target.name]:e.target.value})
  }
  
  function handleClick(e){
    e.preventDefault();
    console.log("Submit button clicked")
    
    const newToy = {
      ...formData,
      likes:0,
    };

    fetch("http://localhost:3001/toys",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",

      },
      body:JSON.stringify(newToy)
    })
    .then((resp)=>resp.json())
    .then((data)=>onNewToy(data))
  }
  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onClick = {handleClick}
        />
      </form>
    </div>
  );
}

export default ToyForm;
