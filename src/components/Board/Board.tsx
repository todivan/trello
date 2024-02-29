import TasksList from "../TaskList/TasksList";
import { useLists } from "../../context/ListsContext";
import React from 'react';
import { TaskProvider } from '../../context/TaskContext';
import { Container, AddListButton } from "./Board.styled";

const Board = () => {
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
        <>
            <Container>
                <TaskProvider>
                    {collectionOfLists.map((item) => (
                        <TasksList key={item.id} list={item} />
                    ))} 
                    <AddListButton onClick={addNewList}>Add list</AddListButton>
                </TaskProvider>
            </Container>
        </>
    );
}

export default Board;