import styled from "styled-components";
import TasksList from "./TasksList";

const Container = styled.div`
    margin: 5px;
    background-color: green;
    padding: 10px;
    height: 400px;
    float: left;
`;

const Board = () => {
    return(
        <Container>
            <TasksList/>
            <TasksList/>
        </Container>
    );
}

export default Board;