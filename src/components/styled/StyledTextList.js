import styled from "styled-components"

export default styled.div`
    color: ${props => props.theme.color.list};
    background-color: ${props => props.theme.background.list};
    ${props => props.theme.border}

    width: 90%; height: fit-content;
    margin: 1% 0%;
    padding: 2% 0%;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 3.6rem;
        text-decoration: underline;
    }

    div.box{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center; justify-content: center;
    }
`;