const React = require('react')
const { configure, shallow, render, mount } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;
const windowAdditions = {}
Object.assign(global.window, windowAdditions);

global.IS_TEST = true;
global.WEBPACK_BUILD_TYPE = 'development';
process.env.GA_ID = 'test-id'

window.scroll = (x, y) => {
  return [x, y]
}