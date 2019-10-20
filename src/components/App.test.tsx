import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should work', async () => {
    const Root = () => (
      <Router>
        <Route path="/" component={App} />
      </Router>
    );

    const { getByTestId, debug } = render(<Root />);
    const arrow = await getByTestId('upArrow-testId');

    console.log(window.scrollY);
    fireEvent.click(arrow);
    // expect(window.scroll).toBeCalled()
    debug();
    console.log(window.scrollY);
  });
});
