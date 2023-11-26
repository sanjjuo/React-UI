import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Text(){
    const textStyle = {
        position: 'absolute',
        top: '20%', 
        left: '37%', 
        transform: 'translate(-50%, -50%)',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center', 
        margin: '20px',
      };

    return (
        <div style={textStyle}>
            Choose a plan that's just right for you!
        </div>
    );
}

export default Text;
