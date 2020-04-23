import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

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
      boxes => boxes.filter(box => box.id !== id)
    )
  }

  function addBox(newBox){
    
    newBox.id = uuidv4();
    setBoxes(boxes => [...boxes, newBox]);
    // console.log("this is our boxes\n\n\n", boxes)
  }

  return (
    <div>
      {boxes.map(b =>( 
        <Box 
          width={b.width} 
          height={b.height} 
          color={b.backgroundColor} 
          remove={removeBox} 
          id={b.id}
          key={b.id} 
        />
      ))}
      <NewBoxForm addBox={addBox} />
    </div>
  )
}

export default BoxList;