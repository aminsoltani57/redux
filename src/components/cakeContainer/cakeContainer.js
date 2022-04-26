import { connect } from "react-redux";
import { buyCake } from "../../redux/Cake/cakeAction";

const CakeContainer = (props) => {
    return ( 
        <div>
            <p> number of cake :{props.numOfCake}</p>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
     );
}
 
// export default CakeContainer;
//1state 2setState 3connect redux to react
const mapStateToProps=(state)=>{
    return{
        numOfCake:state.cake.numOfCake, //you should put .cake because of RootReducer 
    }
}
const mapdispatchToProps=(dispatch)=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(CakeContainer)