import React from 'react'
import { useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'

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
        <ul>
            {items.map((item) => (
                <li className='item' key={item.id}>
                    <input
                    type='checkbox'
                    checked={item.checked}
                    />
                    <label>{item.item}</label>
                    <FaTrashAlt
                    role='button' 
                    tabIndex='0'
                    />
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Content
