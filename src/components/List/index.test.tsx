import {screen, render} from '@testing-library/react'

import {userProps} from './index'
import User from './index';

describe('List', () => {
    test('Empty User ', () => {
        const  users : userProps[] = []
        render(<User  userList={users}/>)
        expect( screen.getByText('No user available')).toBeInTheDocument()
    });

    test('List of user ', () => {
        const  users : userProps[] = [{id : 1, name : "Tohid"}]
        render(<User  userList={users}/>)
        users.forEach((user)=>{
            expect(screen.getByText(user.name)).toBeInTheDocument()
        }) 
    });
    
});