import React, { useEffect,useState } from 'react'
import FlexContainer from 'react-styled-flexbox';
import UserCards from './UserCards';

import { connect } from "react-redux";
import { getUser } from "../actions/userActions";
import axios from 'axios'
const User = (props) => {
  const[users,setUser] =useState([])
  
    useEffect(() => {
  
        const id = props.match.params.id;
      axios.get(`http://localhost:5000/users/${id}`)
      
     .then((response =>{
  
      console.log(response.data)
       setUser(response.data)
       
     
     }))
     .catch(error =>{console.log(error)})
     
    }, [props.match.params.id]);
  
    return (
      <FlexContainer  wrapWrap = {true} justifySpaceAround = {true}>

  
         
         
              <UserCards
                key = {users.id}
                name= {users.name}
                email = {users.email}
                 location= {users.location}
                 projects={users.projects}
                 website={users.website}
                 type_id={users.type_id}/>
    
          
      </FlexContainer>
  )
  }
  const mapStateToProps = state => {
    return {
        ...state.users
    }
}
export default connect(mapStateToProps, {getUser})(User)