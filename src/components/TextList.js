import React from "react";
import StyledTextList from "./styled/StyledTextList";
import Text from "./Text"
import { connect } from "react-redux";
import {getTexts} from "../state/actions";

function TextList(props){
    return(
        <StyledTextList>
            {props.texts?
                props.texts.map((item, index) => <Text key={index} item={item} />)
                :
                <div>Please wait, loading.</div>}
        </StyledTextList>
    )
}

export default connect((state) => { return {
    //props
    texts: state.texts,
}},{
    //actionMakers
    getTexts
})(TextList);