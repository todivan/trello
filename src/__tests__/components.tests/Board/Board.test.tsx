import React from 'react'
import { render } from '@testing-library/react'
import Board from '../../../components/Board/Board'
import MockListContext from '../../../__TestMocks/MockListContext'

describe('Board tests', () => {
  test('BoardBar exist', () => {
    const { getByTestId } = render(<MockListContext><Board /></MockListContext>)
    const element = getByTestId('BoardBar')
    expect(element).toBeInTheDocument()
  })
  test('BoardContent exist', () => {
    const { getByTestId } = render(<MockListContext><Board /></MockListContext>)
    const element = getByTestId('BoardContent')
    expect(element).toBeInTheDocument()
  })
})
