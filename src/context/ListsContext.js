import React, { createContext, useContext, useState } from 'react';

const ListsContext = createContext();

export const ListProvider = ({ children }) => {
   const [collectionOfLists, setCollectionOfLists] = useState([
     { id: 1, name: 'To do', description: 'Task that shoul be done' },
     { id: 2, name: 'In progress', description: 'On going tasks' },
   ]);

  return (
    <ListsContext.Provider value={{ collectionOfLists, setCollectionOfLists }}>
      {children}
    </ListsContext.Provider>
  );
};

export const useLists = () => {
  return useContext(ListsContext);
};