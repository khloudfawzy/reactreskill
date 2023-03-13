import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store/bookStore';
import Home from './Home';
import '@testing-library/jest-dom';

test('renders Home component ', async () => {
  render(<BrowserRouter><Provider store={store}><Home/></Provider></BrowserRouter>);
    const HomeWrapper = screen.getByRole("HomeWrapper")
    expect(HomeWrapper).toBeInTheDocument();
});
    