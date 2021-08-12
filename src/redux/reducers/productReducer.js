import { ActionTypes } from "../const/index-types"


const initalState = {
    products: []
}

export const productReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_DATA_SUCCESS:
            // return state
            return { ...state, products: payload }
        default:
            return state
    }
}