import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger"
import RootReducer from "./RootReducer"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

 const store=createStore(RootReducer, composeWithDevTools(applyMiddleware(logger, thunk)) )
 export default store