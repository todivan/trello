import { render } from '@testing-library/react'
import TasksList, { type TListProps } from '../../../components/TaskList/TasksList'
import { type TList } from '../../../types/CommonTypes'
import { TaskContext } from '../../../context/TaskContext'
import { ListProvider } from '../../../context/ListsContext'
import React from 'react'

const listValue: TList = { id: 1, name: 'testList', description: 'listDescription', position: 3 }

const mockContextValue = {
  collectionOfTasks: [
    { id: 3, name: 'Mock Task 1', listId: 1, position: 2, description: 'Mock description 1' },
    { id: 4, name: 'Mock Task 2', listId: 1, position: 2, description: 'Mock description 2' }
  ],
  setCollectionOfTasks: jest.fn()
}

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <TaskContext.Provider value={mockContextValue}>
    {children}
  </TaskContext.Provider>
)

const MockTasksList: React.FC<TListProps> = ({ list, isFocusOnNewList }: TListProps) => {
  return (
    <ListProvider>
        <Wrapper>
            <TasksList list={list} isFocusOnNewList={isFocusOnNewList} />
        </Wrapper>
    </ListProvider>
  )
}

describe('TasksList tests', () => {
  test('Button exist', () => {
    const screen = render(<MockTasksList key={1} list={listValue} isFocusOnNewList={false} />)
    const element = screen.getByText('Add a card')
    expect(element).toBeInTheDocument()
  })
  test('ListHeader exist', () => {
    const { getByTestId } = render(<MockTasksList key={1} list={listValue} isFocusOnNewList={false} />)
    const element = getByTestId('list-header')
    expect(element).toBeInTheDocument()
  })
  test('ListMoveNavigation exist', () => {
    const { getByTestId } = render(<MockTasksList key={1} list={listValue} isFocusOnNewList={false} />)
    const element = getByTestId('ListMoveNavigation')
    expect(element).toBeInTheDocument()
  })
  test('Task exist', () => {
    const { getByTestId } = render(<MockTasksList key={1} list={listValue} isFocusOnNewList={false} />)
    const element = getByTestId('3')
    expect(element).toBeInTheDocument()
    const elementT = getByTestId('4')
    expect(elementT).toBeInTheDocument()
  })
})
