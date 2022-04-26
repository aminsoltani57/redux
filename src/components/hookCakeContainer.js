
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/Cake/cakeAction";

const HookCakeContainer = (props) => {
    const numOfCake= useSelector(state=>state.cake.numOfCake)//you should put .cake because of RootReducer 
    const dispatch=useDispatch()
    return ( 

        <div>
        <p> number of cake :{numOfCake}</p>
        <button onClick={()=>dispatch(buyCake())}>buy cake</button>
    </div>
     );
}
 
export default HookCakeContainer;