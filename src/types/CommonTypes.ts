<<<<<<< HEAD
import { type SortableObject } from '../Utils/ChangePosition'
import type React from 'react'
=======
import { type SortableObject } from '../Utils/ChangePosition';
>>>>>>> 1347c5f (Trello: provide all rules for Eslint)

export interface TList {
    id: number
    name: string
    position: number
    description: string
}

export interface TListContextType {
    collectionOfLists: TList[]
    setCollectionOfLists: React.Dispatch<React.SetStateAction<TList[]>>
}

export type TTask = {
    name: string
    listId: number
    description: string
} & SortableObject;

export interface TTaskContextType {
    collectionOfTasks: TTask[]
    setCollectionOfTasks: React.Dispatch<React.SetStateAction<TTask[]>>
}
