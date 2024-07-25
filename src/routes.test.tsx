// App.test.js

import { render, screen } from '@testing-library/react';
import { BrowserRouter  } from 'react-router-dom';
import AppRoutes from './routes';


describe("Routes testing", ()=>{
    test('should render home page', () => {
        render(
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        );
        expect(screen.getByText(/home page content/i)).toBeInTheDocument();
      });
      
      test('should render about page', () => {
        window.history.pushState({}, 'About page', '/about');
        render(
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        );
        expect(screen.getByText(/About page content/i)).toBeInTheDocument();
      });
      
})

