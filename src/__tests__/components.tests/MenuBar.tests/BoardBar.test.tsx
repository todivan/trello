import { render } from '@testing-library/react'
import BoardBar from '../../../components/MenuBar/BoardBar'
import React from 'react'

describe('BoardBar tests', () => {
  test('board bar text', () => {
    const source = render(<BoardBar />)
    const element = source.getByText('Board name')
    expect(element).toBeInTheDocument()
  })
})
