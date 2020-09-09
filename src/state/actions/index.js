import axios from "axios";

export const GET_PENDING = "GET_PENDING";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

export const getTexts = () => {
    return(dispatch) => { // invoke dispatch to send actions
        dispatch({type: GET_PENDING});
    
        axios.get("https://baconipsum.com/api/?type=meat-and-filler")
        .then(response => {
            //console.log(response);
            dispatch({type: GET_SUCCESS, data: response.data});
        })
        .catch(error => {
            //console.log(error)
            dispatch({type: GET_FAILURE, data: ["oh no an error"]});
        })
    }
}