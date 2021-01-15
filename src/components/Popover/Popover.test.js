import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import Popover from './Popover'

test('more filters button exist', () => {
  const { getByText } = render(<Popover filterItem="more filters" />)
  expect(getByText(/more filters/i)).toBeInTheDocument()
})
