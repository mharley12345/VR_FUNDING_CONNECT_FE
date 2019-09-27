import React from "react";
import styled from "styled-components";
import FlexContainer from 'react-styled-flexbox';

const Box = styled.div`
border:1px solid black;
margin-top:20px;
background-color:black;
color:white;
padding:3px;
width: 80vw;
text-align:center
border-radius:3px;
-webkit-box-shadow:0 0 8px rgba(0,0,0,.40);
-moz-box-shadow:0 0 8px rgb(153,153,153);
-o-box-shadow:0 0 8px #999;
box-shadow:0 0 8px #999999;
`;

const TitleAttys = styled.div`
border-bottom:1px solid white;
font-family: 'Anton', sans-serif;
margin-bottom:5px;
padding:2px;
background-color:green;
color:black
display:flex;
align-items:center;
justify-content:center;
`;
const BoxAttys = styled.div`
font-family: 'Anton', sans-serif;
color:white;
margin-left:5px;
`;
const Button = styled.button`
border-radius:8px;
width:100px;
height:25px;
background-color:#black;
color:white;
margin:4px;
`;

const UserCards = (props) => {
    console.log(props)
    return (
     
        <Box className="cards">
          
            <TitleAttys>Name: {props.name}</TitleAttys>
            <BoxAttys>Email: {props.email}</BoxAttys> 
            <BoxAttys>Location: {props.location}</BoxAttys>           
    {/* <BoxAttys>Projects: {props.projects} </BoxAttys> */}
            <BoxAttys>Website:{props.website}</BoxAttys>
            
            {/* <FlexContainer justifyCenter = {true}>
            
            </FlexContainer> */}
        </Box>
     
    );
  };
  
  export default UserCards;