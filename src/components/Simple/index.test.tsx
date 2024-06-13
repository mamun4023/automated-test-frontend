import {screen, render} from "@testing-library/react"

import Index from './index'

describe('Basic test', () => {

    test('user test', () => {
        render(<Index />)
        
        //  testing by text
        const heading = screen.getByText(/hello world/i)
        expect(heading).toBeInTheDocument()

        // by ByRole
        const isHeading = screen.getByRole('heading')
        expect(isHeading).toBeInTheDocument()

        // specific headng
        const h1 = screen.getByRole('heading', {level : 1})
        expect(h1).toBeInTheDocument()
    });
});