// Import the js file to test
import { validURL } from '../js/validateURL'

describe('Testing the url functionality', () => {
  test('Testing the validURL() function', () => {
    expect(validURL).toBeDefined()
  })

  test('validURL return false for invalid url', () => {
    expect(validURL('test')).toBeFalsy()
  })
  test('validURL return true for valid url', () => {
    expect(validURL('http://test.com')).toBeTruthy()
  })
})
