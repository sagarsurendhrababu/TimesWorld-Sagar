import React from 'react'

export default function Footer() {
  return (
    <footer className='container'>
        <div className="row" id='Footer'>
            <div className="col-12 d-flex  flex-column align-items-center">
                <div className="socialmedia mb-5">
                    <a href="#"><img src="./Images/google.svg" alt="" /></a>
                    <a href="#"><img src="./Images/facebook.svg" alt="" /></a>
                    <a href="#"><img src="./Images/linkin.svg" alt="" /></a>
                    <a href="#"><img src="./Images/twitter.svg" alt="" /></a>
                </div>
                <p>Example@email.com</p>
                <p>Copyright © 2020 Name. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}
