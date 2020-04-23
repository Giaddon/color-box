import React, { useState } from "react";



function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: "",
    height: "",
    backgroundColor: ""
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);

  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  //ceorce width/height input into "px" if just a number value is passed in


  return (
    <form onSubmit={handleSubmit}  >
      <label htmlFor="width">Width:</label>
      <input onChange={handleChange} id="width" name="width" type="text" ></input>
      <label htmlFor="height">Height:</label>
      <input onChange={handleChange} id="height" name="height" type="text" ></input>
      <label htmlFor="backgroundColor">Color:</label>
      <input onChange={handleChange} id="backgroundColor" name="backgroundColor" type="text" ></input>
      <button type="submit">Submit!</button>

    </form>
  )

}

export default NewBoxForm