import React, { useEffect } from "react";
import StyledTextList from "./styled/StyledTextList";
import Text from "./Text"
import { connect } from "react-redux";
import {getTexts} from "../state/actions";

function TextList({texts, getTexts}){
    useEffect(() => {
        getTexts();
    }, [getTexts]);

    return(
        <StyledTextList>
            {texts?
                texts.map((item, index) => <Text key={index} item={item} />)
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