import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import CatalogHeader from './CatalogHeader'

test('check logo', () => {
  const { container } = render(<CatalogHeader />)
  expect(container.querySelector('.header__logo')).not.toBeNull()
})
