import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import CatalogFilter from './CatalogFilter'
import App from '../App/App'

test('check tag filters', () => {
  const { getByText } = render(
    <App>
      <CatalogFilter />
    </App>
  )
  expect(getByText(/-none-/i)).toBeInTheDocument()
})
