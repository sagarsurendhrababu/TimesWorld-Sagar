import React, { useEffect } from 'react'
import {getData} from '../Redux/Features/countrySlice';
import { useDispatch, useSelector } from 'react-redux';
import Load from '../Includes/Loading';


export default function ListItem() {
  
  const dispatch = useDispatch();
  const dataAPI = useSelector(state => state.countryAPI.countryData);
  const Loading = useSelector(state => state.countryAPI.loading);

  const targetRegion = useSelector(state => state.targetRegion.region.type);
  
  console.log(targetRegion)

  useEffect(() => {
    dispatch(getData()); 
  },[dispatch])

  
  const filteredData = dataAPI.filter(country => country.region === targetRegion);

  return (
    <>
      {Loading? <Load/> : ''}
      {filteredData != '' ? filteredData.map((e,i) => ( 
        <li className='col-sm-6' key={e.name}>
          <div className="item">
              <img src={e.flag} alt="" />
              <div className='listDesc'>
                  <h4>{e.name}</h4>
                  <p>{e.region}</p>
              </div>                
          </div>
        </li>
      )) : 
      
      dataAPI.map((e,i) => ( 
        <li className='col-sm-6' key={e.name}>
          <div className="item">
              <img src={e.flag} alt="" />
              <div className='listDesc'>
                  <h4>{e.name}</h4>
                  <p>{e.region}</p>
              </div>                
          </div>
        </li>
      ))      

      }
    </>

  )
}
