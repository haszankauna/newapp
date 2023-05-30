import React from 'react'
import { useState } from 'react'

function Content() {
    const [items, setItems] = useState([
        {
            id:1,
            checked: false,
            item: 'One pound bag of cocoa'
        },
        {
            id:2,
            checked: false,
            item: 'item2'
        },
        {
            id: 3,
            checked: false,
            item: 'item3'
        }
    ]);
  return (
    <main>

    </main>
  )
}

export default Content
