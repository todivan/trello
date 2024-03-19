import { render, screen } from '@testing-library/react'
import SearchAppBar from '../../../components/MenuBar/AppBar'

test('App bar text', () => {
  render(<SearchAppBar />)
  const linkElement = screen.getByText('Trello (cover by Ivan)')
  expect(linkElement).toBeInTheDocument()
})
