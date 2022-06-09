// Libraries
import { render } from 'lib/jest'

// Custom
import Example from './index'

test('Example test', () => {
  const { getByText } = render(<Example />)

  expect(getByText('Example 2')).toBeTruthy()
})
