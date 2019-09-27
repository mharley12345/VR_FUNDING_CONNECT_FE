import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"





const Nav = () => (
  <Menu className='navbar' size='massive' >
    <Menu.Item position='right'>
      <Link to="/">
   VR Funding Connect
      </Link> 
    </Menu.Item>
    <Menu.Item position='right'>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </Menu.Item>
    <Menu.Item >
      <Link to="/register">
        <Button primary>Sign Up</Button>
      </Link>
    </Menu.Item>
  </Menu>
)

export default Nav