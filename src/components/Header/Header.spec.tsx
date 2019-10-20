import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Header from './Header';

describe('Header', () => {
  it('should work', async () => {
    // const {findAllByTestId, debug, getByText} = render(<Header />)
    // expect(getByText('RESUME')).toBeInTheDocument()
    // window.scroll(0, 600)
    // const newEvent = new Event('scroll')
    // fireEvent(window,  newEvent)
    // getByText('RESUME')
    // debug()
    const Wrapper = mount(<Header />);
    // window.scroll(0, 600)
    // act(() => {
    //     window.scroll(0, 600)
    // })
    window.scroll(0, 600);
    // const newEvent = new Event('scroll')
    // window.dispatchEvent(newEvent)
    Wrapper.update();
    console.log(Wrapper.debug());
  });
});
