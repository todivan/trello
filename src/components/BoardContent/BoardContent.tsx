import React from 'react';
import TasksList from "../TaskList/TasksList";
import { useLists } from "../../context/ListsContext";
import { TaskProvider } from '../../context/TaskContext';
import { Button, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const BoardContent = () => {
    const {collectionOfLists, setCollectionOfLists} = useLists();

        const addNewList = () => {
            const newObject = {
              id: collectionOfLists.length + 1,
              name: `Name ${collectionOfLists.length + 1}`,
              description: `Description ${collectionOfLists.length + 1}`,
            };
            setCollectionOfLists((prevList) => [...prevList, newObject]);
          };

    return(
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
        >
            <TaskProvider>
                {collectionOfLists.map((item) => (
                    <TasksList key={item.id} list={item} />
                ))} 
                <Button variant="outlined" startIcon={<AddIcon />} onClick={addNewList}>
                    Add another list
                </Button>
            </TaskProvider>
        </Stack>
    );
}

export default BoardContent;