import store from "./redux/store"
import "./App.css"
import HookCakeContainer from "./components/hookCakeContainer";
import CakeContainer from "./components/cakeContainer/cakeContainer";
import {Provider} from "react-redux"
import HookIceCreamContainer from "./components/iceCreamContiner";

import CakeWithPayLoad from "./components/cakeWithPayLoad";
import UserContainer from "./components/userContainer";
const App = () => {
    return ( 
    <Provider store={store}>
      <div>
        <CakeContainer />
        <HookCakeContainer />
        <HookIceCreamContainer />
        <CakeWithPayLoad />
        <UserContainer />
       </div>
    </Provider>
     );
}
 
export default App;