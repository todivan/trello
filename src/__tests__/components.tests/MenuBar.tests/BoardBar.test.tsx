import { render, screen } from '@testing-library/react'
import BoardBar from '../../../components/MenuBar/BoardBar'

test('board bar text', () => {
  render(<BoardBar />)
  const linkElement = screen.getByText('Board name')
  expect(linkElement).toBeInTheDocument()
})
