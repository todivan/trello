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

const ListName = styled.div`
    margin: 5px 5px 0px 5px;
    background-color: green;
    padding: 5px 5px;
    bodred-color: black;
    border-style: solid;
    border-radius: 2px;
    border-radius: 10px;
    max-width: 130px;
    width:130px;
    display: inline-block;
`;

const ListDescription = styled.div`
    margin: 0px 5px 2px 5px;
    background-color: lightgreen;
    padding: 5px 5px;
    bodred-color: black;
    border-style: solid;
    border-radius: 2px;
    border-radius: 10px;
    max-width: 130px;
    width:130px;
    font-size: 12px;
    display: inline-block;
`;

const TasksList = (props) => {
    return(
        <Container>
            <ListName>{props.list.name}</ListName> 
            <ListDescription>{props.list.description}</ListDescription> 
            <Task/>
            <Task/>
        </Container>
    );
}

export default TasksList;