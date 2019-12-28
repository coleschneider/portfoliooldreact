import React from 'react'
import NavLinks from './NavLinks'

describe('NavLinks', () => {
  it('should match the snapshot', () => {
    const Wrapper = shallow(<NavLinks />)
    expect(Wrapper).toMatchSnapshot()
  })
  it('should include the navlinks at different media queries', () => {
    const Links = shallow(<NavLinks />).find('NavLink')
    expect(Links).toHaveLength(3)
    expect(Links.first().props()).toEqual({ path: '/', display: 'Home' })
    expect(Links.at(1).props()).toEqual({ path: '/work', display: 'Work' })
    expect(Links.at(2).props()).toEqual({ path: '/static/media/Resume.pdf', display: 'Resume', target: '_blank' })
  })
})
