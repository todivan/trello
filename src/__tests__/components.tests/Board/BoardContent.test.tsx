import { fireEvent, render } from '@testing-library/react'
import BoardContent from '../../../components/Board/BoardContent'
import MockListContext from '../../__mocks__/MockListContext'

const MockBoardContent: React.FC = () => {
  return (
    <MockListContext>
        <BoardContent />
    </MockListContext>
  )
}

describe('BoardContent tests', () => {
  test('Button Add another list exist', () => {
    const source = render(<MockBoardContent />)
    const element = source.getByText('Add another list')
    expect(element).toBeInTheDocument()
  })
  test('TasksList exist', () => {
    const { getByTestId } = render(<MockBoardContent />)
    const element = getByTestId('3')
    expect(element).toBeInTheDocument()
    const elementT = getByTestId('4')
    expect(elementT).toBeInTheDocument()
  })
  test('Add card', () => {
    const screen = render(<MockBoardContent />)
    const addButton = screen.getByText('Add another list')

    fireEvent.click(addButton);
    const elements = screen.getAllByTestId('3')
    expect(elements).toHaveLength(1)
  })
})
