import Task from "../Task/Task";
import { TaskProvider, useTasks } from "../../context/TaskContext";
import { TListProps, TTask } from "../../types/CommonTypes";
import { Box, Button, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ListHeader from "./ListHeader";

const TasksList: React.FC<TListProps> = ({ key, list, updateList }) => {

    const {collectionOfTasks, setCollectionOfTasks} = useTasks();

    const updateTask = (updatedItem: TTask) => {
        setCollectionOfTasks(prevList => prevList.map(item => (item.id === updatedItem.id ? updatedItem : item)));
      };

    const addNewTask = () => {
        const newObject = {
          id: collectionOfTasks.length + 1,
          name: `Name ${collectionOfTasks.length + 1}`,
          listName: list.name,
          description: `Description ${collectionOfTasks.length + 1}`,
        };
        setCollectionOfTasks(prevList => [...prevList, newObject]);
      };

    return(
        <TaskProvider>
            <Box borderRadius={3} sx={{ bgcolor:'#323a48', padding: '10px' }}>
                <Stack spacing={2}>
                    <ListHeader key={key} list={list} updateList={updateList} />

                    {collectionOfTasks.filter(x => x.listName === list.name).map((item) => (
                        <Task key={item.id} task={item} updateTask={updateTask} />
                    ))} 

                    <Button variant="outlined" startIcon={<AddIcon />} onClick={addNewTask}>
                    Add a card
                    </Button>
                </Stack>
            </Box>
        </TaskProvider>
    );
}

export default TasksList;