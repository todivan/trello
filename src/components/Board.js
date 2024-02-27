import styled from "styled-components";
import TasksList from "./TasksList";
import { useLists } from "../context/ListsContext";
import React from 'react';
import { TaskProvider } from '../context/TaskContext';

const Container = styled.div`
    margin: 5px;
    background-color: green;
    padding: 10px;
    height: 600px;
    float: left;
`;

const AddListButton = styled.button`
background-color: blue;
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

const Board = () => {
    const {collectionOfLists, setCollectionOfLists} = useLists();

    const addNewList = () => {
        const newObject = {
          id: collectionOfLists.length + 1,
          name: `Name ${collectionOfLists.length + 1}`,
          description: `Description ${collectionOfLists.length + 1}`,
        };
        setCollectionOfLists(prevList => [...prevList, newObject]);
      };

    return(
        <Container>
            <TaskProvider>
                {collectionOfLists.map((item) => (
                    <TasksList key={item.id} list={item} />
                ))} 
                <AddListButton onClick={addNewList}>Add list</AddListButton>
            </TaskProvider>
        </Container>
    );
}

export default Board;