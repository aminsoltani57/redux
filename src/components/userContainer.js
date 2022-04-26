import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/users/userAction";

const UserContainer = (props) => {
    const userData=useSelector(state=>state.user)
    const {error, users, loading}=userData
    const dispatch=useDispatch()
    useEffect(() =>{
        dispatch(fetchUsers());
    },[])
    return ( 
        <div>
       {loading ? 
       (<p>loading...</p>) 
       : error ? (<p>{error}</p>) : 
       (userData  && users && (<div>
           <h2>userlist</h2>
               {users.map(user=> (<p key={user.id}>{user.name}</p>))}
       </div>))}
        </div>
     );
}
 
export default UserContainer;