import styled from "styled-components"

export default styled.div`
    color: ${props => props.theme.color.item};
    background-color: ${props => props.theme.background.item};
    ${props => props.theme.border}

    width: 30%;
    margin: 1.5%;
    padding: 1.5%;
`;