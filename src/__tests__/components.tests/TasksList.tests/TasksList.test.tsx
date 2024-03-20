import { render } from '@testing-library/react'
import TasksList, { type TListProps } from '../../../components/TaskList/TasksList'
import { type TList } from '../../../types/CommonTypes'
import { TaskProvider } from '../../../context/TaskContext'
import { ListProvider } from '../../../context/ListsContext'
import React from 'react'

const listValue: TList = { id: 1, name: 'testList', description: 'listDescription', position: 3 }

const MockTasksList: React.FC<TListProps> = ({ key, list, isFocusOnNewList }: TListProps) => {
  return (
    <ListProvider>
        <TaskProvider>
            <TasksList key={key} list={list} isFocusOnNewList={isFocusOnNewList} />
        </TaskProvider>
    </ListProvider>
  )
}

describe('TasksList tests', () => {
  test('Button exist', () => {
    const screen = render(<MockTasksList key={1} list={listValue} isFocusOnNewList={false} />)
    const listHeaderElement = screen.getByRole('button')
    expect(listHeaderElement).toBeInTheDocument()
  })
  test('ListHeader exist', () => {
    const { getByTestId } = render(<MockTasksList key={1} list={listValue} isFocusOnNewList={false} />)
    const listHeaderElement = getByTestId('list-header')
    expect(listHeaderElement).toBeInTheDocument()
  })
})
