import { render, screen } from '@testing-library/react'
import BoardBar from '../../../components/MenuBar/BoardBar'
import React from 'react'

test('board bar text', () => {
  render(<BoardBar />)
  const element = screen.getByText('Board name')
  expect(element).toBeInTheDocument()
})
