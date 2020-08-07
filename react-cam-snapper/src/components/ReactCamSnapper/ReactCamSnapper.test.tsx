import { render } from '@testing-library/react'

import { usage } from './ReactCamSnapper.stories'

describe('<ReactCamSnapper />', () => {
  test('renders the component', () => {
    const { asFragment } = render(usage())
    expect(asFragment()).toMatchSnapshot()
  })
})
