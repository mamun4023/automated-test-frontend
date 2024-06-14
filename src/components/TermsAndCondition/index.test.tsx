import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import  User from './index'

describe('Condition and terms', () => {
        test('Check component status ', () => {
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

        test("User event iteraction", async()=>{
            render(<User />)
            const checkbox = screen.getByRole('checkbox')
            
            const user = userEvent.setup()
            await user.click(checkbox)

           expect(screen.getByRole('button')).toBeEnabled()

        })
});
