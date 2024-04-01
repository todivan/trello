import { cleanup, fireEvent, render } from '@testing-library/react'
import React from 'react'
import ListHeader, { type TListHeaderProps } from '../../../components/TaskList/ListHeader'
import { type TTask, type TList } from '../../../types/CommonTypes'
import MockListContext from '../../__mocks__/MockListContext'

let listValue: TList = { id: 1, name: 'testTask', description: 'taskDescription', position: 3 }
const taskCollectionValue: TTask[] = []

const MockListHeader: React.FC<TListHeaderProps> = ({ list, isFocusOnNewList, collectionOfTasks }: TListHeaderProps) => {
  return (
    <MockListContext>
      <ListHeader list={list} isFocusOnNewList={isFocusOnNewList} collectionOfTasks={collectionOfTasks} />
    </MockListContext>
  )
}

describe('ListHeader tests', () => {
  beforeEach(() => {
    cleanup();
    listValue = { id: 1, name: 'testTask', description: 'taskDescription', position: 3 }
  })
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
  // test('ListHeader list is not empty', () => {
  //   const notEmptyTaskCollectionValue: TTask[] = [
  //     { id: 1, name: 'Crate adapter class', listId: 1, position: 1, description: 'Create class that will addapt Trelo interface with client API' }
  //   ]
  //   const source = render(<MockListHeader list={listValue} isFocusOnNewList={true} collectionOfTasks={notEmptyTaskCollectionValue} />)
  //   const deleteIcon = source.getByTestId('list-header').querySelector('[aria-label="DeleteForeverIcon"]')
  //   if(deleteIcon) {
  //     fireEvent.click(deleteIcon)
  //     const element = source.getByRole('alert')
  //     expect(element).toBeInTheDocument()
  //   } else {
  //     fail('DeleteForeverIcon not found')
  //   }
  // })
  test('ListHeaderEdit enter', () => {
    const source = render(<MockListHeader list={listValue} isFocusOnNewList={true} collectionOfTasks={taskCollectionValue} />)
    const editElement = source.getByDisplayValue('testTask')
    
    fireEvent.change(editElement, { target: { value: 'yes' } })
    fireEvent.keyDown(editElement, { key: 'Enter', code: 'Enter' })

    const element = source.getByTestId('ListHeaderView')
    expect(element).toBeInTheDocument()
  })
  test('ListHeaderEdit esc', () => {
    const source = render(<MockListHeader list={listValue} isFocusOnNewList={true} collectionOfTasks={taskCollectionValue} />)
    const editElement = source.getByDisplayValue('testTask')
    
    fireEvent.change(editElement, { target: { value: 'yes' } })
    fireEvent.keyDown(editElement, { key: 'Escape', code: 'Escape' })

    const element = source.getByTestId('ListHeaderView')
    expect(element).toBeInTheDocument()
  })
  test('ListHeaderEdit click aside', () => {
    const source = render(<MockListHeader list={listValue} isFocusOnNewList={true} collectionOfTasks={taskCollectionValue} />)
    const editElement = source.getByDisplayValue('testTask')
    
    fireEvent.change(editElement, { target: { value: 'yes' } })
    fireEvent.blur(editElement)

    const element = source.getByTestId('ListHeaderView')
    expect(element).toBeInTheDocument()
  })
  // test('ListHeaderEdit open details', () => {
  //   const source = render(<MockListHeader list={listValue} isFocusOnNewList={true} collectionOfTasks={taskCollectionValue} />)
  //   const editElement = source.getByTestId('DetailsIcon')

  //   fireEvent.click(editElement)

  //   const element = source.getByTestId('ItemDetails')
  //   expect(element).toBeInTheDocument()
  // })
  test('ListHeaderEdit switch to edit', () => {
    const source = render(<MockListHeader list={listValue} isFocusOnNewList={false} collectionOfTasks={taskCollectionValue} />)
    const editElement = source.getByTestId('ListName')

    fireEvent.click(editElement)

    const element = source.getByTestId('ListHeaderEdit')
    expect(element).toBeInTheDocument()
  })
})
