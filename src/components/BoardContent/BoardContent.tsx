import React from 'react';
import TasksList from "../TaskList/TasksList";
import { useLists } from "../../context/ListsContext";
import { TaskProvider } from '../../context/TaskContext';
import { Button, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { TList } from '../../types/CommonTypes';

const BoardContent = () => {
    const {collectionOfLists, setCollectionOfLists} = useLists();

    const addNewList = () => {
        const newObject = {
            id: collectionOfLists.length + 1,
            name: `Name ${collectionOfLists.length + 1}`,
            position: collectionOfLists.length + 1,
            description: `Description ${collectionOfLists.length + 1}`,
        };
        setCollectionOfLists((prevList) => [...prevList, newObject]);
        };

    const updateList = (updatedItem: TList) => {
        setCollectionOfLists(prevList => prevList.map(item => (item.id === updatedItem.id ? updatedItem : item)));
        };

    const changePosition = (listId: number, offset: number) => {
        const index = collectionOfLists.findIndex((item) => item.id === listId);

        if (index === -1) {
            return;
        }

        const updatedList = [...collectionOfLists];
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

        // Update the context with the updated list
        setCollectionOfLists(updatedList);
    };

    const sortedLists = [...collectionOfLists]
        .sort((a, b) => a.position > b.position ? 1 : -1)

    return(
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
        >
            <TaskProvider>
                {sortedLists.map((item) => (
                    <TasksList key={item.id} list={item} updateList={updateList} changePosition={changePosition}/>
                ))} 
                <Button sx={{ color:'white' }} variant="outlined" startIcon={<AddIcon />} onClick={addNewList}>
                    Add another list
                </Button>
            </TaskProvider>
        </Stack>
    );
}

export default BoardContent;