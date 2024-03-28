import { render, screen } from '@testing-library/react'
import SearchAppBar from '../../../components/MenuBar/AppBar'
import React from 'react'

describe('AppBar tests', () => {
  test('app bar text', () => {
    render(<SearchAppBar />)
    const element = screen.getByText('Trello (cover by Ivan)')
    expect(element).toBeInTheDocument()
  })
})
