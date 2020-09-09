// import action types from ../actions
import {GET_FAILURE, GET_SUCCESS, GET_PENDING} from "../actions";

const initialState = {
    texts = ["Please wait while the application loads."],
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_PENDING:
            return {...state, texts: ["Please wait while data loads."]};
        case GET_SUCCESS:
            return {...state, texts: action.data};
        case GET_FAILURE:
            return {...state, texts: action.data};
        default:
            return state;
    }
}