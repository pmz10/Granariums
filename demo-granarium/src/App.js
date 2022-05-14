import React from "react";
import Header from "./componets/Header";
import { TextScaner } from "./componets/TextScaner";

function App() {
  return (
    <div className="container-can">
      <Header colors="gold"/>
      <Header colors="navy"/>
      <nav style={{background:'red'}}> 
        <ul style={myStyles.listaNav}>
          <li style={myStyles.barraCajas} >Opciones 1</li>
          <li style={myStyles.barraCajas}>Opciones 2</li>
          <li style={myStyles.barraCajas}>Opciones 3</li>
          <li style={myStyles.barraCajas}>Opciones 4</li>
        </ul>
      </nav>
      <section style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', height:'100%'}}>
        <article style={{width: '30%',justifyItems:'center', fontSize:'2rem'}}>Este articulo es especializado para distintos casos</article>
        <article style={{width: '30%', justifyItems:'center', fontSize:'2rem'}}><TextScaner/></article>
      </section>
    </div>
  );
}

export default App;

let myStyles = {
  listaNav:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  apartado:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  barraCajas:{
    padding:'0px 10px 0px 10px ',
     border:'3px solid navy',
     listStyle:'none'
  }
};
