import React from 'react'
import { render } from '@testing-library/react'
import Dialog from './Dialog'

describe('Dialog', () => {
  const props = {
    title: 'test title',
    isShown: false,
  }

  it('should match the snapshot when isShown is false', () => {
    const Wrapper = shallow(<Dialog {...props}>Test Dialog</Dialog>)
    expect(Wrapper).toMatchSnapshot()
  })
  it('should match the snapshot when isShown is true', () => {
    const Wrapper = shallow(
      <Dialog {...props} isShown>
        Test Dialog
      </Dialog>,
    )
    expect(Wrapper).toMatchSnapshot()
  })

  it('should render null when isShown is false', () => {
    const Wrapper = shallow(<Dialog {...props}>Test Dialog</Dialog>)
    expect(Wrapper.find('#portal-root').isEmptyRender()).toBeTruthy()
  })
  it('should render when isShown is true', () => {
    const Wrapper = shallow(
      <Dialog {...props} isShown>
        Test Dialog
      </Dialog>,
    )
    expect(Wrapper.isEmptyRender()).toBeFalsy()
  })
})
