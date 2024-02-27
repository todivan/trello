import styled from "styled-components";
import Task from "./Task";
import { TaskProvider, useTasks } from "../context/TaskContext";

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
    vertical-align: top;
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

const AddTaskButton = styled.button`
background-color: #008CBA;
color: white;
font-size: 16px;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
margin: 10px;

&:hover {
background-color: darkblue;
}
`;


const TasksList = (props) => {

    const {collectionOfTasks, setCollectionOfTasks} = useTasks();

    const addNewTask = () => {
        const newObject = {
          id: collectionOfTasks.length + 1,
          name: `Name ${collectionOfTasks.length + 1}`,
          listName: props.list.name,
          description: `Description ${collectionOfTasks.length + 1}`,
        };
        setCollectionOfTasks(prevList => [...prevList, newObject]);
      };

    return(
        <Container>
            <TaskProvider>
                <ListName>{props.list.name}</ListName> 
                <ListDescription>{props.list.description}</ListDescription> 
                {collectionOfTasks.filter(x => x.listName === props.list.name).map((item) => (
                    <Task key={item.id} task={item} />
                ))} 
                <AddTaskButton onClick={addNewTask}>Add task</AddTaskButton>
            </TaskProvider>
        </Container>
    );
}

export default TasksList;