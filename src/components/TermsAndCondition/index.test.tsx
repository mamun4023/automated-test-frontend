import {screen, render} from '@testing-library/react'

import  User from './index'

describe('Condition and terms', () => {
        test('should ', () => {
            render(<User />)
            
            // test case for heading 
            const heading = screen.getByRole("heading")
            expect(heading).toHaveTextContent("Agree to Terms and Conditions")
            
            // test cases for checkbox
            const checkbox = screen.getByRole('checkbox')
            expect(checkbox).toBeInTheDocument();
            expect(checkbox).not.toBeChecked()

            // test cases for button
            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
            expect(button).toHaveTextContent('Submit')
            expect(button).toBeDisabled()
        });

        test("should enable when checkbox is checked", ()=>{
            render(<User />)

        })
});
