import React from 'react';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import ListItem from '../Components/ListItem';

export default function Home() {
  return (
      <>
        <Header/>
        <div className='container'>        
            <div className='row' id='HomeList'>
              <ListItem/>                     
            </div>
        </div>
        <Footer/>      
      </>
  )
}
