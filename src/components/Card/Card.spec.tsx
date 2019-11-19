import React from 'react'
import * as cardsConfig from './cardsConfig'
import Card from './Card'

jest.mock('./cardsConfig')

describe('Card', () => {
  const history = {
    push: jest.fn(),
  }
  it('should render', () => {
    const Wrapper = shallow(<Card history={history} card={cardsConfig.cardsById[1]} />)
    expect(Wrapper.text()).toEqual('A Test Image')
  })
})
