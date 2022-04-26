
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/Cake/cakeAction";

const CakeWithPayLoad = (props) => {
    const numOfCake= useSelector(state=>state.cake.numOfCake)//you should put .cake because of RootReducer 
    const dispatch=useDispatch()
    const [numbers, setNumbers]=useState(0)
    return ( 

        <div>
        <p> number of cake :{numOfCake}</p>
        <input type="text" onChange={(e)=>setNumbers(e.target.value) }/>
        <button onClick={()=>dispatch(buyCake(numbers))}>buy {numbers}cake</button>
    </div>
     );
}
 
export default CakeWithPayLoad;