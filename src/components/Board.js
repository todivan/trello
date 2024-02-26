import styled from "styled-components";
import TasksList from "./TasksList";
import { useLists } from "../context/ListsContext";
import React, { useState } from 'react';

const Container = styled.div`
    margin: 5px;
    background-color: green;
    padding: 10px;
    height: 400px;
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

    const addNewObject = () => {
        const newObject = {
          id: 'id',
          name: `Name`,
          description: `Description`,
        //   id: collectionOfLists.length + 1,
        //   name: `Name ${collectionOfLists.length + 1}`,
        //   description: `Description ${collectionOfLists.length + 1}`,
        };
        setCollectionOfLists(prevList => [...prevList, newObject]);
      };

    return(
        <Container>
            {collectionOfLists.map((item) => (
                <TasksList key={item.id} list={item} />
            ))} 
            <AddListButton onClick={addNewObject}>Add list </AddListButton>
        </Container>
    );
}

export default Board;