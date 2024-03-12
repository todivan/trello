import Task from "../Task/Task";
import { TaskProvider, useTasks } from "../../context/TaskContext";
import { TListProps, TTask } from "../../types/CommonTypes";
import { Box, Button, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ListHeader from "./ListHeader";
import ListMoveNavigation from "./ListMoveNavigation";
import { useState } from "react";

const TasksList: React.FC<TListProps> = ({ list, updateList, isFocusOnNewList,  changePosition }) => {

    const {collectionOfTasks, setCollectionOfTasks} = useTasks();
    const [newAddedId, setNewAddedId] = useState<number>(-1);

    const updateTask = (updatedItem: TTask) => {
        setCollectionOfTasks(prevList => prevList.map(item => (item.id === updatedItem.id ? updatedItem : item)));
      };

    const addNewTask = () => {
        const newObject = {
          id: collectionOfTasks.length + 1,
          name: `Name ${collectionOfTasks.length + 1}`,
          listId: list.id,
          position: collectionOfTasks.length + 1,
          description: `Description ${collectionOfTasks.length + 1}`,
        };
        setCollectionOfTasks(prevList => [...prevList, newObject]);
        setNewAddedId(newObject.id);
      };

    const changeTaskPosition = (listId: number, offset: number) => {
        const index = collectionOfTasks.findIndex((item) => item.id === listId);

        if (index === -1) {
            return;
        }

        const updatedList = [...collectionOfTasks];
        const itemToMove = updatedList[index];
        const newPosition = itemToMove.position + offset;

        if (newPosition < 1 || newPosition > updatedList.length) {
            return;
        }

        updatedList.splice(index, 1);

        updatedList.splice(newPosition - 1, 0, itemToMove);

        updatedList.forEach((item, i) => {
            item.position = i + 1;
        });

        setCollectionOfTasks(updatedList);
    };

    const sortedTsks = [...collectionOfTasks]
    .sort((a, b) => a.position > b.position ? 1 : -1)

    return(
        <TaskProvider>
            <Box borderRadius={3} sx={{ bgcolor:'#323a48', padding: '10px' }}>
                <Stack spacing={1}>
                    <Box>
                        <ListHeader list={list} updateList={updateList} isFocusOnNewList={isFocusOnNewList}/>
                        <ListMoveNavigation listId={list.id} changePosition={changePosition}/>
                    </Box>
                    
                    {sortedTsks.filter(x => x.listId === list.id).map((item) => (
                        <Task key={item.id} task={item} updateTask={updateTask} isFocusOnNew={newAddedId === item.id} changeTaskPosition={changeTaskPosition} />
                    ))} 

                    <Button variant="outlined" sx={{ color:'white' }} startIcon={<AddIcon />} onClick={addNewTask}>
                    Add a card
                    </Button>
                </Stack>
            </Box>
        </TaskProvider>
    );
}

export default TasksList;