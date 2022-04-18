import React from "react";
import Header from "./componets/Header";

function App() {
  return (
    <div className="container-can">
      <Header />
      <nav style={{background:'red'}}> 
        <ul style={myStyles.listaNav}>
          <li style={{padding:'0px 10px 0px 10px ', border:'3px solid navy', listStyle:'none'}} href='#'>Opciones 1</li>
          <li style={{padding:'0px 10px 0px 10px ', border:'3px solid navy', listStyle:'none'}}>Opciones 2</li>
          <li style={{padding:'0px 10px 0px 10px ', border:'3px solid navy', listStyle:'none'}}>Opciones 3</li>
          <li style={{padding:'0px 10px 0px 10px ', border:'3px solid navy', listStyle:'none'}}>Opciones 4</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

let myStyles = {
  listaNav:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
};
