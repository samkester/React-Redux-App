import styled from "styled-components"

export default styled.div`
    background-color: ${props => props.theme.background.page};

    width: 100%; min-height: 100vh;

    display: flex; justify-content: center;
`;