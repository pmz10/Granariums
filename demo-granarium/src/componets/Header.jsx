import React from 'react'

export default function Header(props) {
  let myStyles = {
    styHeader :{
      background: props.colors
    },
}
  return (
    <header style={myStyles.styHeader}>
        <h1 className='text-center' style={{marginBottom: '0px', color: props.coletra}}>Componente Cabezera</h1>
    </header>
  )
}



