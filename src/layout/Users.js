import React, { useEffect,useState } from 'react'
import FlexContainer from 'react-styled-flexbox';
import UserCards from './UserCards';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUsers } from "../actions/userActions";
import axios from 'axios'
const Users = (props) => {
  const[users,setUsers] =useState([])
    useEffect(() => {
      axios.get('http://localhost:5000/users')
     .then((res =>{
      console.log(res.data)
       setUsers(res.data)
     
     }))
    }, []);

    return (
      <FlexContainer wrapWrap = {true} justifySpaceAround = {true}>

  {users.map((user) => {
            return (
            <Link to={`user/${user.id}`} key={user.id}>
              <UserCards
                key = {user.id}
                name= {user.name}
                email = {user.email}
                 location= {user.location}
                 projects={user.projects}
                 website={user.website}
                 type_id={user.type_id}
          
                 
              />
            </Link>
            );
          })}
          
      </FlexContainer>
  )
  }
  const mapStateToProps = state => {
    return {
        ...state.users
    }
}
export default connect(mapStateToProps, {getUsers})(Users)