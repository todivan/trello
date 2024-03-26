import React from 'react'
import { render } from '@testing-library/react'
import LeftMenu from '../../../components/LeftMenu/LeftMenu'

describe('LeftMenu tests', () => {
  test('LeftMenu exist', () => {
    const { getByTestId } = render(<LeftMenu />)
    const element = getByTestId('LeftMenu')
    expect(element).toBeInTheDocument()
  })
})
