import React from 'react'

export default function Header() {
  return (
    <header style={myStyles.styHeader}>
        <h1 className='text-center' style={{marginBottom: '0px',}}>Componente Cabezera</h1>
    </header>
  )
}

let myStyles = {
    styHeader :{
        background: 'orange',
    },
}

