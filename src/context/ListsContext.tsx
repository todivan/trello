/* eslint-disable no-mixed-operators */
import React, { createContext, useContext, useState } from 'react';
import { TListContextType, TList } from '../types/CommonTypes';


const ListsContext = createContext<TListContextType | null>(null);

export const ListProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
   const [collectionOfLists, setCollectionOfLists] = useState<TList[]>([
     { id: 1, name: 'To do', position: 0, description: 'Task that shoul be done' },
     { id: 2, name: 'In progress', position: 1, description: 'On going tasks' },
   ]);

  return (
    <ListsContext.Provider value={{ collectionOfLists, setCollectionOfLists }}>
      {children}
    </ListsContext.Provider>
  );
};

export const useLists = (): TListContextType => {
  const context = useContext(ListsContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};