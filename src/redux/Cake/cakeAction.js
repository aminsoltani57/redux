import { BUY_CAKE } from "./cakeType";
export function buyCake(numbers=1){
    return{
        type:BUY_CAKE,
        payload:numbers,
    }
}