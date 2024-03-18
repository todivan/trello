import React, { createContext, useContext, useState } from 'react'
import { type TListContextType, type TList } from '../types/CommonTypes'

const ListsContext = createContext<TListContextType | null>(null)

export const ListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collectionOfLists, setCollectionOfLists] = useState<TList[]>([
    { id: 1, name: 'To do', position: 1, description: 'Task that shoul be done' },
    { id: 2, name: 'In progress', position: 2, description: 'On going tasks' }
  ])

  return (
    <ListsContext.Provider value={{ collectionOfLists, setCollectionOfLists }}>
      {children}
    </ListsContext.Provider>
  )
}

export const useLists = (): TListContextType => {
  const context = useContext(ListsContext)
  if (context == null) {
    throw new Error('useLists must be used within a ListProvider')
  }
  return context
}
