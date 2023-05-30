import React from 'react'

function Content() {
    const handleClick = () => {
        console.log('You clicked it')
    }
  return (
    <main>
      <p>Hello</p>
      <button onClick={handleClick}>Click It</button>
    </main>
  )
}

export default Content
