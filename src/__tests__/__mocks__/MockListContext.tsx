import React from 'react'
import { ListsContext } from '../../context/ListsContext'

const mockContextValue = {
  collectionOfLists: [
    { id: 3, name: 'To do', position: 1, description: 'Task that shoul be done' },
    { id: 4, name: 'In progress', position: 2, description: 'On going tasks' }
  ],
  setCollectionOfLists: jest.fn()
}

interface WrapperProps {
  children: React.ReactNode
}

const MockListContext: React.FC<WrapperProps> = ({ children }) => (
  <ListsContext.Provider value={mockContextValue}>
    {children}
  </ListsContext.Provider>
)

export default MockListContext
