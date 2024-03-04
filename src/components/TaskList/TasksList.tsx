import Task from "../Task/Task";
import { TaskProvider, useTasks } from "../../context/TaskContext";
import { AddTaskButton, Container, ListDescription, ListName } from "./TasksList.styled";
import { TTask } from "../../types/CommonTypes";

const TasksList = (props) => {

    const {collectionOfTasks, setCollectionOfTasks} = useTasks();

    const updateTask = (updatedItem: TTask) => {
        setCollectionOfTasks(prevList => prevList.map(item => (item.id === updatedItem.id ? updatedItem : item)));
      };

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
                    <Task key={item.id} task={item} updateTask={updateTask} />
                ))} 
                <AddTaskButton onClick={addNewTask}>Add task</AddTaskButton>
            </TaskProvider>
        </Container>
    );
}

export default TasksList;