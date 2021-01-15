import { capitalize } from './helpers.js'

describe('test string capitalize', () => {
  it('no error message', () => {
    expect(capitalize('test')).toBe('Test')
  })
  it('test numbers', () => {
    expect(capitalize(5)).toBe('')
  })
})
