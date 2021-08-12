import { combineReducers } from "redux"
import { productReducer} from "./productReducer";
// import {cartReducer} from './cartReducer'

const reducers = combineReducers({
    productReducer,
    // product: selectedProductReducer,
    // cartReducer,
})

export default reducers
