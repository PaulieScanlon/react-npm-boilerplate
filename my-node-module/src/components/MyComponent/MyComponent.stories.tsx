import React from 'react'

import { MyComponent } from './MyComponent'

export default {
  title: 'MyComponent',
  parameters: {
    component: MyComponent,
    componentSubtitle: 'MyComponent is ...',
  },
}

export const usage = () => <MyComponent />
