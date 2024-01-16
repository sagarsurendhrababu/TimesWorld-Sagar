import React from 'react'

export default function Login() {
  return (
    <div className='container' id='loginPage'>
      <div className="loginCanvas row">
          <div className="col-sm d-flex justify-content-center align-items-center">
            <div id="loginform">
              <h3>Sign In</h3>
              <h6>New user? <a href="#">Create an account</a></h6>
              <form>
                <input type="text" placeholder='username or email'/>
                <input type="password" placeholder='Password'/>
                <span className='chckPoint'>
                  <input type="checkbox" />
                  <p><strong>Keep me signed in</strong></p>
                </span>
                <button>Sign In</button>              
              </form>
              <div className="divider">Or Sign in With</div>
              <div className="socialmedia">
                <a href="#"><img src="./Images/google.svg" alt="" /></a>
                <a href="#"><img src="./Images/facebook.svg" alt="" /></a>
                <a href="#"><img src="./Images/linkin.svg" alt="" /></a>
                <a href="#"><img src="./Images/twitter.svg" alt="" /></a>
              </div>              
            </div>
          </div>
          <div className="col-sm d-md-flex justify-content-end align-items-center">
            <img src="./Images/login-img.svg" alt="" />
          </div>
      </div>
    </div>
  )
}
