import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
   const [collectionOfTasks, setCollectionOfTasks] = useState([
     { id: 1, name: 'Crate adapter class', listName: 'To do', description: 'Create class that will addapt Trelo interface with client API' },
     { id: 2, name: 'Unit test for adapter', listName: 'In progress', description: 'Unit testing for adapter functionality at least 80%' },
   ]);

  return (
    <TaskContext.Provider value={{ collectionOfTasks, setCollectionOfTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};