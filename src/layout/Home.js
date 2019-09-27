import React from 'react';
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className="home">
      <h1>Welcome To VR Funding Connect</h1>
      <Link to='/login'>Please Login</Link>
      <br/>
      <Link to='/register'>Please Sign Up</Link>
    </div>
  ) 
}

export default Home;