import React from 'react'

import Card from './Card'

describe('Card', () => {
  it('should match the snapshot', () => {
    const handleClickMock = jest.fn()
    const getRefMock = jest.fn()
    const Wrapper = shallow(
      <Card location={{}} handleClick={handleClickMock} getRef={getRefMock} />
    )
    expect(Wrapper).toMatchSnapshot()
  })
  it('should call the get ref function', () => {
    const handleClickMock = jest.fn()
    const getRefMock = jest.fn()
    const Wrapper = mount(<Card location={{}} handleClick={handleClickMock} getRef={getRefMock} />)
    expect(getRefMock).toBeCalled()
  })
})
