import React from 'react'
import { render } from '@testing-library/react'
import Portal from './Portal'

const createRootElement = (id: string) => {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)
  document.body.appendChild(rootContainer)
  return rootContainer
}
describe('Portal', () => {
  const id = 'portal'
  let rootContainer: HTMLDivElement
  beforeAll(() => {
    rootContainer = createRootElement('portal')
  })
  it('should match the snapshot', () => {
    const Wrapper = shallow(<Portal id="portal">Test</Portal>)
    expect(Wrapper).toMatchSnapshot()
  })
  it('should show the modals children', () => {
    const { getByText, debug } = render(
      <Portal id="portal">
        <div>Test</div>
      </Portal>,
    )
    expect(getByText('Test')).toBeTruthy()
  })
})
