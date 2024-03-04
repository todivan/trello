import Task from "../Task/Task";
import { TaskProvider, useTasks } from "../../context/TaskContext";
import { TTask } from "../../types/CommonTypes";
import { Box, Button, OutlinedInput, Stack } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';

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

      const openListDetails = () => {
        alert("Open list details");
      }

    return(

        <TaskProvider>
            <Box sx={{ bgcolor:'#323a48', padding: '10px' }}>
                <Stack spacing={2}>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        multiline
                        minRows={1}
                        maxRows={8}
                        defaultValue={props.list.name}
                        endAdornment={<MoreHorizIcon fontSize="small" onClick={openListDetails} cursor='pointer'></MoreHorizIcon>}
                        aria-describedby="outlined-weight-helper-text"
                        sx={{ border: '0px solid white', width:250 }}
                        inputProps={{
                        'aria-label': 'weight', readOnly: true,
                        }}
                    />
                    {collectionOfTasks.filter(x => x.listName === props.list.name).map((item) => (
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