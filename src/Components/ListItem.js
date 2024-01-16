import React from 'react'

export default function ListItem() {
  return (
    <li className='col-sm-6'>
        <div className="item">
            <img src="./Images/country.jpg" alt="" />
            <div className='listDesc'>
                <h4>Title</h4>
                <p>sub title</p>
            </div>                
        </div>
    </li>
  )
}
