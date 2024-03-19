import { render } from '@testing-library/react'
import Task, { type TTaskProps } from '../../../components/Task/Task'
import type { TTask } from '../../../types/CommonTypes'

const taskValue: TTask = { id: 1, name: 'testTask', description: 'taskDescription', listId: 2, position: 3 }
const taskCollectionValue: TTask[] = []

const mockedSetCollectionOfTasks = jest.fn()

const MockTask: React.FC<TTaskProps> = ({ task, isFocusOnNew, collectionOfTasks, setCollectionOfTasks }: TTaskProps) => {
  return (
      <Task key={1} task={task} isFocusOnNew={isFocusOnNew} collectionOfTasks={collectionOfTasks} setCollectionOfTasks={setCollectionOfTasks} />
  )
}

describe('Task tests', () => {
  test('Edit field exist', () => {
    const result = render(<MockTask key={1} task={taskValue} isFocusOnNew={true} collectionOfTasks={taskCollectionValue} setCollectionOfTasks={mockedSetCollectionOfTasks} />)
    const linkElement = result.container.querySelector('#outlined-multiline-static')
    expect(linkElement).toBeInTheDocument()
  })
  test('View field exist', () => {
    const result = render(<MockTask key={1} task={taskValue} isFocusOnNew={false} collectionOfTasks={taskCollectionValue} setCollectionOfTasks={mockedSetCollectionOfTasks} />)
    const linkElement = result.container.querySelector('#outlined-adornment-weight')
    expect(linkElement).toBeInTheDocument()
  })
})
