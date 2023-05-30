import React from 'react'

function Content() {
    const handleClick = () => {
        console.log('You clicked it')
    }
    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }
  return (
    <main>
      <p>Hello</p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2('Click')}>Click It</button>
    </main>
  )
}

export default Content
