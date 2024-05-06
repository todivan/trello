import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client'
import { type TTask, type TTaskContextType } from '../types/CommonTypes';
export const TaskContext = createContext<TTaskContextType | null>(null);

const GET_DATA = gql`
{
    allFilms {
        films {
            title
            id
            releaseDate
        }
    }
}
`;

export interface TMovie {
    id: string
    title: string
    releaseDate: string
}
export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { loading, data } = useQuery(GET_DATA);
    const [collectionOfTasks, setCollectionOfTasks] = useState<TTask[]>([])

    let index = 1;
    useEffect(() => {
        const listOfTasks: TTask[] = [];
        if (data) {
            data.allFilms.films.map((movie: TMovie) => {
                const newObject = {
                    id: index,
                    name: movie.title,
                    listId: index % 2 === 0 ? 1 : 2,
                    position: index,
                    description: `Released ${movie.releaseDate}`
                };
                index++
                listOfTasks.push(newObject)
            })
            setCollectionOfTasks(listOfTasks);
        }
    }, [data]);

    // const [collectionOfTasks, setCollectionOfTasks] = useState<TTask[]>([
    //     { id: 1, name: 'Crate adapter class', listId: 1, position: 1, description: 'Create class that will addapt Trelo interface with client API' },
    //     { id: 2, name: 'Unit test for adapter', listId: 2, position: 1, description: 'Unit testing for adapter functionality at least 80%' }
    // ]);

    return (
        <TaskContext.Provider value={{ collectionOfTasks, setCollectionOfTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = (): TTaskContextType => {
    const context = useContext(TaskContext);
    if (context == null) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
};
