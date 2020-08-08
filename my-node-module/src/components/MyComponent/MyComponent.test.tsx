import { render } from '@testing-library/react'

import { usage } from './MyComponent.stories'

describe('<MyComponent />', () => {
  test('renders the component', () => {
    const { asFragment } = render(usage())
    expect(asFragment()).toMatchSnapshot()
  })
})
