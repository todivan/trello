import React, { createContext, useContext, useState } from 'react';
import { TTask, TTaskContextType } from '../types/CommonTypes';

const TaskContext = createContext<TTaskContextType | null>(null);

export const TaskProvider: React.FC<{children: React.ReactNode}>  = ({ children }) => {
   const [collectionOfTasks, setCollectionOfTasks] = useState<TTask[]>([
     { id: 1, name: 'Crate adapter class', listId: 1, position: 1, description: 'Create class that will addapt Trelo interface with client API' },
     { id: 2, name: 'Unit test for adapter', listId: 2, position: 1, description: 'Unit testing for adapter functionality at least 80%' },
   ]);

  return (
    <TaskContext.Provider value={{ collectionOfTasks, setCollectionOfTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = (): TTaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};