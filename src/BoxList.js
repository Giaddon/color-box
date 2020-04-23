import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Box from "./Box";

function BoxList() {
  const INITIAL_STATE = [
    {  
      backgroundColor: "#111",
      height: "30px",
      width: "30px",
      id: uuidv4(),
    },
    {
      backgroundColor: "skyblue",
      height: "70px",
      width: "80px",
      id: uuidv4(),
    }
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  
  // Remove box function
  function removeBox(id){
    setBoxes(
      boxes.filter(box => box.id !== id)
    )
  }

  return (
    <div>
      {boxes.map(b => <Box 
        width={b.width} 
        height={b.height} 
        color={b.backgroundColor} 
        remove={removeBox} 
        id={b.id}
        key={b.id} />)}
    </div>
  )
}

export default BoxList;