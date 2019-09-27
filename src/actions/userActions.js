
import axios from 'axios'
export const SET_ACCOUNT = "SET_ACCOUNT";
export const GET_USERS = "GET_USERS";
export const SET_USERS = "SET_USERS";
export const SET_USER = "SET_USER";
export const GET_USER = 'GET_USER'
export const UPDATE_PROJECT = 'UPDATE_PROJECT'
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const IS_LOADING_ACCOUNT = "IS_LOADING_ACCOUNT";
export const IS_LOADING_USERS = "IS_LOADING_USERS";
export const IS_LOADING_USER = "IS_LOADING_USER"
export  const ERROR = 'ERROR';



    
  
export const getAccountDetails = _ => dispatch => {
    dispatch({ type: IS_LOADING_ACCOUNT, payload: true });

    axios.get("http://localhost:5000/users")
        .then(res => {
            let account = res.data.find(e => e.username === localStorage.getItem("username"));
            dispatch({ type: SET_ACCOUNT, account });
        })
}

export const getUsers = id => dispatch => {
    dispatch({ type: IS_LOADING_USERS, payload: true });

    axios.get("http://localhost:5000/users")
        .then(res => {
            let users = res.data.filter(e => e.id === id);
            dispatch({ type: SET_USERS, users });
        })
}
export const getUser = id => dispatch => {
    dispatch({ type: IS_LOADING_USER, payload: true });

    axios.get("http://localhost:5000/users")
        .then(res => {
            let user= res.data.filter(e => e.id === id);
            dispatch({ type: SET_USER, user });
        })
}

export const addProject = (formData, history) => async dispatch => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
  
      const res = await axios.put('http://localhost:5000/projects', formData, config);
  
      dispatch({
        type: UPDATE_PROJECT,
        payload: res.data
      });
  
      dispatch(alert('Project Added', 'success'));
  
      history.push('/dashboard');
    } catch (err) {
      const errors = err.response;
  
      if (errors) {
        errors.forEach(error => dispatch(alert(error.msg, 'danger')));
      }
  
    
    }
  };
