import React from "react";

function White() {
  const whiteBackground = {
    flex: '1',
    backgroundColor: 'white', 
    padding: '20px', 
    overflowY: 'auto', 
    textAlign: 'center',
    position: 'fixed',
    top: '120px', 
    left: '0',
    right: '50px',
    bottom: '0',
  };

  return (
    <div style={whiteBackground}>
  
    </div>
  );
}

export default White;
