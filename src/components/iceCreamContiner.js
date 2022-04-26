
import { useSelector, useDispatch } from "react-redux";

import { buyIceCream } from "../redux/IceCream/iceCreamAction";

const HookIceCreamContainer = (props) => {
    const numOfIceCream= useSelector(state=>state.iceCream.numOfIceCream)//you should put .iceCream because of RootReducer 
    const dispatch=useDispatch()
    return ( 

        <div>
        <p> number of iceCream :{numOfIceCream}</p>
        <button onClick={()=>dispatch(buyIceCream())}>buy icecream</button>
    </div>
     );
}
 
export default HookIceCreamContainer;