import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'

test('button is working', () => {
  const { getByText } = render(<Button children={['Size']} className={'size'} tooltip={'up'} />)
  expect(getByText(/Size/i)).toBeInTheDocument()
})
