import {SET_ACCOUNT,GET_USERS,SET_USERS,UPDATE_USER,DELETE_USER,IS_LOADING_USERS,IS_LOADING_ACCOUNT, SET_USER} from '../actions/userActions'

const initialState = {
    account:{},
    users:[],
    user: [],
    projects:[],
    loading:true,
    isLoadinAccount:true,
    isLoadinUsers:true,
    error:{}
}
export const reducer = (state = initialState, action) => {
    const { type, payload} = action
    switch (type) {
        case SET_ACCOUNT:
                return { ...state, account: action.account, isLoadingAccount: false };
    
        case SET_USERS:
            return {  ...state, users: action.users,   }
            case SET_USER:
                return{...state,user:action.user}
    case UPDATE_USER:
        return{
            ...state,
            projects:payload,
            loading:false
        }

      default :
         return {       state }
    }
    }
    

    