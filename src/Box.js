import React from "react";

function Box({width, height, color, remove, id}) {
  const style = {

    backgroundColor: color,
    height: height,
    width: width,
    margin: "20px auto",
  }
  const buttonStyle = {
    position: "relative",
    left: "40px",
  }

  const handleClick = () => {
    remove(id);
  }

  return (
    <div style={style}>
      <button style={buttonStyle} onClick={handleClick}>X</button>
    </div>
      
  )
}

export default Box;