import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount, render } from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
// // require('@testing-library/jest-dom/extend-expect')
// const { configure, shallow, render, mount } = require('enzyme');

import { cleanup } from '@testing-library/react'

const StyledTests = require('jest-styled-components')

configure({ adapter: new Adapter() })
global.render = render
global.mount = mount
global.shallow = shallow
// global.shallow = shallow
// global.render = render
// global.mount = mount
const windowAdditions = {}
Object.assign(global.window, windowAdditions)

global.IS_TEST = true
global.WEBPACK_BUILD_TYPE = 'development'
process.env.GA_ID = 'test-id'
window.scroll = jest.fn()
// window.scroll = (x, y) => {
//   window.pageYOffset = y
//   window.pageXOffset = x
//   window.dispatchEvent(new Event('scroll'))

// }
// window.requestAnimationFrame = (fn) => fn()
// window.scroll = (x, y) => {
//   return [x, y]
// }
afterEach(cleanup)
