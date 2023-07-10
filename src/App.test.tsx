import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('App test',() =>{
  //xit to skip
  //fit to do test.only
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

})

