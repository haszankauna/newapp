import React from 'react'

function Header({title}) {
    const headerstyle = {
        backgroundColor: 'mediumblue',
        color: '#fff'
    }
  return (
    <header style={headerstyle}>
      <h1>{title}</h1>
    </header>
  )
}


export default Header
