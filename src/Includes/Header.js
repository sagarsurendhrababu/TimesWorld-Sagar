import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loginStatus} from '../Redux/Features/loginAuthSlice';
import {regionAction} from '../Redux/Features/regionSlice';

export default function Header() {
  const dispatch = useDispatch();
  return (
    <header className='container'>
        <div className="row" id='Header'>
            <div className="col-3"><h3 className='logo' onClick={()=>{dispatch(loginStatus(false))}}>Countries</h3></div>
            <div className="col-9 nav">
              <img src="./Images/handBurg.svg" alt="" />
                <ul className='HeaderNav'>
                    <li><a onClick={()=> dispatch(regionAction({type:' '}))}>All</a></li>
                    <li><a onClick={()=> dispatch(regionAction({type:'Asia'}))}>Asia</a></li>
                    <li><a onClick={()=> dispatch(regionAction({type:'Europe'}))}>Europe</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}
