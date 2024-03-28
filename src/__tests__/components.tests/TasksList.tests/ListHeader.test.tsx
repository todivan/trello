import { render } from '@testing-library/react'
import React from 'react'
import ListHeader, { type TListHeaderProps } from '../../../components/TaskList/ListHeader'
import { type TTask, type TList } from '../../../types/CommonTypes'
import MockListContext from '../../../__TestMocks/MockListContext'

const listValue: TList = { id: 1, name: 'testTask', description: 'taskDescription', position: 3 }
const taskCollectionValue: TTask[] = []

const MockListHeader: React.FC<TListHeaderProps> = ({ list, isFocusOnNewList, collectionOfTasks }: TListHeaderProps) => {
  return (
    <MockListContext>
      <ListHeader list={list} isFocusOnNewList={isFocusOnNewList} collectionOfTasks={collectionOfTasks} />
    </MockListContext>
  )
}

describe('ListHeader tests', () => {
  test('ListHeaderView text', () => {
    const source = render(<MockListHeader list={listValue} isFocusOnNewList={false} collectionOfTasks={taskCollectionValue} />)
    const element = source.getByTestId('ListHeaderView')
    expect(element).toBeInTheDocument()
  })
  test('ListHeaderEdit text', () => {
    const source = render(<MockListHeader list={listValue} isFocusOnNewList={true} collectionOfTasks={taskCollectionValue} />)
    const element = source.getByTestId('ListHeaderEdit')
    expect(element).toBeInTheDocument()
  })
})
