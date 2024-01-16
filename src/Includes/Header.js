import React from 'react'

export default function Header() {
  return (
    <header className='container'>
        <div className="row" id='Header'>
            <div className="col-3"><h3 className='logo'>Countries</h3></div>
            <div className="col-9 nav">
              <img src="./Images/handBurg.svg" alt="" />
                <ul className='HeaderNav'>
                    <li><a className='active' href="#">All</a></li>
                    <li><a href="#">Asia</a></li>
                    <li><a href="#">Europe</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}
