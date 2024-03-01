/* eslint-disable no-mixed-operators */
import React, { createContext, useContext, useState } from 'react';
import { TListContextType, TList } from '../types/CommonTypes';


const ListsContext = createContext<TListContextType | null>(null);

export const ListProvider = ({ children }) => {
   const [collectionOfLists, setCollectionOfLists] = useState<TList[]>([
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