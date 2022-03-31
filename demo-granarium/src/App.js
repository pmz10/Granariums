import React from "react";

function App() {
  return (
    <div className="container-can">
      <h1 className="text-center">Hola Mundo</h1>
      <div style={myStyles.boxStyles}>
    	  <div style={{width:'200px', height:'40px', background:'white', alignSelf: 'center', border: '3px solid orange'}}><p className="text-center">Caja 1</p></div>
        <div style={{width:'200px', height:'40px', background:'white', alignSelf: 'center', border: '3px solid orange'}}><p className="text-center">Caja 2</p></div>
        <div style={{width:'200px', height:'40px', background:'white', alignSelf: 'center', border: '3px solid orange'}}><p className="text-center">Caja 3</p></div>
        <div style={{width:'200px', height:'40px', background:'white', alignSelf: 'center', border: '3px solid orange'}}><p className="text-center">Caja 4</p></div>
      </div>
    </div> 
  );
}

export default App;

let myStyles = { 
  boxStyles: {
    width: '100%',
    height: '100px',
    border: '5px solid yellow',
    background: '#672DA4',
    display: 'flex', 
    justifyContent: 'space-around',
  }
}
