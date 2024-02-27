import styled from "styled-components";

const Container = styled.div`
    margin: 5px;
    background-color: gray;
    padding: 10px;
    bodred-color: black;
    border-style: solid;
    border-radius: 2px;
    border-radius: 10px;
    max-width: 130px;
    width:130px;
`;

const Description = styled.p`
    margin: 5px;
    font-size:10px
`;

const Task = (props) => {
    return(
        <Container>
            <h3>{props.task.name}</h3>
            <Description>{props.task.description}</Description>
        </Container>
    );
}

export default Task;