import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
    margin: 5px;
    background-color: darkBlue;
    padding: 10px 5px;
    bodred-color: black;
    border-style: solid;
    border-radius: 2px;
    border-radius: 10px;
    max-width: 160px;
    width:160px;
    display: inline-block;
`;

const TasksList = () => {
    return(
        <Container>
            <Task/>
            <Task/>
        </Container>
    );
}

export default TasksList;