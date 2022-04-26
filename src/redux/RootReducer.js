import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import iceCreamReducer from "./IceCream/iceCreamReducer";
import userReducer from "./users/userReducer";
const RootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer,
})
export default RootReducer;