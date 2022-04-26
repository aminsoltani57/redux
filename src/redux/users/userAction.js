import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "./userTypes"
import axios from "axios"
function fetchUsersRequest() {
   return {
        type:FETCH_USERS_REQUEST,
    }
    
}
function fetchUsersSuccess(users) {
   return {
        type:FETCH_USERS_SUCCESS,
        payload: users,

    }
}
function fetchUsersFailure(error) {
   return {
        type:FETCH_USERS_FAILURE,
        payload: error,
        
    }
}


//async action creater
export const fetchUsers=()=>{
    return function (dispatch) {
 dispatch(fetchUsersRequest());
 axios.get("http://jsonplaceholder.typicode.com/users").then(res=>{
    const users= res.data;
    dispatch(fetchUsersSuccess(users))
 }).catch(error=>
        dispatch(fetchUsersFailure(error.message))
        )       
        
    }
}
// const store= createStore(reducer, applyMiddleware(reduxThunk, logger));
// store.dispatch(fetchUsers())
