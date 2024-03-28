import { render } from '@testing-library/react'
import React from 'react'
import ListMoveNavigation from '../../../components/TaskList/ListMoveNavigation'
import MockListContext from '../../../__TestMocks/MockListContext'

describe('ListMoveNavigation tests', () => {
  test('ListMoveNavigation text', () => {
    const source = render(<MockListContext><ListMoveNavigation listId={11} /></MockListContext>)
    const element = source.getByTestId('ListMoveNavigation')
    expect(element).toBeInTheDocument()
  })
})
